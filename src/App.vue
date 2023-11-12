<template>
  <div>
    <Navbar class="navbar navbar-expand-lg navbar-light fixed-top" />
    <router-view />
  </div>
 
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</template>

<style>

</style>

<script>
import Navbar from '@/components/Navbar.vue'; // Ajusta la ruta según tu estructura de carpetas

export default {
  components: {
    Navbar,
  },
};
</script>

