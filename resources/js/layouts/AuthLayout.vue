<template>
  <div class="main-content bg-default">
    <!-- Navbar -->
    <base-nav class="navbar-top navbar-horizontal navbar-dark"
              containerClasses="px-4 container"
              expand>
      <router-link slot="brand" class="navbar-brand" to="/">
        <!--<img :src="logo"/>-->
        <h5 class="mt-2"><i class="fa fa-palette d-inline"></i> Shablon</h5>
      </router-link>
      <template v-slot="{closeMenu}">
        <!-- Collapse header -->
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <router-link to="/">
<!--                <img :src="logo">-->
                <h5><i class="fa fa-palette d-inline"></i> Shablon</h5>
              </router-link>
            </div>
            <div class="col-6 collapse-close">
              <button type="button"
                      @click="closeMenu"
                      class="navbar-toggler"
                      aria-label="Toggle sidenav">
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <!-- Navbar items -->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link nav-link-icon" :to="{ name: 'register' }" active-class="active">
              <i class="ni ni-circle-08"></i>
              <span class="nav-link-inner--text">{{ $t('register') }}</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link nav-link-icon" :to="{ name: 'login' }" active-class="active">
              <i class="ni ni-key-25"></i>
              <span class="nav-link-inner--text">{{ $t('login') }}</span>
            </router-link>
          </li>
        </ul>
      </template>
    </base-nav>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-8 bp-9">
      <div class="container">
        <div class="header-body text-center mb-7">
          <div class="row justify-content-center">
            <div class="col-lg-5 col-md-6">
              <h1 class="text-white">Welcome!</h1>
              <p class="text-lead text-white">Use these awesome forms to login or create new account in
                your project for free.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <div class="container mt-n6 pb-5">
      <slide-y-up-transition mode="out-in" origin="center top">
        <router-view></router-view>
      </slide-y-up-transition>
    </div>
    <footer class="py-5">
      <div class="container">
        <div class="row align-items-center justify-content-xl-between">
          <div class="col-xl-6">
            <div class="copyright text-center text-xl-left text-muted">
              &copy; {{year}} <a href="#" class="font-weight-bold ml-1"
                                 target="_blank">iDesignzone</a>
            </div>
          </div>
          <div class="col-xl-6">
            <ul class="nav nav-footer justify-content-center justify-content-xl-end">
              <li class="nav-item">
                <a href="#" class="nav-link" target="_blank">About
                  Us</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link" target="_blank">Blog</a>
              </li>
              <li class="nav-item">
                <a href="#"
                   class="nav-link" target="_blank">MIT License</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { SlideYUpTransition } from 'vue2-transitions'
export default {
  name: 'AuthLayout',
  components: {
    SlideYUpTransition
  },
  props: {
    logo: {
      type: String,
      default: 'img/brand/logo.png',
      description: 'Auth Logo'
    },
    autoClose: {
      type: Boolean,
      default: true,
      description: 'Whether sidebar should autoclose on mobile when clicking an item'
    }
  },
  data () {
    return {
      year: new Date().getFullYear(),
      showMenu: false
    }
  }
}
</script>

<style scoped>
  .bg-default {
    background-color: #172b4d!important;
  }
</style>
