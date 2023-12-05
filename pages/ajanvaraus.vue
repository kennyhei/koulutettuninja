<template>
<div id="ajanvaraus">
  <section class="hero is-relative is-medium">
    <background-image
      name="hieronta-jyvaskyla-ajanvaraus.webp"
      :topOpacity="0.5"
      :bottomOpacity="0.3"
    />
    <div class="hero-body is-flex is-flex-direction-column is-align-items-center">
      <h1 class="title has-text-centered has-text-light animate__animated animate__fadeInDown">
        Ajanvaraus
      </h1>
    </div>
  </section>
  <div class="wrapper" style="padding-top: 3rem;">
    <div class="address subtitle is-6">
      <p class="mr-1">
        <b-icon icon="map-marker" size="is-small" />
        Osoite:
      </p>
      <a href="https://maps.app.goo.gl/ep5kF2dWPjCcPt7N6" target="_blank">
        Studio AK Kuokkala / Polttolinja 1, Jyväskylä
      </a>
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
import BackgroundImage from '~/components/misc/BackgroundImage.vue'

export default {
  components: {
    BackgroundImage
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
  .address {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    p {
      margin-bottom: 0rem;
    }
  }
  @media screen and (max-width: 768px) {
    .hero.is-medium .hero-body {
      padding: 8rem 1.5rem;
    }
  }
}
</style>
