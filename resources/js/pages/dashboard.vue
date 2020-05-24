<template>
  <div>
    <base-header type="gradient-success" class="pb-8 pt-9 pt-md-9">
      <!-- Card stats -->
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
    <!--Charts-->
    <div class="container-fluid mt-n6">
      <div class="row">
        <div class="col-xl-8 mb-5 mb-xl-0">
          <card type="default" header-classes="bg-transparent">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <p class="text-light text-uppercase ls-1 mb-1">Overview</p>
                <h5 class="h5 text-white mb-0">Sales value</h5>
              </div>
              <div class="col">
                <ul class="nav nav-pills justify-content-end">
                  <li class="nav-item mr-2 mr-md-0">
                    <a class="nav-link py-2 px-3"
                       href="#"
                       :class="{active: bigLineChart.activeIndex === 0}"
                       @click.prevent="initBigChart(0)">
                      <span class="d-none d-md-block">Month</span>
                      <span class="d-md-none">M</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link py-2 px-3"
                       href="#"
                       :class="{active: bigLineChart.activeIndex === 1}"
                       @click.prevent="initBigChart(1)">
                      <span class="d-none d-md-block">Week</span>
                      <span class="d-md-none">W</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <line-chart
              :height="350"
              ref="bigChart"
              :chart-data="bigLineChart.chartData"
              :extra-options="bigLineChart.extraOptions"
            >
            </line-chart>

          </card>
        </div>

        <div class="col-xl-4">
          <card header-classes="bg-transparent">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <p class="text-uppercase text-muted ls-1 mb-1">{{ $t('you_are_logged_in') }}</p>
                <h5 class="mb-0">Total orders</h5>
              </div>
            </div>

            <bar-chart
              :height="350"
              ref="barChart"
              :chart-data="redBarChart.chartData"
            >
            </bar-chart>
          </card>
        </div>
      </div>
      <!-- End charts-->

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

// Charts
import * as chartConfigs from '~/components/Charts/config'
import LineChart from '~/components/Charts/LineChart'
import BarChart from '~/components/Charts/BarChart'
// Tables
import SocialTrafficTable from '~/components/tables/SocialTrafficTable'
import PageVisitsTable from '~/components/tables/PageVisitsTable'
import ProjectsTable from '~/components/tables/ProjectsTable'

import BaseHeader from '~/components/BaseHeader'
import StatsCard from '~/components/Cards/StatsCard'

export default {
  middleware: 'auth',
  components: {
    LineChart,
    BarChart,
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
      bigLineChart: {
        allData: [
          [0, 20, 10, 30, 15, 40, 20, 60, 60],
          [0, 20, 5, 25, 10, 30, 15, 40, 40]
        ],
        activeIndex: 0,
        chartData: {
          datasets: [],
          labels: []
        },
        extraOptions: chartConfigs.blueChartOptions,
      },
      redBarChart: {
        chartData: {
          labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Sales',
            data: [25, 20, 30, 22, 17, 29]
          }]
        }
      }
    }
  },
  methods: {
    initBigChart (index) {
      let chartData = {
        datasets: [
          {
            label: 'Performance',
            data: this.bigLineChart.allData[index]
          }
        ],
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
      this.bigLineChart.chartData = chartData
      this.bigLineChart.activeIndex = index
    }
  },
  mounted () {
    this.initBigChart(0)
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
