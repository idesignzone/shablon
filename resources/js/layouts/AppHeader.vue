<template>
  <header class="header-global">
    <base-nav class="navbar-main navbar-light" transparent type="" effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img :src="logo" class="navbar-brand-img" alt="...">
<!--        <span class="nav-link-inner&#45;&#45;text">Shablon</span>-->
      </router-link>
      <div class="row" slot="content-header" slot-scope="{closeMenu}">
        <div class="col-6 collapse-brand">
          <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
            <img src="img/brand/blue.png">
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
          <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
            <i class="ni ni-ui-04 d-lg-none"></i>
            <span class="nav-link-inner--text">Components</span>
          </a>
          <div class="dropdown-menu-inner">
            <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
               class="media d-flex align-items-center">
              <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                <i class="ni ni-spaceship"></i>
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">Getting started</h6>
                <p class="description d-none d-md-inline-block mb-0">Get started with Bootstrap, the
                  world's most popular framework for building responsive sites.</p>
              </div>
            </a>
            <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
               class="media d-flex align-items-center">
              <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                <i class="ni ni-ui-04"></i>
              </div>
              <div class="media-body ml-3">
                <h5 class="heading text-warning mb-md-1">Components</h5>
                <p class="description d-none d-md-inline-block mb-0">Learn how to use Argon
                  compiling Scss, change brand colors and more.</p>
              </div>
            </a>
          </div>
        </base-dropdown>
        <base-dropdown tag="li" class="nav-item">
          <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
            <i class="ni ni-collection d-lg-none"></i>
            <span class="nav-link-inner--text">Examples</span>
          </a>
          <router-link to="/landing" class="dropdown-item">Landing</router-link>
          <router-link to="/profile" class="dropdown-item">Profile</router-link>
          <router-link to="/login" class="dropdown-item">Login</router-link>
          <router-link to="/register" class="dropdown-item">Register</router-link>
        </base-dropdown>
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="#" target="_blank" rel="noopener"
             data-toggle="tooltip" title="Like us on Facebook">
            <i class="fa fa-facebook-square"></i>
            <span class="nav-link-inner--text d-lg-none">Facebook</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="#"
             target="_blank" rel="noopener" data-toggle="tooltip" title="Follow us on Instagram">
            <i class="fa fa-instagram"></i>
            <span class="nav-link-inner--text d-lg-none">Instagram</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="#" target="_blank" rel="noopener"
             data-toggle="tooltip" title="Follow us on Twitter">
            <i class="fa fa-twitter-square"></i>
            <span class="nav-link-inner--text d-lg-none">Twitter</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="#"
             target="_blank" rel="noopener" data-toggle="tooltip" title="Star us on Github">
            <i class="fa fa-github"></i>
            <span class="nav-link-inner--text d-lg-none">Github</span>
          </a>
        </li>
        <locale-dropdown />
        <li class="nav-item d-none d-lg-block ml-lg-4">
          <template v-if="authenticated">
            <router-link :to="{ name: 'dashboard' }" class="btn btn-neutral btn-icon">
              {{ $t('dashboard') }}
            </router-link>
          </template>
          <template v-else>
            <router-link :to="{ name: 'login' }" class="btn btn-neutral btn-icon">
              {{ $t('login') }}
            </router-link>
            <router-link :to="{ name: 'register' }" class="btn btn-outline-neutral btn-icon">
              {{ $t('register') }}
            </router-link>
          </template>
        </li>
      </ul>
    </base-nav>
  </header>
</template>
<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from '~/components/LocaleDropdown'
import BaseNav from '~/components/Navigation/BaseNav'
import BaseDropdown from '~/components/BaseDropdown'
import CloseButton from '~/components/Navigation/CloseButton'
export default {
  name: 'app-header',
  components: {
    LocaleDropdown,
    BaseNav,
    CloseButton,
    BaseDropdown
  },
  props: {
    logo: {
      type: String,
      default: 'img/brand/logo.png',
      description: 'Landing app logo'
    },
    autoClose: {
      type: Boolean,
      default: true,
      description: 'Whether sidebar should autoclose on mobile when clicking an item'
    }
  },
  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>
<style>
</style>
