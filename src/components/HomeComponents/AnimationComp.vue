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
    <div class="animation-container">
      <div class="row">
        <div class="col-md-6 gladiola-font">
          <h1 class="animated-word gladiola-font" data-aos="fade-up" data-aos-delay="0">Cena con gli Amici?</h1>
          <h1 class="animated-word gladiola-font" data-aos="fade-up" data-aos-delay="1500">Cosa mangio oggi?</h1>
          <h1 class="animated-word gladiola-font" data-aos="fade-up" data-aos-delay="3000">Nessun Problema c'è</h1>
        </div>
        <div class="col-md-6 text-center">
          <img src="/img/deliveboo-logo.png" alt="Immagine Deliveboo" class="animated-image" data-aos="fade-up" data-aos-delay="5000">
        </div>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .animation-container {
    padding-top: 50px; 
    text-align: left; 
  }
  
  .animated-word {
    color: white;
    font-size: 36px; 
    line-height: 1.5; 
  }
  
  .gladiola-font {
    font-family: 'Gladiola', cursive; 
  }
  </style>
  