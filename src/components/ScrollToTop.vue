<script>
export default {
    name:'ScrollToTop',
    methods:{
        scroll(){
            let scrollToTop = document.getElementById('scrollToTop');
            if(scrollToTop){
                // dopo quanto scroll appare il link
                if (window.scrollY > 400) {       
                    scrollToTop.style.display = 'block';
                } else {
                    scrollToTop.style.display = 'none';
                }
            }
        },
    },
    mounted(){
        window.addEventListener('scroll', this.scroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.scroll);
    },
}

</script>

<template>
    
    <a href="#top" id="scrollToTop">
        <i class="fa-solid fa-arrow-up" ></i>
    </a>

</template>

<style lang="scss" scoped>

#scrollToTop {
        display: none; 
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: white;
        padding: 5px 15px; 
        border-radius: 50%; 
        text-decoration: none; 
        transition: opacity 0.4s;
        z-index: 5;
        i{
            color: black;
        }
    }

    #scrollToTop:hover {
        scale: 120%;
    }

    .fa-arrow-up{
        padding-block: 8px;
    }
    
</style>