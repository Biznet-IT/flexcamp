<template>
  <div class="home">
    <CarrouselComp/>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import CarrouselComp from '@/components/Carrousel.vue'

export default {
  name: 'HomeView',
  components: {
    
    CarrouselComp
  }
}
</script>
