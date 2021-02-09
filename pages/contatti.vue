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
            <section class="card section container mb-6" style="background: rgba(255,255,255,0.9">
              <h3 class="mb-6">Come possiamo aiutarti?</h3>
              <input type="hidden" name="form-name" value="ask-question" />
              <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
                <b-field>
                  <b-input
                    placeholder="Nome"
                    type="text"
                    icon="account"
                    icon-right="close-circle"
                    icon-right-clickable
                    name="name"
                  ></b-input>
                </b-field>
                <b-field>
                  <b-input
                    placeholder="Email"
                    type="email"
                    icon="email"
                    icon-right="close-circle"
                    icon-right-clickable
                    name="email"
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
                  ></b-input>
                </b-field>
                <b-field>
                  <b-input
                    placeholder="Messaggio"
                    type="textarea"
                    icon-right="close-circle"
                    icon-right-clickable
                    name="messaggio"
                  ></b-input>
                </b-field>
                <b-field class="my-6">
                  <b-checkbox>Dichiaro di aver preso visione della informativa privacy e, autorizzo il trattamento dei miei dati personali, in relazione a quanto ivi indicato. Leggi Informativa *</b-checkbox>
                </b-field>
                <button class="has-background-primary p-4 has-text-white" type="submit">Send</button>
              </form>
            </section>
          </div>
          <div class="column">
            <section class="card info section container" style="background: rgba(255,255,255,0.9">
              <h5>
                <b-icon icon="phone" size="is-small" class="mr-2 mt-4"></b-icon>UFFICIO | 0535.97277
              </h5>
              <h5>
                <b-icon icon="cellphone" size="is-small" class="mr-2 mt-4"></b-icon>GUIDO | 348 0736481
              </h5>
              <h5>
                <b-icon icon="cellphone" size="is-small" class="mr-2 mt-4"></b-icon>MATTEO | 388 6351793
              </h5>

              <h3 class="mt-6 has-text-primary">ORARI APERTURA</h3>
              <h4>ORARIO ESTIVO</h4>
              <p>da lunedi al sabato | 8.30 – 12.00 14.30 – 19.00</p>
              <p>Chiuso sabato e domenica</p>

              <h4>LUGLIO E AGOSTO</h4>
              <p>da lunedi al venerdi | 8.30 – 12.00 16.30 – 19.00</p>
              <p>Chiuso sabato e domenica</p>

              <h4>ORARIO INVERNALE</h4>
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

}
</script>
<style lang="scss"  scoped>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
.form.h4 {
  margin-bottom: 2rem;
}
h4 {
  margin-top: 2rem !important;
}
</style>