import Vue from 'vue'
import Card from '~/components/Cards/Card'
import Child from './Child'
import Button from './Button'
import Checkbox from './Checkbox'
import BaseButton from '~/components/BaseButton'
import Badge from '~/components/Badge'
import icon from '~/components/icon'
import { HasError, AlertError, AlertSuccess } from 'vform'

// Components that are registered globaly.
[
  Card,
  BaseButton,
  Badge,
  Child,
  icon,
  Button,
  Checkbox,
  HasError,
  AlertError,
  AlertSuccess
].forEach(Component => {
  Vue.component(Component.name, Component)
})
