<template>
  <div>
    <div style="position:relative;">
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
    </div>
    <div style=" margin-top:-28%; padding: 15px">
      <div class="container">
        <h1 class="has-text-white">CONTATTI</h1>
        <div class="columns">
          <div class="column">
            <section
              class="card section container mb-6"
              style="background: rgba(255,255,255,0.9; height: 100%"
            >
              <h3 class="mb-6 is-text-primary">Come possiamo aiutarti?</h3>
              <input type="hidden" name="form-name" value="ask-question" />
              <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
                <b-field>
                  <b-input
                    autofocus
                    size="is-large"
                    placeholder="Nome"
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
                    size="is-large"
                    placeholder="Email"
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
                    size="is-large"
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
                    name="messaggio"
                    v-model="submission.message"
                    @icon-right-click="submission.message = ''"
                  ></b-input>
                </b-field>
                <b-field class="my-6">
                  <b-checkbox
                    required
                  >Dichiaro di aver preso visione della informativa privacy e, autorizzo il trattamento dei miei dati personali, in relazione a quanto ivi indicato. Leggi Informativa *</b-checkbox>
                </b-field>
                <b-button
                  expanded
                  class="has-background-primary p-4 has-text-white rounded-borders"
                  type="submit"
                  active:disabled="isDisabled"
                >Invia</b-button>
              </form>
            </section>
          </div>
          <div class="column">
            <section
              class="card info section container"
              style="background: rgba(255,255,255,0.9); height: 100%"
            >
              <p>
                <b-icon icon="phone" size="is-small" class="mr-2 mt-4"></b-icon>UFFICIO | 0535.97277
              </p>
              <p>
                <b-icon icon="cellphone" size="is-small" class="mr-2 mt-4"></b-icon>GUIDO | 348 0736481
              </p>
              <p>
                <b-icon icon="cellphone" size="is-small" class="mr-2 mt-4"></b-icon>MATTEO | 388 6351793
              </p>

              <h3 class="mt-6 has-text-primary">ORARI APERTURA</h3>
              <h4 class="has-text-bold">ORARIO ESTIVO</h4>
              <p>da lunedi al sabato | 8.30 – 12.00 14.30 – 19.00</p>
              <p>Chiuso sabato</p>

              <h4 class="has-text-bold">LUGLIO E AGOSTO</h4>
              <p>da lunedi al venerdi | 8.30 – 12.00 16.30 – 19.00</p>
              <p>Chiuso sabato e domenica</p>

              <h4 class="has-text-bold">ORARIO INVERNALE</h4>
              <p>da lunedi al sabato | 8.30 – 12.00 14.30 – 19.00</p>
              <p>Chiuso sabato e domenica</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    transition: 'home',
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
h4 {
  margin-top: 2rem !important;
}
</style>