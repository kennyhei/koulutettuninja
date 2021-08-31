<template>
  <section id="introduction" class="section pb-5">
    <div class="block">
      <h2 class="title">Moikka! 👋</h2>
    </div>
    <div id="description" :class="{ 'expanded': isExpanded }">
      <div class="content font-18">
        <p>Marttisen Ninja tässä. Tarjoan monipuolisia hierontapalveluja Keravalla, Jaakkolan kaupunginosassa. Löydät minut osoitteesta Jaakkolantie 11, samoista tiloista Hyvän Olon Haltijattaret Oy:n kanssa.</p>
        <p>Valmistuin koulutetuksi hierojaksi loppuvuodesta 2017. Hierojaopinnoissa erikoistuin urheilijan lihashuoltoon, joten olen myös urheiluhieroja.</p>
        <p>Klassisen hieronnan ja urheiluhieronnan lisäksi olen suorittanut imukuppihieronta- / kuivakuppauskurssin vuonna 2017. Vuonna 2018 työskentelin kauneushoitolassa, joten sain loistavan tilaisuuden opetella myös kuumakivien käyttöä! Kuumakivihieronta ja suklaaöljyhieronta kuuluvatkin keskeisenä osana palvelutarjontaani.</p>
        <p>Varsinaista hoitofilosofiaa minulla ei ole, mutta työskentelyni keskiössä ovat kosketuksen rentouttava vaikutus, sekä ajatus siitä, että hieronta on asiakkaani <i>omaa aikaa</i>. Kun tulet hierottavakseni, sinulta ei vaadita mitään, vaan pääset rentoutumaan ja nauttimaan omasta ajastasi,  vailla kiirettä tai velvollisuuksia.</p>
        <p>Tervetuloa hierontaan!</p>
      </div>
    </div>
    <div v-if="!isExpanded" class="c-pointer expand is-size-5" @click="isExpanded = true">
      <b-icon icon="plus-circle-outline" style="position: relative; top: 2px;" />
      <b>Lue lisää</b>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isExpanded: false
    }
  }
}
</script>

<style lang="scss" scoped>
#introduction .expand {
  display: none;
}
@media (max-width: 700px) {
  #introduction {
    #description {
      position: relative;
      max-height: 220px;
      overflow: hidden;
      transition: max-height 2.5s ease;

      &.expanded {
        max-height: 5000px;
      }

      &:not(.expanded):after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(hsla(0,0%,100%,0) 60%,#fff);
      }
    }
    .expand {
      display: block;
      &:hover {
        color: lightblue;
      }
    }
  }
}
</style>
