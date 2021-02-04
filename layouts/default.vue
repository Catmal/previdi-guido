<template>
  <div>
    <b-navbar centered type="is-primary">
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <b-icon icon="phone" size="is-medium" class="mr-2"></b-icon>
          <h2>0535.97277</h2>
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <b-icon icon="email" size="is-medium" class="mr-2"></b-icon>
          <h2>0535.97277</h2>
        </b-navbar-item>
      </template>
    </b-navbar>
    <b-navbar
      hoverable
      class="sticky"
      style="height: 80px; background-color: rgba(255,255,255,0.8)"
    >
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
        <b-navbar-item class="has-text-primary" tag="router-link" :to="{ path: '/azienda' }">Azienda</b-navbar-item>
        <b-navbar-item class="has-text-primary" tag="router-link" :to="{ path: '/piante' }">Piante</b-navbar-item>
        <b-navbar-item class="has-text-primary" tag="router-link" :to="{ path: '/lavori' }">Lavori</b-navbar-item>

        <b-navbar-dropdown class="has-text-primary" label="Servizi">
          <b-navbar-item
            class="has-text-primary"
            tag="router-link"
            :to="{ path: '/services/aiuole' }"
          >Aiuole</b-navbar-item>
          <b-navbar-item href="#">Contact</b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-item
          class="has-text-primary"
          tag="router-link"
          :to="{ path: '/contatti' }"
        >Contatti</b-navbar-item>
      </template>
    </b-navbar>

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
</style>