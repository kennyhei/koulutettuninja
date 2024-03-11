<template>
<div id="ajanvaraus">
  <v-page-hero
    imgPath="hieronta-jyvaskyla-ajanvaraus.webp"
    :imgTopOpacity="0.5"
    :imgBottomOpacity="0.3"
    title="Ajanvaraus"
  />
  <div class="wrapper" style="padding-top: 3rem;">
    <div class="subtitle is-6">
      <p class="mr-1 mb-1">
        <b-icon icon="map-marker" size="is-small" /> Osoite:
      </p>
      <div class="mb-1">
        <a href="https://maps.app.goo.gl/ep5kF2dWPjCcPt7N6" target="_blank">
          Studio AK Kuokkala / Polttolinja 1, Jyväskylä
        </a>
      </div>
    </div>
    <div class="font-18">
      <p class="mb-2"><b>Huom!</b> Kampaamo-, parturi-, suunnittelu- ja kauneudenhoitopalvelut eivät kuulu valikoimaani. Tarjoan vain hierontapalveluita!</p>
    </div>
  </div>
  <!-- Embedded Timma booking calendar -->
  <iframe
    width="100%"
    frameborder="0"
    src="https://varaa.timma.fi/reservation/studioakkuokkala"
    id="reservationIframe8714">
  </iframe>
  <div class="wrapper">
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
import VPageHero from '~/components/VPageHero'

export default {
  components: {
    VPageHero
  },
  head () {
    return {
      title: 'Koulutettu hieroja Ninja Marttinen – Ajanvaraus'
    }
  },
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

<style lang="scss" scoped>
#ajanvaraus {
  .wrapper {
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    max-width: 960px;

    @media screen and (max-width: 1092px) {
      padding: 0 1.5rem;
    }
    @media screen and (min-width: 1216px) {
      max-width: 1140px;
    }
  }
}
</style>
