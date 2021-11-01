<template lang='pug'>
  section.world
    Modal(
      v-if='visible'
      @close='addNewItem'
      @refresh="refresh"
      :post='post'
      @onSubmit='onSubmit'
      @editPost='editPost'
    )
    .container
      .world__wrapper-title
        h1.world__title.title Art pieces all over #[br]the world
        button.gallery__add.world__dd(
          type='button'
          @click.prevent='addNewItem'
          v-if='$store.state.auth.user.loggedIn'
        ) + Add new item
      .gallery__empty(v-if='!world.length') Art not found
      .world__list(v-else)
        .world__item(
          v-for='item in world'
          :key='item.id'
        )
          .world__item-wrapper.gallery__item-wrapper(v-lazy:background-image='item.image')
            button.gallery__item-delete(
              v-if='$store.state.auth.user.loggedIn'
              @click.prevent='deletePost(item.id)'
            ) &#10006;
            button.gallery__item-delete.edit(
              v-if='$store.state.auth.user.loggedIn'
              @click.prevent='openUpdatePost(item)'
            )
              Edit
            .gallery__item-text.world__item-text {{ item.description ? item.description : item.title }}


</template>
<script>

import Modal from '../components/Modal'
import Edit from '../assets/img/edit.svg'

export default {
  name: 'World',
  data: () => ({
    visible: false,
    post: null,
    world: []
  }),
  components: { Modal, Edit },
  async mounted() {
    await this.refresh()
  },
  methods: {
    addNewItem() {
      this.visible = !this.visible
      this.post = null
    },
    async refresh() {
      this.world = await this.$store.dispatch('gallery/fetchGallery', { path: this.$route.path })
    },
    async deletePost(id) {
      if (id) {
        await this.$store.dispatch('gallery/deletePost', { id, path: this.$route.path })
        await this.refresh()
      }
    },
    openUpdatePost(post) {
      if (post) {
        this.visible = true
        this.post = post
      }
    },
    async onSubmit(data) {
      await this.$store.dispatch('gallery/uploadData', { ...data, path: this.$route.path })
    },
    async editPost(post) {
      await this.$store.dispatch('gallery/editPost', { ...post, path: this.$route.path })
    }
  }
}
</script>

<style scoped>

</style>
