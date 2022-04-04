const formatMixin = {
  filters: {
    withoutHttp: function (url) {
      if (!url) return url
      return url.replace('http://', '').replace('https://', '')
    },
    accountName: function (url) {
      if (!url) return url
      const splitted = url.split('/')
      return splitted[splitted.length - 1]
    },
  },
  methods: {
    intlPhone (phone) {
      if (!phone) return phone
      return '+358' + phone.substring(1)
    }
  }
}

const sectionMixin = {
  methods: {
    getSectionId (content) {
      let title = content.title.toLowerCase()
      title = title.replace(/[\s]|[!]|[?]/g, '')
      title = title.replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, ''
      )
      title = title.replace(/[ä]/g, 'a')
      title = title.replace(/[ö]/g, 'o')
      title = title.replace(/[\(\.\)]/g, '')
      return `${title}-${content.order}`
    }
  }
}

export { formatMixin, sectionMixin }
