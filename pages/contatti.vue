<template>
  <div>
    <div style="position:relative;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260">
        <path
          fill="#0e9246"
          fill-opacity="1"
          d="M0,192L80,170.7C160,149,320,107,480,122.7C640,139,800,213,960,224C1120,235,1280,181,1360,154.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </svg>
    </div>
    <div style=" margin-top:-290px;">
      <div class="container">
        <h1 class="is-size-1 has-text-weight-bold is-uppercase has-text-white mb-6">CONTATTI</h1>

        <section class="card section container my-6" style="background: rgba(255,255,255,0.7">
          <div class="columns">
            <div class="column">
              <form name="contact" netlify>
                <b-field>
                  <b-input
                    placeholder="Name"
                    v-model="email"
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
                    v-model="email"
                    type="email"
                    icon="email"
                    icon-right="close-circle"
                    icon-right-clickable
                    name="email"
                  ></b-input>
                </b-field>
                <button type="submit">Send</button>
              </form>
            </div>
            <div class="column">
              <h1>TELEFONO</h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>