<template>
  <header class="header-global">
    <base-nav class="navbar-main navbar-light" transparent type="" effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
<!--        <img :src="logo" class="navbar-brand-img" alt="...">-->
        <h2 class="navbar-brand-text mt-2"><i class="fa fa-palette d-inline text-primary text-xl"></i> Shablon</h2>
      </router-link>
      <div class="row" slot="content-header" slot-scope="{closeMenu}">
        <div class="col-6 collapse-brand">
          <a href="#">
<!--            <img :src="logo">-->
            <h2><i class="fa fa-palette d-inline text-primary"></i> Shablon</h2>
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <li class="nav-item">
          <router-link to="/components" class="nav-link"><i class="fa fa-swatchbook d-lg-none"></i>  <span class="nav-link-inner--text">Components</span></router-link>
        </li>
        <base-dropdown tag="li" class="nav-item">
          <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
            <i class="fa fa-list d-lg-none"></i>
            <span class="nav-link-inner--text">Dropdown</span>
          </a>
          <router-link to="#" class="dropdown-item">Item 1</router-link>
          <router-link to="#" class="dropdown-item">Item 2</router-link>
          <router-link to="#" class="dropdown-item">Item 3</router-link>
          <router-link to="#" class="dropdown-item">Item 4</router-link>
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
          <a class="nav-link nav-link-icon" href="https://github.com/idesignzone/shablon"
             target="_blank" rel="noopener" data-toggle="tooltip" title="Star us on Github">
            <i class="fa fa-github"></i>
            <span class="nav-link-inner--text d-lg-none">Github</span>
          </a>
        </li>
        <locale-dropdown />
        <li class="nav-item d-none d-lg-block ml-lg-4">
          <template v-if="authenticated">
            <router-link :to="{ name: 'dashboard' }" class="btn btn-neutral btn-sm text-uppercase">
              {{ $t('dashboard') }}
            </router-link>
          </template>
          <template v-else>
            <router-link :to="{ name: 'login' }" class="btn btn-neutral btn-sm text-uppercase">
              {{ $t('login') }}
            </router-link>
            <router-link :to="{ name: 'register' }" class="btn btn-outline-neutral btn-sm text-uppercase">
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
import BaseNav from '~/components/Navigation/BaseNav'
import BaseDropdown from '~/components/BaseDropdown'
import LocaleDropdown from '~/components/LocaleDropdown'
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
