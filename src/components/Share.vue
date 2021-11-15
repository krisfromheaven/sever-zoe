<template lang='pug'>
  YandexShare(
    :services="['vkontakte','facebook','twitter']"
    :title="title"
    :description='description'
    :url='url'
    :image='image'
  )
</template>

<script>
import YandexShare from '@cookieseater/vue-yandex-share'

export default {
  name: 'Share',
  components: { YandexShare },
  computed: {
    title() {
      return 'Zoe Sever'
    },
    description() {
      return 'Her painting serves as the positive double of reality'
    },
    image() {
      return `${location.origin}/share.jpg`
    },
    url() {
      return 'https://zoesever.com'
    }

  }
}
</script>

<style>
.ya-share2__icon {
  background-color: #899593 !important;
}
</style>
