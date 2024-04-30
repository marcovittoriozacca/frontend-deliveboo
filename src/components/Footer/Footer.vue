<script>
    export default {
        name: "Footer"
    }
</script>


<template>

<!--Inizio Ul Footer -->
<div class="bg-blu">
    <div class="container pb-5">
        <div class="d-flex flex-column flex-md-row align-items-md-stretch align-items-center text-center gap-3 justify-content-between pt-5">
            <div>
                <ul>
                    <li class="titleLi">
                        <span>Servizio clienti</span>
                    </li>
                    <li class="text-capitalize">
                        <a href="#">domande frequenti</a>
                    </li>
                    <li class="text-capitalize">
                        <a href="http://127.0.0.1:8000/login">accedi</a>
                    </li>
                    <li class="text-capitalize">
                        <a href="http://127.0.0.1:8000">registrati</a>
                    </li>
                    <li class="text-capitalize">
                        <a href="#">scarica l'app</a>
                    </li>
                    <li class="text-capitalize">
                        <a href="#">segnala un problema</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li class="titleLi">
                        <span>Scopri di più su di noi</span>
                    </li>
                    <li class="text-capitalize">
                        <a href="#">la nostra storia</a>
                    </li>
                    <li class="text-capitalize">
                        <a href="#">il nostro impegno per la qualità</a>
                    </li>
                    <li class="text-capitalize">
                        <a href="#">i nostri valori</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li class="titleLi">
                        <span>Il nostro impegno</span>
                    </li>
                    <li class="text-capitalize">
                        <a href="#">sostenibilità</a>
                    </li>
                    <li class="text-capitalize">
                        <a href="#">modalità di consegna</a>
                    </li>
                    <li class="text-capitalize">
                        <a href="#">carriera e opportunità</a>
                    </li>
                    <li class="text-capitalize">
                        <a href="#">Promozioni attive</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li class="titleLi">
                        <span>Programmi</span>
                    </li>
                    <li class="text-capitalize">
                        <a href="#">Programma fedeltà</a>
                    </li>
                    <li class="text-capitalize">
                        <a href="#">Recensioni dei Clienti</a>
                    </li>
                    <li class="text-capitalize">
                        <a href="#">Orari di apertura</a>
                    </li>
                    <li class="text-capitalize">
                        <a href="#">guida alla sicurezza alimentare</a>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</div>


</template>

<style lang="scss" scoped>
    .bg-blu{
        background-color: #03071E ;
    }
    ul{
        list-style-type: none;
    }

    ul>li>a{
        text-decoration: none;
        color: rgb(255, 255, 255, 0.5);
    }

    .titleLi{
        color: white;
        font-weight: bold;
    }

    @media screen and (min-width: 1921px) {
        .bg-blu{
            height: 60vh;
        }
    }

    
</style>