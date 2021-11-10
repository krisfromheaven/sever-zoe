<template lang='pug'>
  main.main
    Header
    .main__content
      transition(name="fade" mode="out-in")
        RouterView(:routeName='routeName')
    Footer
</template>

<script>
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { qs } from './helpers'
import data from '../data.js'

export default {
  name: 'App',
  metaInfo() {
    return {
      title: 'Zoe Sever',
      meta: [
        { name: 'description', content: data.description },
        { property: 'og:title', content: data.share.title },
        { property: 'og:description', content: data.share.description },
        { property: 'og:image', content: data.share.default_img }
      ]
    }
  },
  components: {
    Header,
    Footer
  },
  computed: {
    routeName() {
      return this.$route.name !== undefined ? this.$route.name : this.$route
    }
  },
  watch: {
    routeName() {
      if (this.$route.name !== 'Auth' && this.$store.state.common.mobile) {
        this.$store.state.common.burgerIsOpen = false
      }
    }
  },
  created() {
    qs('body').addEventListener('contextmenu', function(e) {
      e.preventDefault()
    })
  }
}
</script>

<style lang='stylus'>
.main
  pos relative
</style>
