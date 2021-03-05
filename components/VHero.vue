<template>
  <section class="hero ninja-bg">
    <div class="hero-body is-flex is-flex-direction-column is-align-items-center">
      <h1 class="title has-text-centered has-text-light wow animate__animated animate__fadeInDown">
        Ninja Marttinen
      </h1>
      <p class="subtitle has-text-centered has-text-light wow animate__animated animate__fadeInDown">
        Koulutettu hieroja &amp; urheiluhieroja
      </p>
      <div class="avatar mb-2">
        <img
          src="~assets/images/ninni_resized2.jpg"
          loading="lazy"
          alt="Ninni"
        >
      </div>
      <div class="is-flex is-flex-direction-column has-text-light has-text-centered wow animate__animated animate__fadeIn">
        <div class="font-sm-18">
          <a href="tel:+358503239499">☎️ 050 323 9499</a>
        </div>
        <div class="font-sm-18"><a href="https://varaa.timma.fi/hyvanolonhaltijattaret">varaa.timma.fi/hyvanolonhaltijattaret</a></div>
        <div class="is-flex is-justify-content-space-between font-sm-18">
          <div class="mr-1">
            <b-icon icon="instagram" size="is-small" />
            <a href="https://instagram.com/koulutettu_ninja">koulutettu_ninja</a>
          </div>
          <div class="ml-1">
            <b-icon icon="facebook" size="is-small" />
            <a href="https://facebook.com/koulutettu.marttinen">koulutettu.marttinen</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.ninja-bg {
  background: rgb(49,122,149);
  background: linear-gradient(0deg, rgba(49,122,149,1) 0%, rgba(2,0,36,1) 100%);
}
.title {
  letter-spacing: 1px;
}
.avatar {
  img {
    object-fit: cover;
    width: 200px;
    height: 200px;
    min-width: 200px;
    min-height: 200px;
    border-radius: 50%;
    border: 2px solid #fff;
    -webkit-animation: appear 3s;
    animation: appear 3s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
}

@-webkit-keyframes appear {
   0% { left: 500px; opacity: 0; }
   100% { left: 16px; opacity: 1; }
}

@keyframes appear {
   0% { left: 500px; opacity: 0; }
   100% { left: 16px; opacity: 1; }
}
</style>
