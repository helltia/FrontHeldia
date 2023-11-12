<template>

  <div class="container-fluid">
    <!-- Contenedor del historial del chat -->
    <div class="chat-history" style="background:white ">
      <!-- Historial del chat -->
      <div class="row">
        <div class="col-md-12">
          <!-- Aquí irán los mensajes del chat -->
        </div>
      </div>
    </div>
  
    <!-- Cuadro de entrada del mensaje -->
    <div class="row input-row" style="background: transparent;">
      <div class="col-md-8">
        <input type="text" class="form-control input-message" placeholder="Escribe tu mensaje..." style="border: radius 2.25em;">
      </div>
      <div class="col-md-4">
        <button class="btn btn-primary btn-block">Enviar</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "chatView",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {
    async message(){
      
    }
  },
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
  border-radius: 2rem;
}

.input-message {
  border-radius: 0; /* Bordes cuadrados */
  width: 100%;
}



</style>
