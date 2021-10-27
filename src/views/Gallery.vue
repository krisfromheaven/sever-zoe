<template lang='pug'>
  section.gallery
    transition(name='fade' v-if='visible' )
      Modal(@close='addNewItem')
    .container
      .gallery__title-wrapper
        h1.title.gallery__title Gallery
        button.gallery__add(
          type='button'
          @click.prevent='addNewItem'
          v-if='$store.state.auth.user.loggedIn'
        ) + Add new item
      .gallery__list
        .gallery__item(
          v-for='item in 3'
        )
          .gallery__item-wrapper
            img.gallery__item-img(:src='item')
            .gallery__item-info
              .gallery__item-num №1
              .gallery__item-description
                h4.gallery__item-name Nordau Hotel. Tel Aviv
                span.gallery__item-text oil and afcrylic on canvas, 70×70 cm

</template>

<script>

import Modal from '../components/Modal'

export default {
  name: 'Gallery',
  components: { Modal },
  data: () => ({
    visible: false
  }),
  methods: {
    addNewItem() {
      this.visible = !this.visible
    }
  }
}
</script>

<style scoped>

</style>
