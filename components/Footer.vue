<template>
  <footer
        class="footer has-background-primary center "
        style="padding: 10px;  z-index: 20; opacity: 0.9"
      >
      <div class="container">
        <div class="columns has-text-white mt-4" >
          <div class="column is-one-third has-text-centered-mobile">
            <h5 class="has-text-weight-bold">Telefono</h5>
            <h5>0535 97277 </h5>

            <h5 class="has-text-weight-bold">Email</h5>
            <h5>info@previdiguido.com</h5>
          </div>
          <div class="column is-one-third has-text-centered">
            <h5 class="has-text-weight-bold">Indirizzo</h5>
            <h5>Via x Modena Ovest 102</h5>
            <h5>Massa Finalese</h5>
            <h5>Modena</h5>


          </div>
          <div class="column is-one-third  has-text-right has-text-centered-mobile">
            <h5 class="has-text-weight-bold">Orario Apertura</h5>
            <div v-if="currentMonth > 9 || currentMonth < 4">
            <h5>da lunedi al sabato </h5>
            <h5>8.30 – 12.00 | 14.30 – 18.00</h5>
            <h5>Chiuso la domenica</h5>
            </div>
             <div v-if="currentMonth === 7 || currentMonth === 8">
            <h5>da lunedi al venerdi</h5>
            <h5>8.30 – 12.00 | 16.30 – 19.00</h5>
            <h5>Chiuso sabato e domenica </h5>
            </div>
             <div v-if="currentMonth > 3 && currentMonth < 7">
            <h5>da lunedi al sabato</h5>
            <h5>8.30 – 12.00 | 14.30 – 19.00</h5>
            <h5>Chiuso la domenica </h5>
            </div>
          </div>
        </div>
        <div class="center">
          
          <h5 class="has-text-white is-size-6">Copyright 2021 Previdi Guido - Tutti i diritti riservati</h5>
        </div>
      </div>
        

  </footer>
</template>
<script>
export default {
  computed: {
    currentMonth() {
    return new Date().getMonth() + 1
    }
  }
}
</script>
<style scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

hr {
  width: 60%
}
</style>