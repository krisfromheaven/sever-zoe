<template lang='pug'>
  header.header
    .container
      span.header__logo Zoe Sever
      nav(:class='["header__nav", {open: $store.state.common.burgerIsOpen }]')
        ul.header__nav-list
          li.header__nav-item
            router-link(to='/' ) About
          li.header__nav-item
            router-link(to='/' ) Gallery
          li.header__nav-item
            router-link(to='/' ) Exhibitions
          li.header__nav-item
            router-link(to='/' ) Art pieces all over the world
          li.header__nav-item
            router-link(to='/' ) Contacts
      button(
        type='button'
        :class='["burger__btn", {open: $store.state.common.burgerIsOpen }]'
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
    })
  },
  watch: {
    burgerIsOpen(val) {
      val ? qs('body').classList.add('lock') : qs('body').classList.remove('lock')
    },
    '$screen.width'() {
      if (this.burgerIsOpen) {
        this.$store.commit("common/BURGER_TOGGLE")
      }
    }
  }
}
</script>
