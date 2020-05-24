<template>
  <div>
    <app-header/>
      <child />
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from '~/layouts/AppHeader'
import AppFooter from '~/layouts/AppFooter'
import { mapGetters } from 'vuex'
export default {
  name: 'basic',
  components: {
    AppHeader,
    AppFooter
  },
  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>

<style lang="scss">

</style>
