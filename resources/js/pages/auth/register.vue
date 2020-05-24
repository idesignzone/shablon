<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card shadow border-0">
        <div class="card-header bg-transparent pb-5">
          <div class="text-muted text-center mt-2 mb-3">
            <small>Sign up with</small>
          </div>
          <div class="btn-wrapper text-center">
            <a v-if="githubAuth" @click="login" href="#" class="btn btn-neutral btn-icon">
              <span class="btn-inner--icon"><img src="img/icons/common/github.svg"></span>
              <span class="btn-inner--text">Github</span>
            </a>
            <a href="#" class="btn btn-neutral btn-icon">
              <span class="btn-inner--icon"><img src="img/icons/common/google.svg"></span>
              <span class="btn-inner--text">Google</span>
            </a>
          </div>
        </div>
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <small>Or sign up with credentials</small>
          </div>
          <div v-if="mustVerifyEmail">
            <div class="alert alert-success" role="alert">
              {{ $t('verify_email_address') }}
            </div>
          </div>
          <div v-else>
            <form @submit.prevent="register" @keydown="form.onKeydown($event)">
              <!-- Name -->
                <base-input class="input-group-alternative mb-3"
                            placeholder="Name"
                            type="text" name="name"
                            addon-left-icon="fa fa-user"
                            v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }">
                </base-input>
                <has-error :form="form" field="name" />
              <!-- Email -->
                <base-input class="input-group-alternative mb-3"
                            placeholder="Email"
                            type="email" name="email"
                            addon-left-icon="fa fa-envelope"
                            v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }">
                </base-input>
                <has-error :form="form" field="email" />
              <!-- Password -->
                <base-input class="input-group-alternative"
                            placeholder="Password"
                            type="password" name="password"
                            addon-left-icon="fa fa-key"
                            v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }">
                </base-input>
                <has-error :form="form" field="password" />
              <!-- Password Confirmation -->
                <base-input class="input-group-alternative"
                            placeholder="Password"
                            type="password" name="password_confirmation"
                            addon-left-icon="fa fa-key"
                            v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }">
                </base-input>
                <has-error :form="form" field="password_confirmation" />
                <div class="text-center mt-3">
                    <!-- Submit Button -->
                    <v-button :loading="form.busy">
                      {{ $t('register') }}
                    </v-button>
                    <!-- GitHub Register Button -->
                    <login-with-github />
                </div>
            </form>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <router-link :to="{ name: 'password.request' }" class="text-light">
            <small>{{ $t('forgot_password') }}</small>
          </router-link>
        </div>
        <div class="col-6 text-right">
          <router-link to="/login" class="text-light">
            <small>Login into your account</small>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import LoginWithGithub from '~/components/LoginWithGithub'

export default {
  middleware: 'guest',
  layout: 'AuthLayout',
  components: {
    LoginWithGithub
  },

  metaInfo () {
    return { title: this.$t('register') }
  },

  data: () => ({
    form: new Form({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }),
    mustVerifyEmail: false
  }),

  methods: {
    async register () {
      // Register the user.
      const { data } = await this.form.post('/api/register')

      // Must verify email fist.
      if (data.status) {
        this.mustVerifyEmail = true
      } else {
        // Log in the user.
        const { data: { token } } = await this.form.post('/api/login')

        // Save the token.
        this.$store.dispatch('auth/saveToken', { token })

        // Update the user.
        await this.$store.dispatch('auth/updateUser', { user: data })

        // Redirect home.
        this.$router.push({ name: 'dashboard' })
      }
    }
  }
}
</script>
