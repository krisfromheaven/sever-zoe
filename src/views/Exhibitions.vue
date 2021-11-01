<template lang='pug'>
  section.exhibitions
    .container
      .exhibitions__title-wrapper
        h1.title.exhibitions__title  Exhibitions
        button.exhibitions__button(
          type='button'
          @click='showForm = !showForm'
          v-if='this.$store.state.auth.user.loggedIn'
        ) + Add new item
      exhibitionsForm(@onSubmit='onSubmit' v-if='this.$store.state.auth.user.loggedIn && showForm' )
      .exhibitions__category
        button.exhibitions__category-item(
          type='button'
          @click='changeCategory("group")'
          :disabled='category === "group"'
        ) Group
        button.exhibitions__category-item(
          type='button'
          @click='changeCategory("solo")'
          :disabled='category === "solo"'
        ) Solo
      .exhibitions__loading(v-if='!exhibitions.length' ) Loading...
      .exhibitions__list(v-else)
        .exhibitions__item(v-for='item in sortExhibitions' :key='item.id')
          button.exhibitions__item-delete(
            type='button'
            v-if='$store.state.auth.user.loggedIn'
            @click='deleteExhibitions(item.id)'
          ) &#10006
          .exhibitions__item-year {{item.year}}
          .exhibitions__item-separator —
          .exhibitions__item-text {{item.exhibition}}
</template>

<script>
import exhibitionsForm from '../components/exhibitionsForm'

export default {
  name: 'Exhibitions',
  metaInfo() {
    return {
      title: 'Exhibitions',
      titleTemplate: 'Zoe | %s'
    }
  },
  data: () => ({
    category: 'solo',
    showForm: false,
    exhibitions: []
  }),
  components: { exhibitionsForm },
  async mounted() {
    await this.fetchExhibitions()
  },
  computed: {
    sortExhibitions() {
      let solo = this.exhibitions
        .filter(e => e.show === 'solo')
        .sort(function(a, b) {
          return a.year < b.year ? -1 : a.year > b.year ? 1 : 0
        })
      let group = this.exhibitions
        .filter(e => e.show === 'group')
        .sort(function(a, b) {
          return a.year < b.year ? -1 : a.year > b.year ? 1 : 0
        })
      return this.category === 'solo' ? solo : group
    }
  },
  methods: {
    changeCategory(show) {
      this.category = show
    },
    async onSubmit(data) {
      let item = await this.$store.dispatch('exhibitions/addExhibitions', { ...data })
      this.exhibitions.push(item)
    },
    async fetchExhibitions() {
      this.exhibitions = await this.$store.dispatch('exhibitions/fetchExhibitions')
    },
    async deleteExhibitions(id) {
      let itemId = await this.$store.dispatch('exhibitions/deleteExhibitions', id)
      this.exhibitions = this.exhibitions.filter(e => e.id !== itemId)
    }
  }

}
</script>
