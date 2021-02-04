<template>
  <div>
    <nav style="height: 40px" class="level has-background-primary has-text-white p-2">
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
    </nav>
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
            class="has-text-primary has-text-weight-light"
            tag="router-link"
            :to="{ path: '/azienda' }"
          >Azienda</b-navbar-item>
          <b-navbar-item
            active-class="is-active"
            class="has-text-primary has-text-weight-light"
            tag="router-link"
            :to="{ path: '/piante' }"
          >Piante</b-navbar-item>
          <b-navbar-item
            class="has-text-weight-light has-text-primary"
            tag="router-link"
            :to="{ path: '/lavori' }"
          >Lavori</b-navbar-item>

          <b-navbar-dropdown class="drop" label="Servizi">
            <b-navbar-item
              class="has-text-primary has-text-weight-light"
              tag="router-link"
              :to="{ path: '/servizi/aiuole' }"
            >Aiuole</b-navbar-item>
            <b-navbar-item
              class="has-text-primary has-text-weight-light"
              tag="router-link"
              :to="{ path: '/servizi/parchi-e-giardini' }"
            >Parchi e Giardini</b-navbar-item>
            <b-navbar-item
              class="has-text-primary has-text-weight-light"
              tag="router-link"
              :to="{ path: '/servizi/prati' }"
            >Prati</b-navbar-item>
            <b-navbar-item
              class="has-text-primary has-text-weight-light"
              tag="router-link"
              :to="{ path: '/servizi/impianti-irrigazione' }"
            >Impianti Irrigazione</b-navbar-item>
            <b-navbar-item
              class="has-text-primary has-text-weight-light"
              tag="router-link"
              :to="{ path: '/servizi/trattamenti-fitosanitari' }"
            >Trattamenti Fitosanitari</b-navbar-item>
            <b-navbar-item
              active-class="is-active"
              class="has-text-primary has-text-weight-light"
              tag="router-link"
              :to="{ path: '/servizi/endoterapia' }"
            >Endoterapia</b-navbar-item>
            <b-navbar-item
              active-class="is-active"
              class="has-text-primary has-text-weight-light"
              tag="router-link"
              :to="{ path: '/servizi/potatura-aerea' }"
            >Potatura Aerea</b-navbar-item>
            <b-navbar-item
              active-class="is-active"
              class="has-text-primary has-text-weight-light"
              tag="router-link"
              :to="{ path: '/servizi/allestimenti-eventi' }"
            >Allestimenti Eventi</b-navbar-item>
          </b-navbar-dropdown>
          <b-navbar-item
            active-class="is-active"
            class="has-text-primary has-text-weight-light"
            tag="router-link"
            :to="{ path: '/contatti' }"
          >Contatti</b-navbar-item>
        </template>
      </b-navbar>
    </div>
    <section>
      <nuxt />
      <footer
        class="footer has-background-primary has-text-white"
        style="padding: 10px; bottom: 0; left: 0; right: 0"
      >
        <div class="content has-text-centered">
          <p>Copyright 2019 Previdi Guido - Tutti i diritti riservati</p>
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.sticky {
  position: sticky;
  top: 0;
}
.drop {
  font-weight: 300 !important;
}

.level:not(:last-child) {
  margin-bottom: 0;
}

.is-active {
  font-weight: bold !important;
  font-size: 22px;
}

html {
  font-family: "Poppins";
}
</style>