<template>
  <section class="hero ninja-bg is-relative">

  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake snowflake-3">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake snowflake-3">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake snowflake-3">
  ❄
  </div>
    <div class="hero-body is-flex is-flex-direction-column is-align-items-center">
      <h1 class="title has-text-centered has-text-light animate__animated animate__fadeInDown">
        Ninja Marttinen
      </h1>
      <p class="subtitle has-text-centered has-text-light animate__animated animate__fadeInDown">
        Koulutettu hieroja &amp; urheiluhieroja
      </p>
      <div class="avatar mb-2">
        <img
          :src="settings.header_profile_picture"
          loading="lazy"
          alt="Ninni"
        >
      </div>
      <div class="is-flex is-flex-direction-column has-text-light has-text-centered animate__animated animate__fadeIn">
        <div class="font-sm-18">
          <b-icon icon="phone" size="is-small" />
          <a :href="`tel:${intlPhone(settings.contact.phone)}`">{{ settings.contact.phone }}</a>
        </div>
        <div class="font-sm-18">
          <b-icon icon="calendar" size="is-small" />
          <a :href="settings.contact.booking_url">{{ settings.contact.booking_url|withoutHttp }}</a>
        </div>
        <div class="is-flex is-justify-content-center font-sm-18">
          <div>
            <b-icon icon="instagram" size="is-small" />
            <a :href="settings.contact.instagram_url">{{ settings.contact.instagram_url|accountName }}</a>
          </div>
          <!--
          <div class="ml-1">
            <b-icon icon="facebook" size="is-small" />
            <a :href="settings.contact.facebook_url">{{ settings.contact.facebook_url|accountName }}</a>
          </div>
          -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { formatMixin } from '~/mixins/index.js'

export default {
  mixins: [formatMixin],
  computed: {
    ...mapState(['settings'])
  }
}
</script>

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
   0% { opacity: 0; }
   100% { opacity: 1; }
}

@keyframes appear {
   0% { opacity: 0; }
   100% { opacity: 1; }
}

.snowflake {
  color: #fff;
  font-size: 16px;
  font-family: Arial;
  text-shadow: 0 0 1px #000;
}
.snowflake.snowflake-3 {
  font-size: 12px;
}

@-webkit-keyframes snowflakes-fall{
  0% {
    bottom: 100%
  }
  100% {
    bottom: 0;
  }
}

@-webkit-keyframes snowflakes-shake {
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  50% {
    -webkit-transform: translateX(60px);
    transform: translateX(60px);
  }
  100% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
}
@keyframes snowflakes-fall {
  0%{
    top: -15%;
  }
  100% {
    top: 90%;
  }
}
@keyframes snowflakes-shake {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(60px);
  }
  100% {
    transform: translateX(0px);
  }
}
@keyframes snowflakes-fade {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.snowflake {
  position: absolute;
  opacity: 1;
  top: -15%;
  z-index: 9999;
  cursor: default;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -webkit-animation-name: snowflakes-fall, snowflakes-shake, snowflakes-fade;
  -webkit-animation-duration: 10s, 3s, 10.1s;
  -webkit-animation-timing-function: linear, ease-in-out, linear;
  -webkit-animation-iteration-count: infinite, infinite, infinite;
  -webkit-animation-play-state: running, running, running;

  animation-name: snowflakes-fall, snowflakes-shake, snowflakes-fade;
  animation-duration: 10s, 3s, 10.1s;
  animation-timing-function: linear, ease-in-out, ease-in;
  animation-iteration-count: infinite, infinite, infinite;
  animation-play-state: running, running, running;
}
.snowflake:nth-of-type(0) {
  left: 1%;
  -webkit-animation-delay: 0s, 0s, 0s;
  animation-delay: 0s, 0s, 0s;
}
.snowflake:nth-of-type(1) {
  left: 10%;
  -webkit-animation-delay: 1s, 1s, 1s;
  animation-delay: 1s, 1s, 1s;
}.snowflake:nth-of-type(2) {
  left: 20%;
  -webkit-animation-delay: 6s, .5s, 6s;
  animation-delay: 6s, .5s, 6s;
}
.snowflake:nth-of-type(3) {
  left: 30%;
  -webkit-animation-delay: 4s, 2s, 4s;
  animation-delay: 4s, 2s, 4s;
}
.snowflake:nth-of-type(4) {
  left: 40%;
  -webkit-animation-delay: 2s, 2s, 2s;
  animation-delay: 2s, 2s, 2s;
}
.snowflake:nth-of-type(5) {
  left: 50%;
  -webkit-animation-delay: 8s, 3s, 8s;
  animation-delay: 8s, 3s, 8s;
}
.snowflake:nth-of-type(6) {
  left: 60%;
  -webkit-animation-delay: 6s, 2s, 6s;
  animation-delay: 6s, 2s, 6s;
}
.snowflake:nth-of-type(7) {
  left: 65%;
  -webkit-animation-delay: 2.5s, 1s, 2.5s;
  animation-delay: 2.5s, 1s, 2.5s;
}
.snowflake:nth-of-type(8) {
  left: 70%;
  -webkit-animation-delay: 1s, 0s, 1s;
  animation-delay: 1s, 0s, 1s;
}
.snowflake:nth-of-type(9) {
  left: 70%;
  -webkit-animation-delay: 3s, 1.5s, 3s;
  animation-delay: 3s, 1.5s, 3s;
}
</style>
