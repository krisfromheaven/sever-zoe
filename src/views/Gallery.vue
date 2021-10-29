<template lang='pug'>
  section.gallery
    transition(name='fade' v-if='visible' )
      Modal(@close='addNewItem' :post='post')
    .container
      .gallery__title-wrapper

        h1.title.gallery__title Gallery
        button.gallery__add(
          type='button'
          @click.prevent='addNewItem'
          v-if='$store.state.auth.user.loggedIn'
        ) + Add new item
      .gallery__list
        .gallery__item.h-anim(
          v-for='(item,i) in $store.state.gallery.gallery'
          :key='i'
        )
          .gallery__item-wrapper
            button.gallery__item-delete(
              v-if='$store.state.auth.user.loggedIn'
              @click.prevent='deletePost(item.id)'
            ) &#10006;
            button.gallery__item-delete.edit(
              v-if='$store.state.auth.user.loggedIn'
              @click.prevent='editPost(item)'
            )
              Edit
            img(v-lazy='item.image')
            .gallery__item-text {{ item.description ? item.description : item.title }}

</template>

<script>
import Modal from '../components/Modal'
import { elemVisCheck } from '../helpers'
import Edit from '../assets/img/edit.svg'

export default {
  name: 'Gallery',
  components: { Modal, Edit },
  data: () => ({
    visible: false,
    post: null
  }),
  async mounted() {
    await this.$store.dispatch('gallery/fetchGallery')
    elemVisCheck()
  },
  methods: {
    addNewItem() {
      this.visible = !this.visible
      this.post = null
    },
    async deletePost(id) {
      if (id) {
        await this.$store.dispatch('gallery/deletePost', id)
      }
    },
    editPost(post) {
      if (post) {
        this.visible = true
        this.post = post
      }
    }
  },
  watch: {
    visible() {
      if (this.$store.state.gallery.percent === 100) {
        this.$store.commit('gallery/CLEAR_PERCENT')
      }
    }
  }
}
</script>
