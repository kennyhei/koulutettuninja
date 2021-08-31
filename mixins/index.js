const formatMixin = {
  filters: {
    withoutHttp: function (url) {
      return url.replace('http://', '').replace('https://', '')
    },
    accountName: function (url) {
      const splitted = url.split('/')
      return splitted[splitted.length - 1]
    },
  },
  methods: {
    intlPhone (phone) {
      return '+358' + phone.substring(1)
    }
  }
}

export { formatMixin }
