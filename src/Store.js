import { reactive } from "vue";
import axios from 'axios'

export const store = reactive({
     type:  [],
     showfooter:true,
     listplatelocalstorage:[],
     active_typologies: [],
     filtered_restaurants:[],
     restaurantLoading: false,
     typesLoading: false,
});