<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card shadow border-0">
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <small>Enter your email to reset password.</small>
          </div>
          <form @submit.prevent="reset" @keydown="form.onKeydown($event)">
            <alert-success :form="form" :message="status" />

            <!-- Email -->
            <div class="form-group row">
              <base-input class="input-group-alternative mb-3"
                          placeholder="Email"
                          type="email" name="email"
                          addon-left-icon="fa fa-envelope"
                          v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }">
              </base-input>
              <has-error :form="form" field="email" />
            </div>

            <!-- Password -->
            <div class="form-group row">
              <base-input class="input-group-alternative"
                          placeholder="Password"
                          type="password" name="password"
                          addon-left-icon="fa fa-key"
                          v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }">
              </base-input>
              <has-error :form="form" field="password" />
            </div>

            <!-- Password Confirmation -->
            <div class="form-group row">
              <base-input class="input-group-alternative"
                          placeholder="Password"
                          type="password" name="password_confirmation"
                          addon-left-icon="fa fa-key"
                          v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }">
              </base-input>
              <has-error :form="form" field="password_confirmation" />
            </div>

            <!-- Submit Button -->
            <div class="form-group row">
              <div class="col-md-9 ml-md-auto">
                <v-button :loading="form.busy">
                  {{ $t('reset_password') }}
                </v-button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <router-link to="/login" class="text-light">
            <small>Login into your account</small>
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

export default {
  middleware: 'guest',
  layout: 'AuthLayout',
  metaInfo () {
    return { title: this.$t('reset_password') }
  },

  data: () => ({
    status: '',
    form: new Form({
      token: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
  }),

  created () {
    this.form.email = this.$route.query.email
    this.form.token = this.$route.params.token
  },

  methods: {
    async reset () {
      const { data } = await this.form.post('/api/password/reset')

      this.status = data.status

      this.form.reset()
    }
  }
}
</script>
