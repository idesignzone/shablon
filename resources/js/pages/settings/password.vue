<template>
  <card shadow>
    <div slot="header" class="border-0">
      <div class="row align-items-center">
        <div class="col-8">
          <h3 class="mb-0">Account security</h3>
        </div>
        <div class="col-4 text-right">
          <router-link to="/settings/profile" class="btn btn-sm btn-primary">
            <i class="fa fa-user-circle"></i> Profile
          </router-link>
        </div>
      </div>
    </div>
    <template>
      <form @submit.prevent="update" @keydown="form.onKeydown($event)">
        <alert-success :form="form" :message="$t('password_updated')" />
        <h6 class="heading-small text-muted mb-4">Edit password</h6>
        <div class="pl-lg-4">
          <div class="row">
            <div class="col-lg-6">
              <base-input alternative=""
                          label="Password"
                          type="password"
                          name="password"
                          placeholder="password"
                          input-classes="form-control-alternative"
                          v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }"
              />
              <has-error :form="form" field="password" />
            </div>
            <div class="col-lg-6">
              <base-input alternative=""
                          label="Confirm password"
                          type="password"
                          name="password_confirmation"
                          placeholder="confirm password"
                          input-classes="form-control-alternative"
                          v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }"
              />
              <has-error :form="form" field="password_confirmation" />
            </div>
          </div>
        </div>
        <!-- Submit Button -->
        <div class="form-group row">
          <div class="col-md-9 ml-md-auto">
            <v-button :loading="form.busy" type="success">
              {{ $t('update') }}
            </v-button>
          </div>
        </div>
      </form>
    </template>
  </card>
</template>

<script>
import Form from 'vform'

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  data: () => ({
    form: new Form({
      password: '',
      password_confirmation: ''
    })
  }),

  methods: {
    async update () {
      await this.form.patch('/api/settings/password')

      this.form.reset()
    }
  }
}
</script>
