import { reactive } from "vue";
import axios from 'axios'

export const store = reactive({
     type:  [],
     showfooter:true,
     // in listplatelocalstorage c'è la lista di piatti che si aggiorna con i dati presenti nel local storage al momento del click sull'icona del carrello
     listplatelocalstorage:[],
     onlyIndexAccepted: '',
     Sospeso: false,
     active_typologies: [],
     filtered_restaurants:[],
     restaurantLoading: false,
     typesLoading: false,
     alertbox:false,
     subtotal_price: 0,
});