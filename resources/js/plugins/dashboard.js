import globalDirectives from './globalDirectives'
import SidebarPlugin from '~/components/SidebarPlugin/index'
import NotificationPlugin from '~/components/NotificationPlugin/index'

export default {
  install (Vue) {
    Vue.use(globalDirectives)
    Vue.use(NotificationPlugin)
    Vue.use(SidebarPlugin)
  }
}
