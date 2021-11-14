<template lang='pug'>
  section.about__section
    .about
      .container
        .about__text
          h2.about__text-title Her painting serves as the positive double of reality...
          h4.about__text-subtitle Doron Polak, International Artists’ Museum about Zoe Sever
    .about__description
      .container
        h6.about__description-title Zoe Sever
        span.about__description-text
          p Was born in 1974 in Lviv, Ukraine and moved to Tel Aviv, Israel in 1990. Zoe graduated from Bezalel Akademy of Arts and Design and Jerusalem and Lviv School of Arts, Ukraine.She is married and has thee sons. Zoe has created an art studio and currently lives in Givatayim, Israel.
          p Since 2012 she has been exhibiting professionally in Israel and around the word. Her works may be found in museums and private collections in Israel, USA, Canada, Spain, France, Germany, UK, Switzerland, Australia, Holland, Ukraine and Kazakhstan.

</template>

<script>

import { qs } from '../helpers'

export default {
  name: 'About',
  metaInfo() {
    return {
      title: 'About',
      titleTemplate: 'Zoe | %s'
    }
  },
  mounted() {
    setTimeout(() => {
      qs('.about').setAttribute('visible', true)
    }, 200)

  }
}
</script>
