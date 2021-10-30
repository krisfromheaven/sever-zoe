<template lang='pug'>
  section.gallery
    button.gallery__up(type='button' @click='scrollUp')
    gallery-slider(
      v-if='isSlider'
      :slide='slide'
      :index='index'
      @close='closeSlider'
      @nextSlide='nextSlide'
      @prevSlide='prevSlide'
    )
    transition(name='fade' v-if='visible' )
      Modal(@close='addNewItem' :post='post' @refresh="refresh")
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
          v-for='(item,i) in gallery'
          :key='i'
        )
          .gallery__item-wrapper(ref='item' @click.prevent='showSlide(item, i,$event)' v-lazy:background-image='item.image')
            button.gallery__item-delete(
              v-if='$store.state.auth.user.loggedIn'
              @click.prevent='deletePost(item.id)'
            ) &#10006;
            button.gallery__item-delete.edit(
              v-if='$store.state.auth.user.loggedIn'
              @click.prevent='editPost(item)'
            )
              Edit
            .gallery__item-text {{ item.description ? item.description : item.title }}

</template>

<script>
import Modal from '../components/Modal'
import {  qs } from '../helpers'
import Edit from '../assets/img/edit.svg'
import GallerySlider from '../components/GallerySlider'

export default {
  name: 'Gallery',
  components: { GallerySlider, Modal, Edit },
  data: () => ({
    visible: false,
    post: null,
    gallery: [],
    isSlider: false,
    index: null,
    slide: ''
  }),
  async mounted() {
    await this.refresh()
    document.addEventListener('scroll', () => {
      if (window.pageYOffset > window.innerHeight) {
        qs('.gallery__up').style.opacity = '1'
        qs('.gallery__up').style.visibility = 'visible'
      } else {
        qs('.gallery__up').style.opacity = '0'
        qs('.gallery__up').style.visibility = 'hidden'
      }
    })
  },
  methods: {
    scrollUp() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    nextSlide({ slide, index }) {
      if (index === this.gallery.length - 1) {
        return
      }
      this.index = this.gallery.findIndex(r => r.id === slide.id) + 1
      this.slide = this.gallery[index + 1]
    },
    prevSlide({ slide, index }) {
      if (!index) {
        return
      }
      this.index = this.gallery.findIndex(r => r.id === slide.id) - 1
      this.slide = this.gallery[index - 1]
    },
    showSlide(item, idx, e) {
      if (e.target === this.$refs.item[idx] && item) {
        this.index = idx
        this.slide = item
        this.isSlider = true
      }
    },
    async refresh() {
      this.gallery = await this.$store.dispatch('gallery/fetchGallery')
    },
    addNewItem() {
      this.visible = !this.visible
      this.post = null
    },
    closeSlider() {
      this.isSlider = false
      this.slide = null
    },
    async deletePost(id) {
      if (id) {
        await this.$store.dispatch('gallery/deletePost', id)
        await this.refresh()
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
    },
    isSlider(val) {
      val ? qs('body').style.overflow = 'hidden' : qs('body').style.overflow = ''
    }
  }
}
</script>
