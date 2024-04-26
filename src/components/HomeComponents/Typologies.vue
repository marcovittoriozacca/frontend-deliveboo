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
            
            if (store.active_typologies.includes(slug)) {
                store.active_typologies.splice(store.active_typologies.indexOf(slug), 1);
            } else {
                store.active_typologies.push(slug);
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
                <div @click="activeTypologies(type.slug)" class="orange-border rounded-5" :class="store.active_typologies.includes(type.slug)? 'active-card' : '' ">
                    <div class="rounded rounded-4">
                        <div class="position-relative">
                            <figure class="mb-0 m-0">
                                <img width="100" class="dish-img" :src="type.image" :alt="type.slug">
                            </figure>
                            <div class="opacity-bg-black rounded px-3 py-1 position-absolute top-50 start-50 translate-middle">
                                <p class="mb-0 text-uppercase">{{ type.slug }}</p>
                            </div>
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
        object-fit: contain;
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
    .opacity-bg-black{
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
    }
    .active-card{
        transition: .1s all linear;
        transform: scale(110%);
        border: 5px solid $orange;
        background-color: rgba(107, 107, 107, 0.794);

        .opacity-bg-black{
        background-color: rgba(0, 0, 0, 1);
        color: $orange;
            p::after{
                margin-left: 5px;
                content: '\2713';
            }
        }
    }


</style>