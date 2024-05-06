<template>
  <div class="home">
    <CarrouselComp/>
    
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="card" style="width: 18rem;">


    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CarrouselComp from '@/components/Carrousel.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    CarrouselComp
  }
}
</script>
