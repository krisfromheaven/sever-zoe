<template lang='pug'>
  section.gallery
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
      .gallery__list
        .gallery__item(
          v-for='(item,i) in items'
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

      paginate(
        v-if='items'
        v-model="page"
        :page-count="pageCount"
        :click-handler="pageChangeHandler"
        :prev-text="'prev'"
        :next-text="'next'"
        :container-class="'gallery__paginate'"
        :page-class="'gallery__paginate-item'"
        :prev-class="'gallery__paginate-prev'"
        :next-class="'gallery__paginate-next'"
      )
</template>

<script>
import Modal from '../components/Modal'
import { qs } from '../helpers'
import Edit from '../assets/img/edit.svg'
import GallerySlider from '../components/GallerySlider'
import paginationMixin from '../mixins/pagination.mixin'
import sliderMixin from '../mixins/slider.mixin'

export default {
  name: 'Gallery',
  metaInfo() {
    return {
      title: 'Gallery',
      titleTemplate: 'Zoe | %s'
    }
  },
  mixins: [paginationMixin, sliderMixin],
  data: () => ({
    visible: false,
    post: null,
    gallery: []
  }),
  components: { GallerySlider, Modal, Edit },
  async mounted() {
    await this.refresh()
    setTimeout(() => {
      if (this.items) {
        qs('.gallery__paginate').setAttribute('visible', true)
      }
    }, 500)
  },
  beforeDestroy() {
    if (this.items) {
      qs('.gallery__paginate').removeAttribute('visible')
    }
  },
  methods: {
    async refresh() {
      this.gallery = await this.$store.dispatch('gallery/fetchGallery', { path: this.$route.path })
      this.gallery.sort(function(a, b) {
        return +a.title?.split('-')[0] - +b.title?.split('-')[0]
      })
      this.setupPagination(this.gallery)
    },
    addNewItem() {
      this.visible = !this.visible
      this.post = null
    },

    async deletePost(id) {
      if (id) {
        await this.$store.dispatch('gallery/deletePost', { id, path: this.$route.path })
        await this.refresh()
        this.setupPagination(this.gallery)
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
      this.setupPagination(this.gallery)
    },
    async editPost(post) {
      await this.$store.dispatch('gallery/editPost', { ...post, path: this.$route.path })
      this.setupPagination(this.gallery)
    }
  },
  watch: {
    isSlider(val) {
      val ? qs('body').style.overflow = 'hidden' : qs('body').style.overflow = ''
    }
  }
}
</script>
