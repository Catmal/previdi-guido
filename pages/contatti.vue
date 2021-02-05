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
        <h1 class="is-size-1 has-text-weight-light is-uppercase has-text-white">CONTATTI</h1>

        <div class="columns">
          <div class="column">
            <section
              class="card section container mt-4 mb-6"
              style="background: rgba(255,255,255,0.9"
            >
              <h1 class="mb-6">Come possiamo aiutarti?</h1>
              <form name="contact" netlify>
                <b-field>
                  <b-input
                    placeholder="Nome"
                    type="text"
                    icon="email"
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
                    placeholder="Messaggio"
                    type="textarea"
                    icon-right="close-circle"
                    icon-right-clickable
                    name="email"
                  ></b-input>
                </b-field>
                <button class="has-background-primary p-4 has-text-white" type="submit">Send</button>
              </form>
            </section>
          </div>
          <div class="column">
            <section class="card section container my-6" style="background: rgba(255,255,255,0.9">
              <h1>TELEFONO</h1>
              <h2>
                <b-icon icon="phone" size="is-medium" class="mr-2 mt-4"></b-icon>UFFICIO - 0535.97277
              </h2>
              <h2>
                <b-icon icon="phone" size="is-medium" class="mr-2 mt-4"></b-icon>GUIDO - 0535.97277
              </h2>
              <h2>
                <b-icon icon="phone" size="is-medium" class="mr-2 mt-4"></b-icon>MATTEO - 0535.97277
              </h2>
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
</style>