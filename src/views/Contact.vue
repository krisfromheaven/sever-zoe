<template lang='pug'>
  section.contact
    .container
      .contact__wrapper
        .contact__info
          h1.title.contact__title Contacts
          .contact__info-row
            a.contact__info-link(href='mailto:severzoe@gmail.com' target='_blank') severzoe@gmail.com
            a.contact__info-link(href='tel:+972548084289' target='_blank') +972 54-808-4289
        .contact__img-wrapper
          img.contact__img(src='@/assets/img/contact-img.jpg')
</template>

<script>
export default {
  name: 'Contact',
  metaInfo() {
    return {
      title: 'Contacts',
      titleTemplate: 'Zoe | %s'
    }
  }
}
</script>
