<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card shadow border-0">
        <div class="card-header bg-transparent pb-5">
          <div class="text-muted text-center mt-2 mb-3"><small>Sign in with</small></div>
          <div class="btn-wrapper text-center">
            <a href="#" class="btn btn-neutral btn-icon">
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
            <small>Or sign in with credentials</small>
          </div>
          <form role="form" @submit.prevent="login" @keydown="form.onKeydown($event)">
            <base-input alternative
                        class="mb-3"
                        type="email"
                        name="email"
                        placeholder="Email"
                        v-model="form.email"
                        :class="{ 'is-invalid': form.errors.has('email') }"
                        addon-left-icon="fa fa-envelope">
            </base-input>
            <has-error :form="form" field="email" />
            <base-input alternative
                        type="password"
                        name="password"
                        placeholder="Password"
                        v-model="form.password"
                        :class="{ 'is-invalid': form.errors.has('password') }"
                        addon-left-icon="fa fa-key">
            </base-input>
            <has-error :form="form" field="password" />
            <base-checkbox v-model="remember" name="remember">
              {{ $t('remember_me') }}
            </base-checkbox>
            <div class="text-center mt-3">
              <v-button :loading="form.busy">
                {{ $t('login') }}
              </v-button>
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <router-link :to="{ name: 'password.request' }" class="text-light">
            <small>{{ $t('forgot_password') }}</small>
          </router-link>
        </div>
        <div class="col-6 text-right">
          <router-link to="/register" class="text-light"><small>Create new account</small></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import BaseInput from '~/components/BaseInput'
import BaseCheckbox from '~/components/BaseCheckbox'

export default {
  layout: 'AuthLayout',
  middleware: 'guest',
  components: {
    BaseInput,
    BaseCheckbox
  },
  metaInfo () {
    return { title: this.$t('login') }
  },

  data: () => ({
    form: new Form({
      email: '',
      password: ''
    }),
    remember: false
  }),

  methods: {
    async login () {
      // Submit the form.
      const { data } = await this.form.post('/api/login')

      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: data.token,
        remember: this.remember
      })

      // Fetch the user.
      await this.$store.dispatch('auth/fetchUser')

      // Redirect home.
      this.$router.push({ name: 'settings.profile' })
    }
  }
}
</script>
