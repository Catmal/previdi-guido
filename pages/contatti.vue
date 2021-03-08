<template>
  <div
    :style="{ 
      backgroundImage: 'url(' + document.background.url + '), linear-gradient(rgba(0,0,0,0.4)  30%, rgba(0,0,0,0.8) )',
      }"
    class="background py-6"
    style="position:relative"
  >
    <div class="container p-4">
      <h1 class="has-text-white">CONTATTI</h1>
      <div class="has-text-white">
        <div class="columns">
          <div class="column is-full-mobile is-one-third-tablet is-one-third-desktop is-clickable">
            <h3>UFFICIO</h3>
            <h4 class="is-size-2 mt-4">0535 97277</h4>
          </div>
          <div
            class="column is-full-mobile is-one-third-tablet is-one-third-desktop is-clickable has-text-centered has-text-left-mobile"
          >
            <h3>GUIDO</h3>
            <h4 class="is-size-2 mt-4">348 0736481</h4>
          </div>
          <div
            class="column is-full-mobile is-one-third-tablet is-one-third-desktop is-clickable has-text-right has-text-left-mobile"
          >
            <h3>MATTEO</h3>
            <h4 class="is-size-2 mt-4">388 6351793</h4>
          </div>
        </div>
      </div>
      <hr />
      <div class="columns">
        <div class="column">
          <section
            class="box section container"
            style="background: rgba(255,255,255,0.85); height: 100%"
          >
            <h3 class="mb-6 has-text-primary">Come possiamo aiutarti?</h3>
            <form
              action="/thanks"
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <b-field>
                <b-input
                  placeholder="Nome*"
                  type="text"
                  name="name"
                  v-model="submission.name"
                  validation-message="Campo nome obbligatorio"
                  required
                ></b-input>
              </b-field>
              <b-field>
                <b-input
                  required
                  placeholder="Email*"
                  type="email"
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
                  name="message"
                  v-model="submission.message"
                  @icon-right-click="submission.message = ''"
                />
              </b-field>
              <b-field
                class="my-6"
                validation-message="Devi accettare per poter inviare il messaggio"
              >
                <b-checkbox required>
                  <h5>Dichiaro di aver preso visione della informativa privacy e, autorizzo il trattamento dei miei dati personali, in relazione a quanto ivi indicato. Leggi Informativa *</h5>
                </b-checkbox>
              </b-field>
              <button
                type="submit"
                class="has-background-primary p-4 has-text-white rounded-borders"
              >Invia</button>
            </form>
          </section>
        </div>
        <div class="column">
          <section
            class="has-text-white has-text-right has-text-left-mobile container"
            style=" height: 100%"
          >
            <h2 class="has-text-weight-bold has-text-primary">ORARI APERTURA</h2>
            <h3 class="has-text-primary has-text-weight-medium mt-6 mb-2">ORARIO ESTIVO</h3>
            <h4 class="has-text-white">
              da lunedi al sabato
              <br />8.30 – 12.00 | 14.30 – 19.00
            </h4>
            <h4 class="has-text-white">Chiuso la domenica</h4>

            <h3 class="has-text-primary has-text-weight-medium mt-6 mb-2">LUGLIO E AGOSTO</h3>
            <h4 class="has-text-white">
              da lunedi al venerdi
              <br />8.30 – 12.00 | 16.30 – 19.00
            </h4>
            <h4 class="has-text-white">Chiuso sabato e domenica</h4>

            <h3 class="has-text-primary has-text-weight-medium mt-6 mb-2">ORARIO INVERNALE</h3>
            <h4 class="has-text-white">
              da lunedi al sabato
              <br />8.30 – 12.00 | 14.30 – 18.00
            </h4>
            <h4 class="has-text-white">Chiuso la domenica</h4>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  transition: "home",
  head: {
    title: "Contatti | VIVAI PREVIDI GUIDO",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  async asyncData({ $prismic, params, error }) {
    try {
      const page = (await $prismic.api.getByUID("page", "contatti")).data;
      return {
        document: page
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  data() {
    return {
      submission: {}
    };
  },
  computed: {
    isDisabled() {
      return (
        !this.submission.email ||
        !this.submission.name ||
        !this.submission.message
      );
    }
  }
};
</script>
<style  scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin-bottom: 2rem;
}
</style>