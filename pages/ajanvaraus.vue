<template>
  <div id="ajanvaraus">
    <div class="container">
      <h2 class="title">Ajanvaraus</h2>
      <p class="subtitle is-6">
        <b-icon icon="map-marker" size="is-small" />
        Studio AK Kuokkala / Polttolinja 1, Jyväskylä
      </p>
      <div class="font-18">
        <p class="mb-2"><b>Huom!</b> Kampaamo-, parturi-, suunnittelu- ja kauneudenhoitopalvelut eivät kuulu valikoimaani.</p>
      </div>
    </div>
    <!-- Embedded Timma booking calendar -->
    <iframe
      width="100%"
      frameborder="0"
      src="https://varaa.timma.fi/reservation/studioakkuokkala"
      id="reservationIframe8714">
    </iframe>
    <div class="container">
      <p class="mb-5 font-18">
        Mikäli ajanvarauskalenteri ei ilmesty näkyviin muutaman sekunnin kuluessa, voit myös varata ajan osoitteesta:
        <br/>
        <a href="https://www.studioak.fi/ajanvaraus-24-h/">https://www.studioak.fi/ajanvaraus-24-h/</a>
        (Kuokkalan toimipiste)          
      </p>
    </div>
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

  p:not(:last-child) {
    margin-bottom: 1em;
  }
  .container {
    @media screen and (max-width: 1023px) {
      padding: 0 1.5rem;
    }
  }
}
</style>
