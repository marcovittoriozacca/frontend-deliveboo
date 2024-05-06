<script>
import axios from "axios";
import { store } from "../Store";
import { router } from "../router";

import CartCard from "../components/Header/CartCard.vue";
import Loader from "../components/GeneralComponents/Loader.vue";

export default {
  name: "Payment",
  components: {
    CartCard,
    Loader,
  },
  data() {
    return {
      store,
      clientToken: "",
      gotToken: false,
      restaurant: "",
      valid: false,
      paymentLoader: false,
    };
  },
  mounted() {
    this.getToken();
    store.full_name = "";
    store.email = "";
    store.address = "";
    store.tel = "";
    store.description = "";
    this.valid = false;
    this.paymentLoader = false;
  },
  methods: {
    validation() {
      let controllo = true;

      if (store.full_name) {
        let validRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\-']+(\s[A-Za-zÀ-ÖØ-öø-ÿ\-']+)*$/;
        if (!validRegex.test(store.full_name)) {
          document.getElementById("nameerror").innerHTML =
            "Inserisci solo caratteri o spazi";
          controllo = false;
        } else {
          document.getElementById("nameerror").innerHTML = "";
        }
      } else {
        document.getElementById("nameerror").innerHTML = "Inserisci le informazioni";
        controllo = false;
      }

      if (store.email) {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!validRegex.test(store.email)) {
          document.getElementById("emailerror").innerHTML =
            "Inserisci solo lettere maiuscole, minuscole, numeri e solo @ e . come caratteri speciali";
          controllo = false;
        } else {
          document.getElementById("emailerror").innerHTML = "";
        }
      } else {
        document.getElementById("emailerror").innerHTML = "Inserisci le informazioni";
        controllo = false;
      }

      if (store.address) {
        let validRegex = /^[0-9a-zA-Z.,\s]+$/;
        if (!validRegex.test(store.address)) {
          document.getElementById("addresserror").innerHTML =
            "Inserisci solo caratteri alfabetici,numeri,virgole o punti";
          controllo = false;
        } else {
          document.getElementById("addresserror").innerHTML = "";
        }
      } else {
        document.getElementById("addresserror").innerHTML = "Inserisci le informazioni";
        controllo = false;
      }

      if (store.tel) {
        let validRegex = /^[0-9]{6,14}$/;
        if (!validRegex.test(store.tel)) {
          document.getElementById("telerror").innerHTML =
            "Inserisci un numero di telefono compreso tra 6 e 14 numeri";
          controllo = false;
        } else {
          document.getElementById("telerror").innerHTML = "";
        }
      } else {
        document.getElementById("telerror").innerHTML = "Inserisci le informazioni";
        controllo = false;
      }

      if (store.description) {
        let validRegex = /^[0-9a-zA-Z.,\s]+$/;
        if (!validRegex.test(store.description)) {
          document.getElementById("descriptionerror").innerHTML =
            "Non inserire caratteri speciali eccetto il punto o la virgola";
          controllo = false;
        } else {
          document.getElementById("descriptionerror").innerHTML = "";
        }
      } else {
        document.getElementById("descriptionerror").innerHTML = "";
      }

      if (controllo === true) {
        this.valid = true;
      } else {
        this.valid = false;
      }
    },

    async getToken() {
      this.gotToken = false;
      await axios.get("http://127.0.0.1:8000/api/braintree/get-token").then((res) => {
        this.clientToken = res.data.token;
        this.gotToken = true;
      });
    },

    braintreeInit() {
      const self = this;
      const button = document.querySelector("#submit-button");
      braintree.dropin.create(
        {
          authorization: this.clientToken,
          locale: "it_IT",
          container: "#dropin-container",
        },
        function (createErr, instance) {
          button.addEventListener("click", function () {
            self.paymentLoader = true;
            instance.requestPaymentMethod(async function (
              requestPaymentMethodErr,
              payload
            ) {
              if (requestPaymentMethodErr) {
                console.error(
                  "Error requesting payment method:",
                  requestPaymentMethodErr
                );
                self.paymentLoader = false;
                return;
              }

              await axios
                .post("http://127.0.0.1:8000/api/braintree/payment", {
                  //qui ci va il local storage con l'intero ordine, tipo:

                  full_name: store.full_name,
                  email: store.email,
                  address: store.address,
                  tel: store.tel,
                  description: store.description,
                  cart: store.listplatelocalstorage,
                  idrestaurant: store.actualrestaurant.restaurant.id,
                  nonce: payload.nonce,
                })
                .then((res) => {
                  if (res.data.success) {
                    self.paymentLoader = false;
                    router.push({ name: "Success" });
                  } else {
                    self.paymentLoader = false;
                    router.push({ name: "FailedCheckout" });
                  }
                });
            });
          });
        }
      );
    },
  },
  watch: {
    gotToken: {
      handler(newVal, oldVal) {
        if (this.gotToken) {
          this.braintreeInit();
        }
      },
    },
  },
};
</script>

