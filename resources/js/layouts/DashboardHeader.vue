<template>
  <div>
    <base-nav class="navbar-top navbar-dark" :show-toggle-button="false" expand>
      <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
        <div class="form-group mb-0">
          <base-input placeholder="Search"
                      class="input-group-alternative"
                      alternative=""
                      addon-right-icon="fas fa-search">
          </base-input>
        </div>
      </form>
      <ul class="navbar-nav align-items-center d-none d-md-flex">
        <locale-dropdown />
        <li v-if="user" class="nav-item dropdown">
          <base-dropdown class="nav-link pr-0">
            <div class="media align-items-center" slot="title">
                <span class="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" :src="user.photo_url">
                </span>
              <div class="media-body ml-2 d-none d-lg-block">
                <span class="mb-0 text-sm  font-weight-bold">{{ user.name }}</span>
              </div>
            </div>

            <template>
              <div class=" dropdown-header noti-title">
                <h6 class="text-overflow m-0 text-gray">Welcome!</h6>
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
            </template>
          </base-dropdown>
        </li>
        <!-- Guest -->
        <template v-else>
          <li class="nav-item">
            <router-link :to="{ name: 'login' }" class="nav-link" active-class="active">
              {{ $t('login') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'register' }" class="nav-link" active-class="active">
              {{ $t('register') }}
            </router-link>
          </li>
        </template>
      </ul>
    </base-nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from '~/components/LocaleDropdown'
import BaseNav from '~/components/Navigation/DashboardBaseNav'
import BaseDropdown from '~/components/BaseDropdown'
import BaseInput from '~/components/BaseInput'

export default {
  name: 'dashboard-header',
  components: {
    LocaleDropdown,
    BaseNav,
    BaseDropdown,
    BaseInput
  },
  data () {
    return {
      activeNotifications: false,
      showMenu: false,
      searchQuery: ''
    }
  },
  methods: {
    toggleSidebar () {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    },
    hideSidebar () {
      this.$sidebar.displaySidebar(false)
    },
    toggleMenu () {
      this.showMenu = !this.showMenu
    },
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    }
  },
  computed: mapGetters({
    user: 'auth/user'
  })
}
</script>

<style scoped>

</style>
