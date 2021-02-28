<template>
  <section id="pricing" class="section pt-5">
    <h1 class="title">Hinnasto</h1>
    <div class="content font-18">
      <p>Käytän maskia hieronnan aikana (ja muutenkin asiakkaiden läsnä ollessa), joten hierontaan voi saapua levollisin mielin. Myös tehokas käsien ja työtilan hygieniasta huolehtiminen takaa sen, että tänne on turvallista tulla ja täällä on turvallista olla 😊</p>
      <p>Asiakkaalle maski on vapaavalintainen, mutta suositeltava 👍</p>
    </div>
    <div class="columns is-desktop">
      <div class="column">
        <v-services :service="services.classic" />
      </div>
      <div class="column">
        <v-services :service="services.hotstone" />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <v-services :service="services.head" />
      </div>
      <div class="column">
        <v-services :service="services.other" />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-button
          size="is-medium"
          tag="a"
          href="https://varaa.timma.fi/hyvanolonhaltijattaret"
          target="_blank"
          style="color: #fff;"
        >
          Varaa aika
        </b-button>
      </div>
    </div>
  </section>
</template>

<script>
import VServices from '~/components/VServices'

export default {
  components: {
    VServices
  },
  data () {
    return {
      services: {
        classic: {
          title: 'Klassinen hieronta',
          items: [
            { name: 'Klassinen hieronta (30 min)', price: '30 €' },
            { name: 'Klassinen hieronta (45 min)', price: '40 €' },
            { name: 'Klassinen hieronta (60 min)', price: '50 €' },
            { name: 'Klassinen hieronta (90 min)', price: '65 €' },
            { name: 'Hieronta suklaaöljyllä (30 min)', price: '35 €' },
            { name: 'Hieronta suklaaöljyllä (45 min)', price: '45 €' },
            { name: 'Hieronta suklaaöljyllä (60 min)', price: '55 €' }
          ]
        },
        hotstone: {
          title: 'Kuumakivihieronta',
          tooltip: '<p>Hieronta sisältää rentouttavaa ja lämmittävää laavakivikäsittelyä sekä manuaalista hierontaa.<br><br>Hieronnan yhteydessä käytettävät lämpimät kivet toimivat erinomaisena lämpöhoitona hierottaville alueille, kuten pohkeille, reisille, selälle ja hartioille.</p>',
          items: [
            { name: 'Hieronta lämpöhoidolla (30 min)', price: '38 €' },
            { name: 'Hieronta lämpöhoidolla (45 min)', price: '47 €' },
            { name: 'Hieronta lämpöhoidolla (60 min)', price: '58 €' },
            { name: 'Hieronta lämpöhoidolla (75 min)', price: '65 €' },
            { name: 'Hieronta lämpöhoidolla (90 min)', price: '72 €' }
          ]
        },
        head: {
          title: 'Päähieronnat',
          tooltip: 'Pään, niskan ja hartioiden alueelle kohdistuva hieronta.',
          items: [
            { name: 'Pään alueen hieronta (30 min)', price: '30 €' },
            { name: 'Pään alueen hieronta (45 min)', price: '40 €' }
          ]
        },
        other: {
          title: 'Muut hieronnat',
          tooltip: '<p>Hierontaa yhdistettynä selän tai raajojen imukuppikäsittelyyn.<br><br>Aluksi lämmitän ihon sivelemällä siihen hierontaöljyä. Tämän jälkeen käsittelen ihoa ja lihaksistoa imukupeilla. Imukupit voivat jäädä hetkeksi paikalleen, tai niitä voidaan liikutella. Imukuppien luoma alipaine nostaa kevyesti ihoa ja sen alaisia kudoksia, virkistäen verenkiertoa ja rentouttaen asiakkaan oloa.</p>',
          items: [
            { name: 'Imukuppihieronta (30 min)', price: '35 €' },
            { name: 'Imukuppihieronta (45 min)', price: '45 €' }
          ]
        }
      }
    }
  }
}
</script>

<style lang="scss">
.tooltip-content {
  padding: 10px !important;
  background: #000 !important;
  &:before {
    border-top-color: #000 !important;
  }
}
.tooltip-trigger {
  cursor: pointer;
}
.button {
  background-color: rgb(0, 209, 178);
  border: none;
  &:hover {
    background-color: rgba(0, 209, 178, .9);
  }
  &:focus {
    outline: 0 !important;
    border-color: unset !important;
  }
}
@media (max-width: 700px) {
  .button {
    width: 100%;
  }
}
</style>
