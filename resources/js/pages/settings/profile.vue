<template>
  <div>
    <card shadow>
      <div slot="header" class="border-0">
        <div class="row align-items-center">
          <div class="col-8">
            <h3 class="mb-0">My account</h3>
          </div>
          <div class="col-4 text-right">
            <a href="#!" class="btn btn-sm btn-primary">Settings</a>
          </div>
        </div>
      </div>
      <template>
        <form @submit.prevent="update" @keydown="form.onKeydown($event)">
          <alert-success :form="form" :message="$t('info_updated')" />
          <h6 class="heading-small text-muted mb-4">User information</h6>
          <div class="pl-lg-4">
            <div class="row">
              <div class="col-lg-6">
                <base-input alternative=""
                            label="Username"
                            placeholder="Username"
                            input-classes="form-control-alternative"
                            v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }"
                />
                <has-error :form="form" field="name" />
              </div>
              <div class="col-lg-6">
                <base-input alternative=""
                            label="Email address"
                            placeholder="jesse@example.com"
                            input-classes="form-control-alternative"
                            v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }"
                />
                <has-error :form="form" field="email" />
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <base-input alternative=""
                            label="First name"
                            placeholder="First name"
                            input-classes="form-control-alternative"
                            v-model="model.firstName"
                />
              </div>
              <div class="col-lg-6">
                <base-input alternative=""
                            label="Last name"
                            placeholder="Last name"
                            input-classes="form-control-alternative"
                            v-model="model.lastName"
                />
              </div>
            </div>
          </div>
          <hr class="my-4" />
          <!-- Address -->
          <h6 class="heading-small text-muted mb-4">Contact information</h6>
          <div class="pl-lg-4">
            <div class="row">
              <div class="col-md-12">
                <base-input alternative=""
                            label="Address"
                            placeholder="Home Address"
                            input-classes="form-control-alternative"
                            v-model="model.address"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <base-input alternative=""
                            label="City"
                            placeholder="City"
                            input-classes="form-control-alternative"
                            v-model="model.city"
                />
              </div>
              <div class="col-lg-4">
                <base-input alternative=""
                            label="Country"
                            placeholder="Country"
                            input-classes="form-control-alternative"
                            v-model="model.country"
                />
              </div>
              <div class="col-lg-4">
                <base-input alternative=""
                            label="Postal code"
                            placeholder="Postal code"
                            input-classes="form-control-alternative"
                            v-model="model.zipCode"
                />
              </div>
            </div>
          </div>
          <hr class="my-4" />
          <!-- Description -->
          <h6 class="heading-small text-muted mb-4">About me</h6>
          <div class="pl-lg-4">
            <div class="form-group">
              <base-input alternative=""
                          label="About Me">
                <textarea rows="4" class="form-control form-control-alternative" placeholder="A few words about you ...">A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</textarea>
              </base-input>
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
  </div>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'

export default {
  scrollToTop: false,
  name: 'user-profile',
  data () {
    return {
      model: {
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        zipCode: '',
        about: ''
      },
      form: new Form({
        name: '',
        email: ''
      })
    }
  },
  metaInfo () {
    return { title: this.$t('settings') }
  },
  computed: mapGetters({
    user: 'auth/user'
  }),
  created () {
    // Fill the form with user data.
    this.form.keys().forEach(key => {
      this.form[key] = this.user[key]
    })
  },
  methods: {
    async update () {
      const { data } = await this.form.patch('/api/settings/profile')

      this.$store.dispatch('auth/updateUser', { user: data })
    }
  }
}
</script>
