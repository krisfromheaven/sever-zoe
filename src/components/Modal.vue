<template lang='pug'>
  section.modal
    .modal__wrapper
      button.modal__close(
        type='button'
        @click.prevent='$emit("close")'
      ) &#10006;
      .modal__upload-line(:style='{"width": $store.state.gallery.percentage + "%"}')
      form.modal__form(@submit.prevent='onSubmit')
        .modal__col
          label.modal__upload
            input(type='file' @change='previewImage' accept='image/*' required)
            .modal__upload-preview(v-if='imgSrc !== null')
              img.modal__upload-preview(:src='imgSrc')
            img(v-else src='@/assets/img/input-button-img.png' alt='zs-add')
        .modal__col
          .modal__form-control
            label(for='number') Number
            input(type='text' id='number' required v-model='number' )
          .modal__form-control
            label(for='name') Name
            input(type='text' id='name' required v-model='name' )
          .modal__form-control
            label(for='technique') Technique
            input(type='text' id='technique' required v-model='technique' )
          .modal__form-control
            label(for='size') Size
            input(type='text' id='size' required v-model='size' )
          .modal__buttons
            button.modal__buttons-btn(
              type='button'
              @click.prevent='$emit("close")'
            ) Cancel
            button.modal__buttons-btn(
              type='submit'
              :disabled='$store.state.gallery.percentage > 0'
            ) Save

</template>

<script>

export default {
  name: 'modal',
  data: () => ({
    imgData: null,
    imgSrc: null,
    number: '',
    name: '',
    technique: '',
    size: ''
  }),
  methods: {
    async onSubmit() {
      // await this.$store.dispatch('gallery/uploadImage', this.imgData)
      await this.$store.dispatch('gallery/uploadInfo', {
        number: this.number.trim(),
        name: this.name.trim(),
        technique: this.technique.trim(),
        size: this.size.trim(),

      })
      this.number = this.name = this.technique = this.size = ''
    },

    previewImage(e) {
      let file = this.imgData = e.target.files[0]
      const reader = new FileReader()

      reader.onload = ev => {
        this.imgSrc = ev.target.result
      }
      reader.readAsDataURL(file)
    }
  },

}
</script>
