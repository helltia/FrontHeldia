<template>
  <div class="login-container">
    <img src="../assets/logo3.png" alt="image-logo" class="logo" />

    <form class="form">
      <!-- Email input -->
      <div class="form-group">
       
        <input v-model="username" type="text" class="form-control" id="usuario" placeholder="Enter your username" />
      </div>

      <!-- Password input -->
      <div class="form-group">
        <input type="password" v-model="password" id="password" class="form-control" placeholder="Enter your password"/>
      </div>

      <p v-if="error" class="error">Correo o contraseña incorrectos.</p>
      <hr>
      <button v-on:click="loginUser" type="button" class="btn btn-primary "
          style="background:rgb(227,91,146);border-radius:2rem;border-color:rgb(201, 79, 128)">
          Enter
        </button>

      <!-- Register buttons -->
      <div class="text-center">
        <p><router-link to="/register" class="link">Create an account</router-link></p>
        <p><router-link to="/register" class="link">Forgot your password</router-link></p>
      </div>
    </form>
    <img src="../assets/imageBack.png" alt="background-image" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -2;">
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "loginView",
  data() {
    return {
      username: '',
      inactivity: null,
      loggedUser: false,
      password: '',
      error: false
    };
  },
  methods: {
    async loginUser() {
      try {
        let response = await axios.post('https://healthia.adaptable.app/users/login', {
          username: this.username,
          password: this.password,
        });
        if (response.status == 200 || response.status == 201) {
          await this.$router.push("/home");
        } else {
          this.error = true;
        }
        console.log(response);
      } catch (e) {
        this.error = true;
        setTimeout(() => {
          this.error = null;
        }, 3000);
        console.log(e);
      }
    },

    iniciarSesion() {
      if (this.userName.trim() !== '') {
        localStorage.setItem('usuario', this.username);
        this.inactividadTimeout = setTimeout(() => {
          this.cerrarSesion();
        }, 30 * 60 * 1000);
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center the content */
  height: 100vh; /* Take the full height of the viewport */
  width: 150vh;
}

.logo {
  margin-bottom: 1rem;
  max-width: 100%;
}

.form {
  margin: 1rem auto; /* Adjusted margin */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 400px;
  background: white;
  border-radius: 20px;
  padding: 12px;
}

.form-group {
  margin-bottom: 1rem;
  width: 100%; /* Full width */
}

.form-label {
  margin-bottom: 0.5rem;
}

.form-control {
  padding: 10px 15px;

  color: black;
  border-radius: 4.5rem;
  width: 100%; /* Full width */
  background-color: transparent; /* Remove background color from placeholder */
}

.error {
  font-size: 1rem;
}

.btn-primary {
  background: rgb(229, 109, 157);
  border-radius: 2rem;
  border-color: transparent;
  transition: none; /* Disable button color transition */
}

.link {
  color: rgb(221, 10, 95);
  border: none;
}
.btn-primary:focus {
  background-color: rgb(229, 109, 157);
}
@media screen and (max-width: 600px) {
  .form {
    width: 90%;
  }
}
</style>
