<template lang='pug'>
  section.modal(ref='modal' )
    .modal__wrapper
      button.modal__close(
        type='button'
        @click.prevent='preview = null'
        v-if='preview !== null && !post'
        title='clear preview'
        :disabled='$store.state.gallery.percent < 99 && $store.state.gallery.percent  > 1'
      ) &#10006;
      form.modal__form(@submit.prevent='onSubmit')
        .modal__upload-line(:style='{"width": $store.state.gallery.percent + "%"}')
        .modal__row
          label.modal__upload
            input(type='file' @change.prevent='previewImage' accept='image/*' required :disabled='post')
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
              :disabled='$store.state.gallery.percent < 100'
            ) Clear form


</template>

<script>


export default {
  name: 'modal',
  data: () => ({
    image: null,
    preview: null,
    description: null,
    uploading: false
  }),
  props: ['post'],
  mounted() {
    this.updatePost(this.post)
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
  methods: {
    previewImage(e) {
      if (!e) {
        return
      }
      const file = this.image = e.target.files[0]
      this.preview = file ? URL.createObjectURL(file) : null
    },
    async onSubmit() {
      this.uploading = true
      await this.$store.dispatch('gallery/uploadData', {
        img: this.image,
        description: this.description
      })
    },
    clearForm() {
      this.$store.commit('gallery/CLEAR_PERCENT')
      this.image = this.preview = this.description = null
      this.uploading = false
    },
    updatePost(post) {
      if (post) {
        this.preview = post.image
        this.description = post.description ? post.description : post.title
      }
    },
    async editPost(post) {
      this.post = post
      await this.$store.dispatch('gallery/editPost', {
        ...post,
        description: this.description
      })
      this.description = null
    }
  }

}
</script>

