<template>
  <div>
    <b-navbar class="is-primary">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">Phone</b-navbar-item>
      </template>
      <template slot="end"></template>
    </b-navbar>
    <b-navbar class="sticky px-6" style="height: 80px; background-color: rgba(255,255,255,0.8)">
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
        <b-navbar-item tag="router-link" :to="{ path: '/azienda' }" class="is-primary">Azienda</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/piante' }">Piante</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/lavori' }">Lavori</b-navbar-item>

        <b-navbar-dropdown label="Servizi">
          <b-navbar-item tag="router-link" :to="{ path: '/services/aiuole' }">Aiuole</b-navbar-item>
          <b-navbar-item href="#">Contact</b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-item tag="router-link" :to="{ path: '/contatti' }">Contatti</b-navbar-item>
      </template>
    </b-navbar>

    <section class="main-content columns">
      <!-- <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" />
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>-->

      <nuxt />
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