<template>
  <div style="min-height: 100vh; height: 100%; margin-top: -94px">
    <!-- <div style="position:relative;">
      <svg
        style="position: sticky; top: 70px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 200"
      >
        <path
          fill="#0e9246"
          fill-opacity="1"
          d="M0,192L80,170.7C160,149,320,107,480,122.7C640,139,800,213,960,224C1120,235,1280,181,1360,154.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </svg>
    </div>-->
    <div
      class="background"
      style="padding-top: 120px"
    >
    <div class="overlay">
      <div  class="container p-4" >
        <h1 class="has-text-white pt-6">CONTATTI</h1>
        <div class="center has-text-white">
          <div>
             <h5>
                <b-icon icon="phone" size="is-small" class="mr-2 mt-4 is-primary"></b-icon>UFFICIO                
              </h5>
              <h3>0535 97277</h3>
          </div>
          <div>
             <h5 class="has-text-centered">
                <b-icon icon="cellphone" size="is-small" class="mr-2 mt-4 is-primary"></b-icon>GUIDO                
              </h5>
              <h3>348 0736481</h3>
          </div>
          <div>
             <h5 class="has-text-right">
                <b-icon icon="cellphone" size="is-small" class="mr-2 mt-4 is-primary"></b-icon>MATTEO                
              </h5>
              <h3>388 6351793</h3>
          </div>
        </div>
        <hr>
        <div class="columns">
          <div class="column">
            <section
              class="box section container"
              style="background: rgba(255,255,255,0.85); height: 100%"
            >
              <h3 class="mb-6 has-text-primary">Come possiamo aiutarti?</h3>
              <form   method="post" name="contact" data-netlify="true"  data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact"  />

                  <b-field>
                  <b-input
                    placeholder="Nome*"
                    type="text"
                    icon="account"
                    icon-right="close-circle"
                    icon-right-clickable
                    name="name"
                    v-model="submission.name"
                    @icon-right-click="submission.name = ''"
                    validation-message="Campo nome obbligatorio"
                    required
                    ></b-input>
                </b-field>
               
                   <b-field>
                  <b-input
                    required
                    placeholder="Email*"
                    type="email"
                    icon="email"
                    icon-right="close-circle"
                    icon-right-clickable
                    name="email"
                    validation-message="Inserisci un indirizzo email valido"
                    v-model="submission.email"
                    @icon-right-click="submission.email = ''"
                   ></b-input>
                </b-field>
                <b-field>
                  <b-input
                    placeholder="Telefono"
                    type="phone"
                    icon="phone"
                    icon-right="close-circle"
                    icon-right-clickable
                    name="phone"
                    v-model="submission.phone"
                    @icon-right-click="submission.phone = ''"
                  ></b-input>
                </b-field>
                <b-field>
                  <b-input
                    required
                    validation-message="Campo messaggio obbligatorio"
                    placeholder="Messaggio"
                    type="textarea"
                    icon-right="close-circle"
                    icon-right-clickable
                    name="message"
                    v-model="submission.message"
                    @icon-right-click="submission.message = ''"
                  />
                </b-field>
                <b-field class="my-6">
                  <b-checkbox
                    required
                  ><h5>Dichiaro di aver preso visione della informativa privacy e, autorizzo il trattamento dei miei dati personali, in relazione a quanto ivi indicato. Leggi Informativa *</h5></b-checkbox>
                </b-field>
                <b-button
                  expanded
                  class="has-background-primary p-4 has-text-white rounded-borders"
                  
                 
                >Invia</b-button>
              </form>
            </section>
          </div>
          <div class="column">
            <section
              class="has-text-white has-text-right  container"
              style=" height: 100%"
            >
             

              <h2 class=" has-text-weight-bold has-text-primary">ORARI APERTURA</h2>
              <h3 class="has-text-primary has-text-weight-medium mt-6 mb-2">ORARIO ESTIVO</h3>
              <h4 class="has-text-white">da lunedi al sabato <br> 8.30 – 12.00 | 14.30 – 19.00</h4>
              <h4 class="has-text-white">Chiuso la domenica</h4>

              <h3 class="has-text-primary has-text-weight-medium mt-6 mb-2">LUGLIO E AGOSTO</h3>
              <h4 class="has-text-white">da lunedi al venerdi <br>  8.30 – 12.00 | 16.30 – 19.00</h4>
              <h4 class="has-text-white">Chiuso sabato e domenica</h4>

              <h3 class="has-text-primary has-text-weight-medium mt-6 mb-2">ORARIO INVERNALE</h3>
              <h4 class="has-text-white">da lunedi al sabato <br> 8.30 – 12.00 | 14.30 – 18.00</h4>
              <h4 class="has-text-white">Chiuso la domenica</h4>
            </section>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
    transition: 'home',
    head: {
    title: 'Vivai Previdi Guido - Contatti',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }, 
    data() {
      return {
        submission: {}
      }
    },
    computed: {
    isDisabled() {
    	return !this.submission.email || !this.submission.name || !this.submission.message
    }
    }

}
</script>
<style lang="scss"  scoped>
.form.h4 {
  margin-bottom: 2rem;
}


.background {
  background-image: url('/vivai-previdi-guido.jpg'), linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.8)); 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
      background-blend-mode: overlay;
}
.center {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin-bottom: 2rem
}


</style>