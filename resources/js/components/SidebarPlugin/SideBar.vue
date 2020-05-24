<template>
    <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
        <div class="container-fluid">

            <!--Toggler-->
            <navbar-toggle-button @click.native="showSidebar">
                <span class="navbar-toggler-icon"></span>
            </navbar-toggle-button>
            <router-link class="navbar-brand" to="/">
                <img :src="logo" class="navbar-brand-img" alt="...">
            </router-link>
            <slot name="mobile-right">
                <ul class="nav align-items-center d-md-none">
                  <locale-dropdown />
                    <base-dropdown class="nav-item" position="right">
                        <a slot="title" class="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-bell"></i>
                        </a>

                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </base-dropdown>
                    <base-dropdown class="nav-item" position="right">
                        <a slot="title" class="nav-link" href="#" role="button">
                            <div class="media align-items-center">
                              <span class="avatar avatar-sm rounded-circle">
                                <img alt="Image placeholder" :src="user.photo_url">
                              </span>
                            </div>
                        </a>

                        <div class=" dropdown-header noti-title">
                            <h6 class="text-overflow m-0">{{ user.name }}</h6>
                        </div>
                      <router-link :to="{ name: 'settings.profile' }" class="dropdown-item">
                        <i class="fa fa-user"></i>
                        <span>My profile</span>
                      </router-link>
                      <router-link :to="{ name: 'settings.password' }" class="dropdown-item">
                        <i class="fa fa-gear"></i>
                        <span>{{ $t('settings') }}</span>
                      </router-link>
                      <router-link to="/profile" class="dropdown-item">
                        <i class="fa fa-calendar"></i>
                        <span>Activity</span>
                      </router-link>
                      <router-link to="/profile" class="dropdown-item">
                        <i class="fa fa-support"></i>
                        <span>Support</span>
                      </router-link>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item" @click.prevent="logout">
                          <i class="fa fa-sign-out-alt"></i>
                          <span>{{ $t('logout') }}</span>
                        </a>
                    </base-dropdown>
                </ul>
            </slot>
            <slot></slot>
            <div v-show="$sidebar.showSidebar" class="navbar-collapse collapse show" id="sidenav-collapse-main">

                <div class="navbar-collapse-header d-md-none">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                            <router-link to="/">
                                <img :src="logo">
                            </router-link>
                        </div>
                        <div class="col-6 collapse-close">
                            <navbar-toggle-button @click.native="closeSidebar"></navbar-toggle-button>
                        </div>
                    </div>
                </div>

                <ul class="navbar-nav">
                    <slot name="links">
                    </slot>
                </ul>
                <!--Divider-->
                <hr class="my-3">
                <!--Heading-->
                <h6 class="navbar-heading text-muted">Navigation</h6>
                <!--Navigation-->
                <ul class="navbar-nav mb-md-3">
                  <li class="nav-item">
                    <a class="nav-link" href="#navbar-examples" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="navbar-examples">
                      <i class="fa fa-caret-square-down" style="color: #f4645f;"></i>
                      <span class="nav-link-text" style="color: #f4645f;">Dropdown</span>
                    </a>

                    <div class="collapse" id="navbar-examples">
                      <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            item 1
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            item 2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           href="#">
                            <i class="fa fa-check"></i> Item 1
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           href="#">
                            <i class="fa fa-check"></i> Item 2
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           href="#">
                            <i class="fa fa-check"></i> Item 3
                        </a>
                    </li>
                </ul>
            </div>
            </div>
    </nav>
</template>
<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from '~/components/LocaleDropdown'
import NavbarToggleButton from '~/components/Navigation/NavbarToggleButton'

export default {
  name: 'sidebar',
  components: {
    NavbarToggleButton,
    LocaleDropdown
  },
  props: {
    logo: {
      type: String,
      default: 'img/brand/logo.png',
      description: 'Sidebar app logo'
    },
    autoClose: {
      type: Boolean,
      default: true,
      description: 'Whether sidebar should autoclose on mobile when clicking an item'
    }
  },
  provide () {
    return {
      autoClose: this.autoClose
    }
  },
  methods: {
    closeSidebar () {
      this.$sidebar.displaySidebar(false)
    },
    showSidebar () {
      this.$sidebar.displaySidebar(true)
    },
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    }
  },
  beforeDestroy () {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false;
    }
  },
  computed: mapGetters({
    user: 'auth/user'
  })
}
</script>
<style>

</style>
