<template>

  <div class="container-fluid">
    <!-- Contenedor del historial del chat -->
    <div class="chat-history" style="background:white ">
      <!-- Historial del chat -->
      <div class="row">
        <div class="col-md-12">
          <ul class="chat-list">
            <li v-for="(message, index) in chat" :key="index" :class="{ 'user1': message.user === 'user1', 'user2': message.user === 'user2' }">
              <span class="user">{{ message.user }}:</span> {{ message.message }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  
    <!-- Cuadro de entrada del mensaje -->
    <div class="row input-row" style="background: transparent;">
      <div class="col-md-8">
          <input type="text" placeholder="Escribe tu mensaje..." id="input-text" class="form-control" style="border-radius: 1.25em; width:120%">
      </div>
      <div class="col-md-2">
          <input type="file" class="form-control" style="border-radius: 2.25em;">
      </div>
      <div class="col-md-2">
          <button type="button" class="btn btn-primary btn-block mb-4" style="background: rgb(227, 91, 146); border-radius: 2rem; border-color: rgb(227, 91, 146);">
              Ingresar
          </button>
      </div>
  </div>
  </div>

</template>

<script>
export default {
  name: "chatView",
  created() {},
  data() {
    return {
      chat:[
        {
          user:'user1'
        ,  message:'hola'
      },
      {
          user:'BOT'
        ,  message:'Hola mucho gusto'
      },{
        user:'user1',
        message:'el gusto es mio'
      },
      {
          user:'BOT'
        ,  message:'adios'
      },
      {
        user:'user1',
        message:'Nos vemos'
      }
      ]
    };
  },
  props: {},
  methods: {
   
  },
};
</script>

<style >
.chat-history {
  background-color: #e9ecef;
  padding: 15px;
  border-radius: 10px;
  overflow-y: auto;
  height: 300px;
  width: 291%;
}
button{
  width: 100%;
}

input{
  width: 110%;
}

.input-message {
  border-radius: 0;
  width: 80%;
  margin-left: 33%;
}

.chat-list {
  list-style-type: none;
  padding: 0;
  max-width: 600px; /* Ajusta el ancho según tus preferencias */
}

.chat-list li {
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 10px;
  word-wrap: break-word;
}

.user1 {
  background-color:pink;
  color: #fff;
}

.BOT {
  background-color: #98FB98;
  color: #000;
}

.user {
  font-weight: bold;
  margin-right: 5px;
}
.fotm-control{
  padding: 1.375rem 1.75rem;
  border-radius: 5.25rem;
}

</style>
