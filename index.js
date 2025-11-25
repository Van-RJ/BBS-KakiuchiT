new Vue({
    el: '#app',
    data: {
      name: '',
      seen: false
    },
    watch: {
      name(newVal) {
        this.seen = newVal.trim() === '';
      }
    }
  });
  