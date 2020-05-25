<template>
  <div>
    <base-header type="gradient-success" class="pb-8 pt-9 pt-md-9">
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <stats-card title="Total traffic"
                      type="gradient-red"
                      sub-title="350,897"
                      icon="fa fa-american-sign-language-interpreting"
                      class="mb-4 mb-xl-0"
          >

            <template slot="footer">
              <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card title="Total traffic"
                      type="gradient-orange"
                      sub-title="2,356"
                      icon="fa fa-cat"
                      class="mb-4 mb-xl-0"
          >

            <template slot="footer">
              <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 12.18%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card title="Sales"
                      type="gradient-green"
                      sub-title="924"
                      icon="fa fa-ankh"
                      class="mb-4 mb-xl-0"
          >

            <template slot="footer">
              <span class="text-danger mr-2"><i class="fa fa-arrow-down"></i> 5.72%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>

        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card title="Performance"
                      type="gradient-info"
                      sub-title="49,65%"
                      icon="fa fa-assistive-listening-systems"
                      class="mb-4 mb-xl-0"
          >

            <template slot="footer">
              <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 54.8%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
      </div>
    </base-header>
    <div class="container-fluid mt-n6">
      <!--Tables-->
      <div class="row mt-5">
        <div class="col-xl-8 mb-5 mb-xl-0">
          <page-visits-table></page-visits-table>
        </div>
        <div class="col-xl-4">
          <social-traffic-table></social-traffic-table>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <projects-table title="Light Table"></projects-table>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <projects-table type="dark" title="Dark Table"></projects-table>
        </div>
      </div>
      <!--End tables-->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

// Tables
import SocialTrafficTable from '~/components/Tables/SocialTrafficTable'
import PageVisitsTable from '~/components/Tables/PageVisitsTable'
import ProjectsTable from '~/components/Tables/ProjectsTable'

import BaseHeader from '~/components/BaseHeader'
import StatsCard from '~/components/Cards/StatsCard'

export default {
  middleware: 'auth',
  components: {
    PageVisitsTable,
    SocialTrafficTable,
    ProjectsTable,
    BaseHeader,
    StatsCard
  },
  metaInfo () {
    return { title: this.$t('dashboard') }
  },
  data () {
    return {

    }
  },
  methods: {

  },
  mounted () {

  },
  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>
<style>
  .bg-default {
    background-color: #172b4d!important;
  }
</style>
