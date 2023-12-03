<template>
  <div id="ajanvaraus">
    <div class="container">
      <h2 class="title">Ajanvaraus</h2>
    </div>
    <!-- Embedded Timma booking calendar -->
    <iframe
      width="100%"
      frameborder="0"
      src="https://varaa.timma.fi/reservation/studioakkuokkala"
      id="reservationIframe8714">
    </iframe>
  </div>
</template>

<script>
export default {
  mounted () {
    // Resize iframe automatically
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/2.8.3/iframeResizer.min.js'
    script.onload = () => {
      iFrameResize({ checkOrigin: false }, '#reservationIframe8714')
    }
    document.head.appendChild(script)
  }
}
</script>

<style lang="scss">
#ajanvaraus {
  padding-top: 2.25em;
}
</style>