<template>
  <div class="page-bg py-5">
    <div class="container-fluid py-3 container-lg p-lg-5 rounded-2">
      <div class="row">
        <div class="col-12 d-flex flex-column flex-lg-row gap-lg-3">
          <div class="col-12 col-lg-6 pb-4">
            <h1 class="text-center">Dettagli di fatturazione</h1>
            <!-- Input per il nome completo -->
            <div class="row row-gap-3 row-gap-lg-4">

              <div class="col-12 col-sm-6 col-lg-12 col-xxl-6">
                <label class="form-label" for="name">Nome e Cognome<span class="text-danger">*</span></label>
                <input
                  name="name"
                  type="text"
                  v-model="store.full_name"
                  :class="{ 'pe-none opacity-50': valid }"
                  id="fullname"
                  class="form-control"
                  placeholder="Nome completo"
                  aria-describedby="fullname-help"
                />
                <small id="nameerror"></small>
              </div>

              <!-- Input per l'email -->
              <div class="col-12 col-sm-6 col-lg-12 col-xxl-6">
                <label class="form-label" for="email">Inserisci la tua Email<span class="text-danger">*</span></label>
                <input
                  name="email"
                  type="text"
                  id="email"
                  v-model="store.email"
                  :class="{ 'pe-none opacity-50': valid }"
                  class="form-control"
                  placeholder="Email"
                  aria-describedby="email-help"
                />
                <small id="emailerror"></small>

              </div>

              <!-- Input per l'indirizzo di casa -->
              <div class="col-12 col-sm-6 col-lg-12 col-xxl-6">
                <label class="form-label" for="address">Inserisci il tuo indirizzo di casa<span class="text-danger">*</span></label>
                <input
                  name="address"
                  type="text"
                  id="address"
                  v-model="store.address"
                  :class="{ 'pe-none opacity-50': valid }"
                  class="form-control"
                  placeholder="Indirizzo"
                  aria-describedby="address-help"
                />
                <small id="addresserror"></small>
              </div>

              <!-- Input per il numero di telefono -->
              <div class="col-12 col-sm-6 col-lg-12 col-xxl-6">
                <label class="form-label" for="tel">Numero di telefono<span class="text-danger">*</span></label>
                <input
                  name="tel"
                  type="tel"
                  id="phone"
                  v-model="store.tel"
                  :class="{ 'pe-none opacity-50': valid }"
                  class="form-control"
                  placeholder="telefono"
                  aria-describedby="phone-help"
                />
                <small id="telerror"></small>
              </div>

              <div class="col-12">
                <label class="form-label" for="description">Inserisci più dettagli sulla consegna</label>
                <textarea
                  name="description"
                  id="description"
                  class="form-control"
                  cols="50"
                  rows="5"
                  v-model="store.description"
                  :class="{ 'pe-none opacity-50': valid }"
                ></textarea>
                <small id="descriptionerror"></small>
              </div>
            </div>
          </div>
          
          <div class="mx-auto col-12 col-sm-10 col-lg-6" style="max-height: 600px">
            <div class="bg-light rounded-2 overflow-y-scroll" style="height: 100%">
              <h1 class="text-center">
                {{ store.actualrestaurant.restaurant?.activity_name }}
              </h1>
              <div
                v-for="(plate, index) in store.listplatelocalstorage"
                :key="index"
                class="overflow-y-scroll"
              >
                <CartCard :plate="plate" :verified="valid"/>
              </div>
            </div>
          </div>
        </div>

        <button class="btn-validazione mt-3" v-if="!valid" @click="validation()">
          Clicca per validare i dati
        </button>

        <div class="col-12 mb-5" :class="valid == true ? 'd-bock' : 'd-none'">
          <div class="d-flex flex-column align-items-center">
            <div id="dropin-container"></div>

            <button v-if="!paymentLoader" class="btn btn-warning" id="submit-button" @click="payBtn">
              Paga ora
            </button>
            <div v-else>
              <Loader/>
            </div>

          </div>
        </div>

       
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/sass/partials/variables' as *;
.container-fluid {
  background-color: $light-gray;
}
.page-bg {
  background-color: $dark-navy-blue;
}

small {
  color: red;
  height: 2em;
}

.btn-validazione {
  border: none;
  background-color: $orange;
  border-radius: 5px;
  width: 50%;
  margin: 0 auto;
  padding-inline: 15px;
  padding-block: 5px;
  font-size: 20px;
  font-weight: bold;
}

.btn-validazione:hover {
  color: white;
  transition-duration: 0.4s;
}

#description {
  resize: none;
}
.validated-inputs {
  background-color: lightgray;
}
</style>
