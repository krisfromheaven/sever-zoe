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


export default {
  name: 'App',
  metaInfo() {
    return {
      title: 'Zoe Sever',
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'Her painting serves as the positive double of reality' },
        { property: 'og:title', content: 'Zoe Sever' },
        { property: 'og:url', content: 'https://zoesever.com/' },
        { property: 'og:image', content: `${location.origin}/share.jpg` }
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
