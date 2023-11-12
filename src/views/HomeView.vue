<template>

  <div class="container-fluid">
    <!-- Imagen phone.png al fondo a la derecha -->
    <img src="src/assets/phonoqr.png" alt="image" style="position: absolute; bottom: 33px; right: 20rem;height:80%">
    <h1>Descarga nuestra APP</h1>
    <blockquote>
      <p>A veces los segundos pueden ser la diferencia entre la vida y la muerte, <br>por eso HelthIA es la app de primeros auxilios
         que no puede faltar en tus aplicaciones</p>
    </blockquote>
  
  <button  type="button" class="btn btn-primary btn-block mb-4"
          style="background:rgb(227,91,146);border-radius:2rem;border-color:rgb(227, 91, 146)">
          Probar Health IA
        </button>
  
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

<style >
.chat-history {
  background-color: #e9ecef; /* Color de fondo del historial del chat */
  padding: 15px;
  border-radius: 10px;
  overflow-y: auto; /* Hace que el historial tenga un desplazamiento vertical si hay demasiados mensajes */
  max-height: 300px; 
}

.input-row {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f8f9fa; /* Puedes ajustar el color de fondo según tu preferencia */
  padding: 10px;
}

.input-message {
  border-radius: 0; /* Bordes cuadrados */
  width: 100%;
}



</style>
