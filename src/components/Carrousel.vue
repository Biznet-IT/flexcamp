<template>
    <div class="h-50">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block" src="@/img/wellcampimage1.jpg" alt="First slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-75" src="@/img/wellcampimage2.jpg" alt="Second slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-75" src="@/img/wellcampimage3.jpg" alt="Third slide">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    </div>
</template>

<style>
.carousel-item img {
    height: 30vh;
    width: 100%;
    object-fit: cover;
}
</style>

<script>
export default {
    name: 'CarrouselComp'
}
</script>