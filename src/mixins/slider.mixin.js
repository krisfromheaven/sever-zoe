export default {
  data() {
    return {
      isSlider: false,
      index: null,
      slide: ''
    }
  },
  methods: {
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
    closeSlider() {
      this.isSlider = false
      this.slide = null
    }
  }
}
