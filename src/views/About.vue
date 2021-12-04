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
          p Was born in 1974 in Lviv, Ukraine, and moved to Israel in 1990.
          | Zoe graduated from Bezalel Academy of Arts and Design in Jerusalem and Lviv school of arts, Ukraine. She is married and has three sons.
          | Zoe lives in Givatayim, where she had established her art studio.
          | Since 2012 Zoe has been exhibiting professionally around the globe.
          | Zoe's works can be found in museums and private collections in Israel, the USA, Canada, Australia, Spain, the UK, Switzerland, France, Germany, Netherlands, Kazakhstan and others.
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
