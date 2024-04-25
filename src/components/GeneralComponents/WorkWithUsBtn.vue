<script>
export default {
    name: 'WorkWithUsBtn'
}
</script>


<template>
<a href="http://127.0.0.1:8000/" class="Btn text-decoration-none">
    <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ffffff" d="M280 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h57.7l16.4 30.3L256 192l-45.3-45.3c-12-12-28.3-18.7-45.3-18.7H64c-17.7 0-32 14.3-32 32v32h96c88.4 0 160 71.6 160 160c0 11-1.1 21.7-3.2 32h70.4c-2.1-10.3-3.2-21-3.2-32c0-52.2 25-98.6 63.7-127.8l15.4 28.6C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L418.2 128H480c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H459.6c-7.5 0-14.7 2.6-20.5 7.4L391.7 78.9l-14-26c-7-12.9-20.5-21-35.2-21H280zM462.7 311.2l28.2 52.2c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-28.2-52.2c2.3-.3 4.7-.4 7.1-.4c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64c0-15.5 5.5-29.7 14.7-40.8zM187.3 376c-9.5 23.5-32.5 40-59.3 40c-35.3 0-64-28.7-64-64s28.7-64 64-64c26.9 0 49.9 16.5 59.3 40h66.4C242.5 268.8 190.5 224 128 224C57.3 224 0 281.3 0 352s57.3 128 128 128c62.5 0 114.5-44.8 125.8-104H187.3zM128 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>

    <svg class="svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>

    <svg class="svg3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#8E8E8E" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>

    <svg class="svg4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#8E8E8E" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>

    <svg class="svg5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#8E8E8E" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>

    <span id="Lavora-con-noi">
        Lavora con noi 
    </span>
</a>
</template>


<style lang="scss" scoped>
    .Btn {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border: none;
        padding: 0px 20px;
        background-color: #f58115;
        color: white;
        font-weight: 500;
        cursor: pointer;
        border-radius: 10px;
        transition-duration: .3s;
        overflow: hidden;
        padding-block: 5px;
        padding-inline: 40px;
        font-weight: bold;
        font-size: 32px;
    }
  
    #Lavora-con-noi{
        padding-left: 70px;
    }

    .svg2{
        top: 20px;
        display: none;
    }

    .svg,
    .svg2,
    .svg3,
    .svg4,
    .svg5{
        width: 30px;
        position: absolute;
        right: 100;
        margin-right: 20px;
        fill: white;
        transition-duration: .3s;
    }
    

    .svg3,
    .svg4,
    .svg5{
        width: 8px;
        top: 40%;
        display: none;
        opacity: 100%;
    }

    .Btn:hover {
        color: transparent;
    }
  
    .Btn:hover svg {
        right: 10%;
        margin: 0;
        padding: 0;
        border: none;
        transition-duration: .2s;
    }

    .Btn:hover .svg3 {
        right: 22%;
    }

    .Btn:hover .svg4 {
        right: 30%;
        top: 30%;
    }

    .Btn:hover .svg5 {
        right: 38%;
        top: 40%;
    }

    .Btn:hover svg  {
        animation: bounce 0.3s infinite alternate;
    }


    .Btn:hover .svg3  {
        animation: bouncedot 0.7s infinite alternate;
    }

    .Btn:hover .svg4  {
        animation: bouncedot 0.755s infinite alternate;
    }

    .Btn:hover .svg5  {
        animation: bouncedot 0.78s infinite alternate;
    }
    
    @keyframes bounce {
        0% {
        transform: translateY(0);
        }
        100% {
        transform: translateY(-2px);
        }
    }

    @keyframes bouncedot {
        0% {
        transform: translateY(0);
        width: 0px;
        /* opacity: 0%; */
        }
        50% {
            transform: translateY(-1);
            width: 10px;
            /* opacity: 100%; */
        }
        100% {
        transform: translateY(-2px);
        width: 0px;
        /* opacity: 0%; */
        }
    }

    .Btn:hover .svg2 {
        display: inline-block;
    }

    .Btn:hover .svg3 {
        display: inline-block;
    }

    .Btn:hover .svg4 {
        display: inline-block;
    }

    .Btn:hover .svg5 {
        display: inline-block;
    }

    .Btn:hover .svg2 {
        animation: stripes 0.5s linear infinite ;
    }

    @keyframes stripes {
        0% {
        transform: translateX(2000%);
        }
        100% {
        transform: translateX(-2000%);
        }
    }
  
    .Btn:active {
        transform: translate(3px , 3px);
        transition-duration: .3s;
    }

    @media screen and (max-width: 400px) {
        .Btn {
            padding-block: 5px;
            padding-inline: 20px;
            font-size: 18px;
        }
    }

</style>