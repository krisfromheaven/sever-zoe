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
      Modal(
        @close='addNewItem'
        @refresh="refresh"
        :post='post'
        @onSubmit='onSubmit'
        @editPost='editPost'
      )
    .container
      .gallery__title-wrapper
        h1.title.gallery__title Gallery
        button.gallery__add(
          type='button'
          @click.prevent='addNewItem'
          v-if='$store.state.auth.user.loggedIn'
        ) + Add new item
      .gallery__empty(v-if='!gallery.length') Art not found
      .gallery__list(v-else)
        .gallery__item.h-anim(
          v-for='(item,i) in sortGallery'
          :key='i'
        )
          .gallery__item-wrapper(
            ref='item'
            @click.prevent='showSlide(item, i,$event)'
            v-lazy:background-image='item.image'
          )
            button.gallery__item-delete(
              v-if='$store.state.auth.user.loggedIn'
              @click.prevent='deletePost(item.id)'
            ) &#10006;
            button.gallery__item-delete.edit(
              v-if='$store.state.auth.user.loggedIn'
              @click.prevent='openUpdatePost(item)'
            )
              Edit
            .gallery__item-text {{ item.description ? item.description : item.title }}

</template>

<script>
import Modal from '../components/Modal'
import { qs, elemVisCheck } from '../helpers'
import Edit from '../assets/img/edit.svg'
import GallerySlider from '../components/GallerySlider'

export default {
  name: 'Gallery',
  metaInfo() {
    return {
      title: 'Gallery',
      titleTemplate: 'Zoe | %s'
    }
  },
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
    elemVisCheck()
    document.addEventListener('scroll', () => {
      if (!qs('.gallery__up')) {
        return
      }
      if (window.pageYOffset > window.innerHeight) {
        qs('.gallery__up').style.opacity = '1'
        qs('.gallery__up').style.visibility = 'visible'
      } else {
        qs('.gallery__up').style.opacity = '0'
        qs('.gallery__up').style.visibility = 'hidden'
      }
    })
  },
  computed: {
    sortGallery() {
      return this.gallery.sort(function(a, b) {
        return +a.title.split('-')[0] - +b.title.split('-')[0]
      })
    }
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
      this.gallery = await this.$store.dispatch('gallery/fetchGallery', { path: this.$route.path })

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
  },
  watch: {
    isSlider(val) {
      val ? qs('body').style.overflow = 'hidden' : qs('body').style.overflow = ''
    }
  }
}
</script>
