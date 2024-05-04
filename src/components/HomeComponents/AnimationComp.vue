<script>
import AOS from 'aos';
export default {
  data() {
    return {
      words: ["Cena", "con", "gli", "amici?", "Cosa", "mangio", "oggi?", "Nessun", "Problema", "c'è", "Deliveboo"]
    };
  },
  mounted() {
    this.$nextTick(() => {
      AOS.refresh(); // Aggiorna AOS dopo il rendering del componente
    });
  }
};
</script>

<template>
    <div class="animation-container text-center">
      <div class="row">
        <div class="col-md-6 signika-font">
          <h1 class="animated-word signika-font" data-aos="fade-up" data-aos-delay="0">Cena con gli Amici?</h1>
          <h1 class="animated-word signika-font" data-aos="fade-up" data-aos-delay="1000">Cosa mangio oggi?</h1>
          <h1 class="animated-word signika-font" data-aos="fade-up" data-aos-delay="2000">Nessun problema, c'è...</h1>
        </div>
        <div class="col-md-6">
          <figure class="mb-0">
            <img src="/img/deliveboo-logo.png" alt="Immagine Deliveboo" class="animated-image img-fluid" data-aos="fade-up" data-aos-delay="3000">
          </figure>
        </div>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .animation-container {
    text-align: left; 
  }
  
  .animated-word {
    color: white;
    font-size: 36px; 
    line-height: 1.5; 
  }
  
  .signika-font {
    font-family: "Signika", sans-serif;
  }

  </style>
  