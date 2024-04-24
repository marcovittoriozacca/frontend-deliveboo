<script>
export default {
    name: 'InfoCard',

    data() {
        return {
            cards: [
                {
                    image: '/img/order.svg',
                    alt: 'order-svg',
                    description: 'Ordina comodamente i tuoi piatti preferiti da casa. Consegna veloce e sicura, per un pasto delizioso in pochi clic.'
                },
                {
                    image: '/img/ingredients.svg',
                    alt: 'ingredients-svg',
                    description: 'Scopri piatti freschi e autentici, preparati con i migliori ingredienti di stagione.'
                },
                {
                    image: '/img/delivery.svg',
                    alt: 'delivery-svg',
                    description: 'Consegna rapida e sicura, ovunque tu sia. Scegli i tuoi piatti preferiti e lascia che noi te li portiamo.'
                },
                {
                    image: '/img/game.svg',
                    alt: 'game-svg',
                    description: 'Goditi il divertimento a casa mentre noi ci occupiamo del resto! Scegli i tuoi piatti preferiti per un momento di puro piacere culinario.'
                },
            ]
        }
    },
    
}
</script>

<template>
<div class="container">
    <div class="row row-gap-3">
        <div class="col-12 col-md-6 col-lg-3" v-for="(card, index) in cards" :key="index">
            <div class="bg-white rounded-4 p-3 h-100">
                <div class="h-100">
                    <figure class="mb-3">
                        <img :src="card.image" :alt="card.alt">
                    </figure>
                    <div class="mt-auto" >
                        <p>{{ card.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<style lang="scss" scoped>
img{
    width: 100%;
    aspect-ratio: 1;
}
</style>