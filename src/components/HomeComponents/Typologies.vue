<script>
import { Carousel, Slide } from 'vue3-carousel'
import { store } from '../../Store';
export default {
    name: 'Typologies',

    components: {
        Carousel,
        Slide,
    },

    data() {
        return {
            store,
            currentSlide: 0,
            breakpoints: {
                0:{
                    itemsToShow: 1,
                    snapAlign: "center",
                    itemsToScroll: 1,
                },
                350:{
                    itemsToShow: 1.8,
                    snapAlign: "center",
                    itemsToScroll: 1,
                },
                500:{
                    itemsToShow: 3,
                    snapAlign: "center",
                    itemsToScroll: 1,
                },
				// 700px and up
				700: {
					itemsToShow: 3.5,
					snapAlign: "center",
                    itemsToScroll: 3.5,
				},
				800: {
					itemsToShow: 4,
					snapAlign: "center",
                    itemsToScroll: 3.5,
				},
				900: {
					itemsToShow: 5,
					snapAlign: "center",
                    itemsToScroll: 4,
				},
				// 1024 and up
				1024: {
					itemsToShow: 5,
					snapAlign: "start"
				},
				// 1024 and up
				1200: {
					itemsToShow: 7,
					snapAlign: "center",
                    itemsToScroll: 6,
				}
			}

        }

    },

    methods: {
        next() {
            this.$refs.carousel.next()
        },
        prev() {
            this.$refs.carousel.prev()
        },

        activeTypologies(slug) {
                //funzione che carica e rimuove una tipologia dall'array al click della corrispettiva card
                const index = store.active_typologies.indexOf(slug);
                //quando un elemento NON è presente, l'index restituito dalla funzione indexOf è sempre -1, quindi eseguiamo un controllo su quel parametro
                if (index !== -1) {
                    store.active_typologies.splice(index, 1); // Rimuove l'elemento
                } else {
                    store.active_typologies.push(slug); // Aggiunge l'elemento
                }
                //se l'elemento non esiste nel nostro array lo pushiamo, altrimenti lo rimuoviamo
            },
    },
}
</script>


<template>

<div class="position-relative">
    <Carousel ref="carousel" v-model="currentSlide" :breakpoints="breakpoints" :items-to-show="5" :items-to-scroll="4" :wrap-around="true" class="carosello-blu" :i18n="{
        iconArrowLeft:'Scorri verso sinistra',
        iconArrowRight:'Scorri verso destra'
    }">
        <Slide v-for="(type, index) in store.type" :key="type.id">
            <div class="carousel__item p-3">
                <!-- intera card, function -->
                <div @click="activeTypologies(type.slug)" class="orange-border rounded-5 p-4" :class="store.active_typologies.includes(type.slug)? 'active-card' : '' ">
                    <div class="d-flex flex-column row-gap-3 rounded rounded-4">
                        <figure class="mb-0 m-0 my-max-h">
                            <img width="100" class="dish-img" :src="type.image" :alt="type.slug">
                        </figure>
                        <div class="orange-bg rounded-pill px-2 py-1 fit-content mx-auto">
                            <p class="text-white mb-0 text-uppercase">{{ type.slug }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>    
    </Carousel>
    <button class="rounded position-absolute carousel-btn" id="prev" @click="prev">
        <i class="fas fa-arrow-left-long"></i>
    </button>
    <button class=" rounded position-absolute carousel-btn" id="next" @click="next">
        <i class="fas fa-arrow-right-long"></i>
    </button>
    
</div>

</template>


<style lang="scss" scoped>
@use '../../assets/sass/partials/variables' as *;
.my-max-h{
    max-height: 270px;
}
    .carosello-blu{
        background: #03071e;
    }
    .custom-type-col{
        width: calc(100% / 10);
    }
    .dish-img{
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
    }
    .fit-content{
        width: fit-content;
    }
    .orange-bg{
        background-color: $base-orange;
    }
    .orange-border{
        border: 1px solid $base-orange;
    }
    .carousel-btn{
        padding: 5px 10px;
        border: none;
        top: 50%;
        transform: translate(-50%);
        background-color: $orange;
    }

    #prev{
        left: 20px;
    }
    #next{
        right: 0;
    }

    .active-card{
        transition: .1s all linear;
        transform: scale(105%);
        border: 2px solid $orange;
        background-color: lightgray;
    }


</style>