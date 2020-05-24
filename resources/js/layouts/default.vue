<template>
  <div>
    <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
      <side-bar :background-color="sidebarBackground" short-title="Argon" title="Argon">
        <template slot="links">
          <sidebar-item :link="{name: 'Dashboard', icon: 'fa fa-tachometer-alt text-primary', path: '/dashboard'}"/>
          <sidebar-item :link="{name: 'User Profile', icon: 'fa fa-user-circle text-yellow', path: '/settings/profile'}"/>
          <sidebar-item :link="{name: 'Login', icon: 'fa fa-sign-in-alt text-info', path: '/login'}"/>
          <sidebar-item :link="{name: 'Register', icon: 'fa fa-user-plus text-pink', path: '/register'}"/>
        </template>
      </side-bar>
      <div class="main-content" :data="sidebarBackground">
        <dashboard-header/>
        <div @click="toggleSidebar">
          <fade-transition :duration="200" origin="center top" mode="out-in">
            <!-- your content here -->
            <router-view></router-view>
          </fade-transition>
          <dashboard-footer v-if="!$route.meta.hideFooter" name=""></dashboard-footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from '~/layouts/DashboardHeader'
import DashboardFooter from '~/layouts/DashboardFooter'
import { FadeTransition } from 'vue2-transitions'

export default {
  name: 'default',
  components: {
    DashboardHeader,
    DashboardFooter,
    FadeTransition
  },
  data () {
    return {
      sidebarBackground: 'vue' // vue|blue|orange|green|red|primary
    }
  },
  methods: {
    toggleSidebar () {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      }
    }
  }
}
</script>

<style>

</style>
