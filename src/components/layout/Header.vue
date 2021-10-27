<template lang='pug'>
  header(:class='["header", {light: isHero}]')
    .container
      span.header__logo Zoe Sever
      nav(:class='["header__nav", {open: $store.state.common.burgerIsOpen }]')
        ul.header__nav-list(:class='{mobile: $store.state.common.mobile}')
          li.header__nav-item
            router-link(to='/' ) About
          li.header__nav-item
            router-link(to='/gallery' ) Gallery
          li.header__nav-item
            router-link(to='/' ) Exhibitions
          li.header__nav-item
            router-link(to='/' ) Art pieces all over the world
          li.header__nav-item
            router-link(to='/contact' ) Contacts
          li.header__nav-item
            a(
              href='#'
              v-if='$store.state.auth.user.loggedIn'
              @click.prevent='logout'
            ) Logout
      button(
        type='button'
        :class='["burger__btn", {open: $store.state.common.burgerIsOpen }, {dark: isHero}]'
        v-if='$store.state.common.mobile'
        @click.prevent='$store.commit("common/BURGER_TOGGLE")'
      )
        span
        span
        span
</template>

<script>
import { qs } from '@/helpers'
import { mapState } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapState({
      burgerIsOpen: s => s.common.burgerIsOpen
    }),
    isHero() {
      return this.$route.name === String('About')
    },

  },
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout')
    }
  },
  watch: {
    burgerIsOpen(val) {
      val ? qs('body').classList.add('lock') : qs('body').classList.remove('lock')
    },
    '$screen.width'() {
      if (this.burgerIsOpen) {
        this.$store.state.common.burgerIsOpen = false
      }
    },
  }
}
</script>
