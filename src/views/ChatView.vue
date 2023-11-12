<template>
  <!-- Contenedor del historial del chat -->
  <div class="container-fluid chat-container">
    <ul class="chat-list">
      <li v-for="(message, index) in chat" :key="index" :class="getMessageClasses(message.user)">
        <div class="message-container">
           <span class="user">{{ message.user }}:</span> {{ message.message }}
        </div>
      </li>
    </ul>
    <div class="input-group mb-3" style="width: 320%; margin-right: 128%;">
      <input type="text" v-model="newMessage" class="form-control input-message" placeholder="Escribe tu mensaje...">
      <div class="input-group-append">
        <button class="btn btn-primary" @click="sendMessage">Enviar</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: "chatView",
  data() {
    return {
      chat: [
        { user: 'user1', message: 'hola' },
        { user: 'BOT', message: 'Hola mucho gusto' },
        { user: 'user1', message: 'el gusto es mio' },
        { user: 'BOT', message: 'adios' },
        { user: 'user1', message: 'Nos vemos' },
      ],
      newMessage: '', // Agregamos la propiedad newMessage
    };
  },
  methods: {
    async fetchMessages() {
      try {
        const response = await axios.get('https://healthia.adaptable.app/users/messages/a');
        if (response.status === 200) {
          this.chat = response.data;
        }
      } catch (error) {
        console.error('Error al obtener mensajes:', error);
      }
    },

    async sendMessage() {
      try {
        const response = await axios.post('https://healthia.adaptable.app/users/sendMessage', {
          user: 'user1',
          message: this.newMessage,
        });
        if (response.status === 201) {
          await this.fetchMessages();
          this.newMessage = '';
        }
      } catch (error) {
        console.error('Error al enviar mensaje:', error);
        // Muestra un mensaje de error al usuario
      }
    },

    getMessageClasses(user) {
      return {
        'user1': user === 'user1',
        'BOT': user === 'BOT',
        'other-user': user !== 'user1' && user !== 'BOT',
      };
    },
  },
  created() {
    this.fetchMessages();
  },
};
</script>
<style>

/* Estilos personalizados para mejorar el diseño y hacerlo responsive */
body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0;
}

.chat-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 10%;
}



.input-group {
  width: 80%;
}

.input-message {
  border-radius: 0; /* Bordes cuadrados para el input */
}
.chat-list li {
  margin-bottom: 35px; /* Separación entre mensajes */
  padding: 6px; /* Añade espacio dentro de los mensajes */
  border-radius: 16px;
}
.chat-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Estilos para hacer el chat responsive en pantallas pequeñas */
/* Estilos para hacer el chat responsive en pantallas pequeñas */
@media (max-width: 768px) {
  .chat-container {
    margin-left: 5%;
    margin-right: 5%;
  }
}

.message-container {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

.user1 {
  background-color: #6c757d;
  color: white;
}

.BOT {
  background-color: rgb(241, 170, 249);
  color: black;
}

.other-user {
  color: #6c757d; /* Estilo para otros usuarios */
}




</style>