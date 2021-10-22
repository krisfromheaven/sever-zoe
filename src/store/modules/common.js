
export default {
  namespaced: true,
  state: {
    // mobile: (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1),
    mobile:  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent),
    burgerIsOpen: false
  },
  mutations: {
    BURGER_TOGGLE(state) {
      state.burgerIsOpen = !state.burgerIsOpen
    }
  }
}
