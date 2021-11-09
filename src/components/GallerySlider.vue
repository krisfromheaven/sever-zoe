<template lang='pug'>
  article.gallery__slider(ref='slider')
    .gallery__slider-wrapper
      .gallery__slider-control
        button.gallery__slider-zoom(type='button' @click='isZoom = !isZoom')  {{isZoom ? '-': '+'}} zoom
        span.gallery__slider-text {{slide.description ? slide.description : slide.title}}
        button.gallery__slider-close(@click.prevent="$emit('close')") &#10006;
      .gallery__slider-content
        img(:class='["gallery__slider-image", {zoom: isZoom}]' :src='slide.image')
      .gallery__slider-arrows
        button.gallery__slider-arrow.prev(type='button' @click='$emit("prevSlide", {slide,index})')
        button.gallery__slider-arrow.next(type='button' @click='$emit("nextSlide", {slide,index})')
</template>

<script>

export default {
  name: 'GallerySlider',
  data: () => ({
    isZoom: false
  }),
  props: ['slide', 'index'],
  mounted() {
    document.addEventListener('click', (e) => {
      if (e.target === this.$refs.slider) {
        this.$emit('close')
      }
    })
  },


}
</script>
