<template lang='pug'>
  section.modal(ref='modal' )
    .modal__wrapper
      button.modal__close(
        type='button'
        @click.prevent='preview = null'
        v-if='preview !== null && !post'
        title='clear preview'
        :disabled='percent < 99 && percent  > 1'
      ) &#10006;
      form.modal__form(@submit.prevent='onSubmit')
        .modal__upload-line(:style='{"width": percent + "%"}')
        .modal__row
          label.modal__upload
            input(
              type='file'
              @change.prevent='previewImage'
              accept='image/*'
              required
              :disabled='post'
            )
            .modal__upload-preview(v-if='preview !== null')
              img.modal__upload-img(:src='preview')
            img.modal__upload-complete(v-else src='@/assets/img/input-button-img.png' alt='zs-add')
        .modal__row
          .modal__form-control
            input(type='text'
              v-model.trim='description'
              placeholder='type a description'
            )
          .modal__buttons
            button.modal__buttons-btn(
              type='button'
              @click.prevent='$emit("close")'
            ) Cancel
            button.modal__buttons-btn(
              type='button'
              @click.prevent='editPost(post)'
              :disabled='!preview'
              v-if='post'
            ) Edit
            button.modal__buttons-btn(
              type='submit'
              v-else-if='!uploading && !post'
              :disabled='!preview'
            ) Save
            button.modal__buttons-btn(
              type='button'
              v-else
              @click.prevent='clearForm'
              :disabled='percent < 100'
            ) Clear form


</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'modal',
  data: () => ({
    preview: null,
    image: null,
    description: null,
    uploading: false
  }),
  props: ['post'],

  mounted() {
    this.updatePreviewPost(this.post)
    document.addEventListener('click', e => {
      if (e.target === this.$refs.modal) {
        this.$emit('close')
      }
    })
  },
  beforeDestroy() {
    this.$emit('refresh')
    this.clearForm()
  },
  computed: {
    ...mapState({ percent: s => s.gallery.percent })
  },
  methods: {
    previewImage(e) {
      if (!e) {
        return
      }
      let file = this.image = e.target.files[0]
      this.preview = file ? URL.createObjectURL(file) : null
    },
    onSubmit() {
      this.uploading = true
      this.$emit('onSubmit', {
        img: this.image,
        description: this.description
      })
    },
    clearForm() {
      this.$store.commit('gallery/CLEAR_PERCENT')
      this.image = this.preview = this.description = null
      this.uploading = false
    },
    editPost(post) {
      this.$emit('editPost', {
        ...post,
        title: this.description
      })
    },
    updatePreviewPost(post) {
      if (post) {
        this.preview = post.image
        this.description = post.description ? post.description : post.title
      }
    },
    openUpdatePost(post) {
      if (post) {
        this.visible = true
        this.post = post
      }
    }
  },
  visible() {
    if (this.percent === 100) {
      this.$store.commit('gallery/CLEAR_PERCENT')
    }
  }
}
</script>

