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
      // meta: [
      //   { charset: 'utf-8' },
      //   { name: 'description', content: 'Her painting serves as the positive double of reality'},
      //   { property: 'og:title', content: 'Zoe Sever'},
      //   { property: 'og:url', content: 'https://zoesever.com/'},
      //   { property: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/zoe-sever.appspot.com/o/images%2F136-Zoe%20Sever_Old%20Olive%20Tree%20on%20the%20Way%20to%20Jerusalem_oil%20and%20acrylic%20on%20canvas_90x140%20cm_2018.jpg?alt=media&token=6fcef88d-c64f-46b0-b021-7749bd716c79' }
      // ]
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
