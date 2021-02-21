<template>
  <div>
    <vue-cookie-accept-decline
      :ref="'myPanel1'"
      :elementId="'myPanel1'"
      :debug="false"
      :position="'bottom-left'"
      :type="'floating'"
      :disableDecline="true"
      :transitionName="'slideFromBottom'"
      :showPostponeButton="false"
      @status="cookieStatus"
    >
      <!-- Optional -->
      <div slot="postponeContent">&times;</div>

      <!-- Optional -->
      <div slot="message">
        Questo sito fa uso di cookie per migliorare l’esperienza di navigazione degli utenti e per raccogliere informazioni sull’utilizzo del sito stesso.
        <a
          href="/privacy-policy-cookie-consent"
          target="_blank"
        >Info</a>
      </div>

      <!-- Optional -->
      <div slot="declineContent">OPT OUT</div>

      <!-- Optional -->
      <div slot="acceptContent">ACCETTA</div>
    </vue-cookie-accept-decline>
    <!-- <nav style="height: 40px" class="level has-background-primary has-text-white p-2">
      <div class="level-item">
        <div>
          <p class>0535.97277</p>
        </div>
      </div>

      <div class="level-item">
        <div>
          <p class>info@previdiguido.it</p>
        </div>
      </div>
      <div class="level-item">
        <div>
          <p class>Facebook</p>
        </div>
      </div>
    </nav>-->
    <div
      class="sticky pt-4"
      style="height: 94px; background-color: rgba(255,255,255,0.8); z-index: 12;"
    >
      <b-navbar style="background-color: rgba(255,255,255,0)" class="container" hoverable>
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img
              style="max-height: 50px;"
              src="/logo.png"
              alt="Lightweight UI components for Vue.js based on Bulma"
            />
          </b-navbar-item>
        </template>
        <template slot="end">
          <b-navbar-item
            active-class="is-active"
            class="has-text-primary"
            tag="router-link"
            :to="{ path: '/azienda' }"
          >Azienda</b-navbar-item>
          <b-navbar-item
            active-class="is-active"
            class="has-text-primary"
            tag="router-link"
            :to="{ path: '/piante' }"
          >Piante</b-navbar-item>
          <b-navbar-item
            active-class="is-active"
            class="has-text-primary"
            tag="router-link"
            :to="{ path: '/lavori' }"
          >Lavori</b-navbar-item>

          <b-navbar-dropdown active-class="is-active" class="drop" label="Servizi">
            <b-navbar-item
              active-class="is-active"
              class="has-text-primary"
              tag="router-link"
              :to="{ path: '/servizi/aiuole' }"
            >Aiuole</b-navbar-item>
            <b-navbar-item
              active-class="is-active"
              class="has-text-primary"
              tag="router-link"
              :to="{ path: '/servizi/parchi-e-giardini' }"
            >Parchi e Giardini</b-navbar-item>
            <b-navbar-item
              active-class="is-active"
              class="has-text-primary"
              tag="router-link"
              :to="{ path: '/servizi/prati' }"
            >Prati</b-navbar-item>
            <b-navbar-item
              active-class="is-active"
              class="has-text-primary"
              tag="router-link"
              :to="{ path: '/servizi/impianti-irrigazione' }"
            >Impianti Irrigazione</b-navbar-item>
            <b-navbar-item
              active-class="is-active"
              class="has-text-primary"
              tag="router-link"
              :to="{ path: '/servizi/trattamenti-fitosanitari' }"
            >Trattamenti Fitosanitari</b-navbar-item>
            <b-navbar-item
              active-class="is-active"
              class="has-text-primary"
              tag="router-link"
              :to="{ path: '/servizi/endoterapia' }"
            >Endoterapia</b-navbar-item>
            <b-navbar-item
              active-class="is-active"
              class="has-text-primary"
              tag="router-link"
              :to="{ path: '/servizi/potatura-aerea' }"
            >Potatura Aerea</b-navbar-item>
            <b-navbar-item
              active-class="is-active"
              class="has-text-primary"
              tag="router-link"
              :to="{ path: '/servizi/allestimenti-eventi' }"
            >Allestimenti Eventi</b-navbar-item>
            <b-navbar-item
              active-class="is-active"
              class="has-text-primary"
              tag="router-link"
              :to="{ path: '/servizi/lavori-vari' }"
            >Lavori Vari</b-navbar-item>
          </b-navbar-dropdown>
          <b-navbar-item
            active-class="is-active"
            class="has-text-primary"
            tag="router-link"
            :to="{ path: '/contatti' }"
          >Contatti</b-navbar-item>
          <b-navbar-item icon="phone" href="https://www.facebook.com/guidoprevidi" target="_blank">
            <img style="max-height: 30px;" src="/facebook.png" />
          </b-navbar-item>
        </template>
      </b-navbar>
    </div>
    <section>
      <nuxt />
      <Footer />
    </section>
  </div>
</template>

<script>
import VueCookieAcceptDecline from 'vue-cookie-accept-decline'
import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css'
import Footer from '../components/Footer'
export default {
  components: {
    Footer,
    VueCookieAcceptDecline
  }
}
</script>


