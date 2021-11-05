<template lang='pug'>
  footer.footer
    .container
      .social.footer__social
        a.footer__social-link(href='https://www.facebook.com/Zoe-Sever-Artist-1475026252748227' target='_blank')
          Facebook.footer__social-icon
        a.footer__social-link(href='mailto: severzoe@gmail.com' target='_blank')
          Gmail.footer__social-icon
      nav.footer__nav(v-if='!$store.state.common.mobile' )
        ul.footer__nav-list
          li.footer__nav-item
            router-link(to='/' ) About
          li.footer__nav-item
            router-link(to='/gallery' ) Gallery
          li.footer__nav-item
            router-link(to='/exhibitions' ) Exhibitions
          li.footer__nav-item
            router-link(to='/world' ) Art pieces all over the world
          li.footer__nav-item
            router-link(to='/contact' ) Contacts
      span.footer__copy  Zoe Sever, 2021 / All rights reserved
    button.footer__btn(type='button' @click.prevent='$router.push("/auth")')
      Logo.footer__logo
</template>

<script>
import Facebook from '@/assets/img/social-fb.svg'
import Gmail from '@/assets/img/social-gmail.svg'
import Logo from '@/assets/img/logo.svg'

export default {
  name: 'Footer',
  components: { Facebook, Gmail, Logo },
}
</script>
