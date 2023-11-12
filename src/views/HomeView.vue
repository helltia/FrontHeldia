<template>
  <div class="container-fluid vh-100 d-flex align-items-center justify-content-center">
    <img src="../assets/imageBack.png" alt="background-image" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -2;">

    <!-- Contenedor para el texto y el título -->
    <div class="text-center">
      <h1 class="display-4">Descarga nuestra App!</h1>
      <blockquote class="blockquote">
        <p class="lead">A veces los segundos pueden ser la diferencia entre la vida y la muerte, <br>por eso HealthIA es la app de primeros auxilios que no puede faltar en tus aplicaciones</p>
      </blockquote>
      
      <a href="https://drive.google.com/file/d/175Tyevsjh9QMYIJlCRekyxa_BLNscJGm/view?usp=sharing" class="btn btn-primary btn-block mb-4" style="font-size: 1.25rem; background: rgb(227, 91, 146); border-radius: 2rem; border-color: rgb(227, 91, 146)">
        Probar Health IA
      </a>
      
    </div>

    <!-- Contenedor para la imagen -->
    <div class="align-items">
      <img src="../assets/phonoqr.png" alt="image" class="phone-image img-fluid mt-4" style="max-width: 170%; height: auto;margin-left:103%">
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style>
  .lead{
   font-size: xx-large; 
  }
</style>
