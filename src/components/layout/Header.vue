<template lang='pug'>
  header.header
    .container
      span.header__logo Zoe Sever
      nav(:class='["header__nav", {open: $store.state.common.burgerIsOpen }]')
        ul.header__nav-list
          li.header__nav-item
            router-link(to='/' ) About
          li.header__nav-item
            router-link(to='/' ) Gallery
          li.header__nav-item
            router-link(to='/' ) Exhibitions
          li.header__nav-item
            router-link(to='/' ) Art pieces all over the world
          li.header__nav-item
            router-link(to='/' ) Contacts
      button(
        type='button'
        :class='["burger__btn", {open: $store.state.common.burgerIsOpen }]'
        v-if='$store.state.common.mobile'
        @click.prevent='$store.state.common.burgerIsOpen = !$store.state.common.burgerIsOpen'
        )
        span
        span
        span
</template>

