<template lang='pug'>
  section.auth
    .container
      h1.auth__title.title authorization
      h2.auth__suptitle(v-if='$store.state.auth.user.loggedIn') You are logged in
      form.form.auth__form(@submit.prevent='onSubmit' v-else )
        .form__control
          label.form__label(for='email') Email
          input.form__input(type='email' id='email' v-model='email' )
        .form__control
          label.form__label(for='password') Password
          input.form__input(type='password' id='password' v-model='password' )
        button.form__btn.btn(type='submit' :disabled='email.length && !password.length') Log in
        span.form__error(:class='{error: $store.state.auth.error}' ) {{ showMessage }}

</template>

<script>
import message from '../utils/message'

export default {
  name: 'Auth',
  metaInfo() {
    return {
      title: 'Auth',
      titleTemplate: 'Zoe | %s'
    }
  },
  data: () => ({
    email: '',
    password: ''
  }),
  beforeDestroy() {
    this.$store.commit('auth/CLEAR_ERROR')
  },
  methods: {
    async onSubmit() {
      await this.$store.dispatch('auth/login', {
        email: this.email.trim(),
        password: this.password.trim()
      })

      const user = this.$store.dispatch('auth/getUid')
      if (user) {
        await this.$router.push('/')
      }
    }
  },
  computed: {
    showMessage() {
      return this.$store.state.auth.error ? message[this.$store.state.auth.error] : null
    }
  }
}
</script>


