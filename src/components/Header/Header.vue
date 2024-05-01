<script>
import CartButton from './CartButton.vue'
    export default {
        name: "Header",
        components: {
        CartButton
    }
    }
</script>

<template>
    
    <div id="app" class="position-fixed w-100 position-relative">
        <nav class="navbar navbar-expand-md navbar-light bg-nav shadow-sm ">
            <div class="container">
                <router-link :to="{ name: 'home' }">
                    <a class="navbar-brand d-flex align-items-center" href="">
                    <div>
                    <img width="100" src="/img/deliveboo-logo.png" alt="deliveboo-logo">
                    </div>
                </a>
                        </router-link>
                


                <!-- logo hamburger menu -->
                <button class="navbar-toggler px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                    <img width="50" src="/img/hamburger_menu.png" alt="burger-menu">
                </button>

                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav align-items-center ms-md-auto gap-4 py-3 py-md-0">
                        <li class="nav-item">
                            <!-- porta a laravel -->
                            <a class="link-orange" href="http://127.0.0.1:8000/login">Accedi</a>
                            
                        </li>
                        
                        <li class="nav-item">
                            <!-- porta a laravel -->
                            <a class="link-orange" href="http://127.0.0.1:8000">Registrati</a>
                        </li>
                        
                            <CartButton v-if="$route.path !== '/checkout'"/>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </div>


  


</template>








<style lang="scss" scoped>
    .bg-nav{
        background-color: #03071E ;
    }

    #app{
        z-index: 100!important;
    }



</style>