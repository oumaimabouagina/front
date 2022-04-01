<template>

  <div id="app">
    <Header></Header>
    
    

    <!-- appel routing  -->
    <router-view></router-view>  
    <Footer></Footer>
    
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: { Header,Footer },
    name : 'home-c',

  //components: { Footer },
   // name : 'home-cp', 
  
}
</script>


