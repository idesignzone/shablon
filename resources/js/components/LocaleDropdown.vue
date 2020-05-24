<template>
    <base-dropdown tag="li" class="nav-item">
      <a slot="title" href="#" class="nav-link">
        <span class="mb-0 text-sm  font-weight-bold">{{ locales[locale] }}</span>
      </a>
      <a v-for="(value, key) in locales" :key="key" class="dropdown-item" href="#" @click.prevent="setLocale(key)">{{ value }}</a>
    </base-dropdown>
</template>

<script>
import { mapGetters } from 'vuex'
import { loadMessages } from '~/plugins/i18n'
import BaseDropdown from '~/components/BaseDropdown'

export default {
  components: {
    BaseDropdown
  },
  computed: mapGetters({
    locale: 'lang/locale',
    locales: 'lang/locales'
  }),

  methods: {
    setLocale (locale) {
      if (this.$i18n.locale !== locale) {
        loadMessages(locale)

        this.$store.dispatch('lang/setLocale', { locale })
      }
    }
  }
}
</script>
