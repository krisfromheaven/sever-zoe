<template lang='pug'>
  form.exhibitions__form(@submit.prevent='onSubmit')
    .form__control
      label.form__label(for='year' v-model.number='year'  ) Year
      input.form__input#year(
        required
        type='number' min='1990' max='2100'
        :placeholder='year'
        v-model='year'
      )
    .form__control
      label.form__label(for='exhibition') Exhibition
      input.form__input#exhibition(type='text' v-model.trim='exhibition' required)
    .form__control
      label.exhibitions__label(for='group')
        input.exhibitions__input#group(type='radio' v-model='show' value='group' required)
        span.exhibitions__span group
      label.exhibitions__label(for='solo') solo
        input.exhibitions__input#solo(type='radio' v-model='show' value='solo' required)
        span.exhibitions__span solo
    button.form__btn.btn(type='submit') Add exhibition
</template>

<script>
export default {
  name: 'exhibitionsForm',
  data: () => ({
    year: new Date().getFullYear(),
    exhibition: '',
    show: 'group'
  }),
  methods: {
    onSubmit() {
      this.$emit('onSubmit', { ...this.$data })
      this.exhibition = ''
    }
  }
}
</script>
