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


export default {
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
      if (this.$route.name !== 'Auth') {
        this.$store.commit('common/BURGER_TOGGLE')
      }
    }
  }
}
</script>

<style lang='stylus'>
.main
  pos relative
</style>
