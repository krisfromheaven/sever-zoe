<template lang='pug'>
  footer.footer
    .container
      .social.footer__social
        //a.footer__social-link(href='https://www.facebook.com/Zoe-Sever-Artist-1475026252748227' target='_blank')
        //  Facebook.footer__social-icon
        //a.footer__social-link(href='mailto: severzoe@gmail.com' target='_blank')
        //  Gmail.footer__social-icon
        Share
      span.footer__copy  Zoe Sever, 2021 / All rights reserved
    button.footer__btn(type='button' @click.prevent='$router.push("/auth")')
      Logo.footer__logo
</template>
<script>

import Share from '../Share'
import Facebook from '@/assets/img/social-fb.svg'
import Gmail from '@/assets/img/social-gmail.svg'
import Logo from '@/assets/img/logo.svg'

export default {
  name: 'Footer',
  components: { Facebook, Gmail, Logo,Share },
}
</script>

