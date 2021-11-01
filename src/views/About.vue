<template lang='pug'>
  section.about__section
    .about
      .container
        .about__text
          .about__text-title Her painting serves as the positive double of reality...
          .about__text-subtitle Doron Polak, International Artists’ Museum about Zoe Sever
    .about__description
      .container
        .about__description-title Zoe Sever
        .about__description-text
          p Was born in 194 in Lviv, Ukraine and moved to Tel Aviv, Israel in 1990. Zoe graduated from Bezalel Akademy of Arts and Design and Jerusalem and Lviv School of Arts, Ukraine.She is married and have thee sons. Zoe has created an art studio and currently lives in Givatayim, Israel.
          p Since 2012 she has been exhibiting professionally in Israel and around the word. Her works could be found in museums and private collections in Israel, USA, Canada, Spain, France, Germany, UK, Switzerland, Australia, Holland, Ukraine and Kazakhstan.

</template>

<script>

export default {
  name: 'About',
  metaInfo() {
    return {
      title: 'About',
      titleTemplate: 'Zoe | %s'
    }
  }
}
</script>
