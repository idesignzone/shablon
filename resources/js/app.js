import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import dashboard from '~/plugins/dashboard'

import App from '~/components/App'

// dashboard
import Badge from '~/components/Badge'
import BaseAlert from '~/components/BaseAlert'
import BaseButton from '~/components/BaseButton'
import BaseCheckbox from '~/components/BaseCheckbox'
import BaseInput from '~/components/BaseInput'
import BaseDropdown from '~/components/BaseDropdown'
import BaseNav from '~/components/Navigation/BaseNav'
import DashboardBaseNav from '~/components/Navigation/DashboardBaseNav'
import BasePagination from '~/components/BasePagination'
import BaseProgress from '~/components/BaseProgress'
import BaseRadio from '~/components/BaseRadio'
import BaseSlider from '~/components/BaseSlider'
import BaseSwitch from '~/components/BaseSwitch'
import BaseTable from '~/components/BaseTable'
import BaseHeader from '~/components/BaseHeader'
import Card from '~/components/Cards/Card'
import StatsCard from '~/components/Cards/StatsCard'
import Modal from '~/components/Modal'
import TabPane from '~/components/Tabs/TabPane'
import Tabs from '~/components/Tabs/Tabs'

import '~/plugins'
import '~/components'

Vue.config.productionTip = false

Vue.use(VueLazyload)
Vue.use(dashboard)

// Dashboard
Vue.component(Badge.name, Badge)
Vue.component(BaseAlert.name, BaseAlert)
Vue.component(BaseButton.name, BaseButton)
Vue.component(BaseInput.name, BaseInput)
Vue.component(BaseNav.name, BaseNav)
Vue.component(DashboardBaseNav.name, DashboardBaseNav)
Vue.component(BaseDropdown.name, BaseDropdown)
Vue.component(BaseCheckbox.name, BaseCheckbox)
Vue.component(BasePagination.name, BasePagination)
Vue.component(BaseProgress.name, BaseProgress)
Vue.component(BaseRadio.name, BaseRadio)
Vue.component(BaseSlider.name, BaseSlider)
Vue.component(BaseSwitch.name, BaseSwitch)
Vue.component(BaseTable.name, BaseTable)
Vue.component(BaseHeader.name, BaseHeader)
Vue.component(Card.name, Card)
Vue.component(StatsCard.name, StatsCard)
Vue.component(Modal.name, Modal)
Vue.component(TabPane.name, TabPane)
Vue.component(Tabs.name, Tabs)

/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})
