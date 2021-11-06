export default {
  methods: {
    nextSlide({ slide, index }) {
      if (index === this.items.length - 1) {
        return
      }
      this.index = this.items.findIndex(r => r.id === slide.id) + 1
      this.slide = this.items[index + 1]
    },
    prevSlide({ slide, index }) {
      if (!index) {
        return
      }
      this.index = this.items.findIndex(r => r.id === slide.id) - 1
      this.slide = this.items[index - 1]
    },
    showSlide(item, idx, e) {
      if (e.target === this.$refs.item[idx] && item) {
        this.index = idx
        this.slide = item
        this.isSlider = true
      }
    }
  }
}
