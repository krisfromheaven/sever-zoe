<template lang='pug'>
  main.main
    Header
    .main__content
      transition(name="fade" mode="out-in")
        RouterView
    Footer
</template>

<script>
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'


export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang='stylus'>
.main
  pos relative
</style>
