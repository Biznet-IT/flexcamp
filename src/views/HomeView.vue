<template>
  <div class="home">
    <CarrouselComp/>
    
    <div>
      FlexCamp es una solución pionera en alojamiento temporal, especialmente diseñada para industrias como la minería, la construcción y situaciones de emergencia. Nuestro enfoque se centra en ofrecer campamentos de casas móviles que combinan eficiencia operativa con responsabilidad ecológica. Concebidos para adaptarse rápidamente a variadas exigencias operativas, nuestros campamentos destacan por su capacidad de instalación veloz y autónoma de procesos burocráticos extensos.

    </div>
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
