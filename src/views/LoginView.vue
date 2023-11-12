<template>


  <div class="login" col="12" style=" margin-left: 54%;">
    <img src="../assets/logo3.png" alt="image-logo" style="margin-left:19%">
    <form class="form">
      <!-- Email input -->
      <div class="form-outline mb-4">
        <input v-model="userName" type="text" class="form-control" id="usuario" placeholder="User" />

      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <input type="password" v-model="password" id="password" class="form-control" placeholder="password"/>

      </div>

      <!-- 2 column grid layout for inline styling -->
      <div class="row mb-4">

      </div>

      <!-- Submit button -->
      <p v-if="error" class="error">Correo o contraseña incorrectos.</p>
        <button v-on:click="confirmUser" type="button" class="btn btn-primary btn-block mb-4"
          style="background:rgb(227,91,146);border-radius:2rem;border-color:rgb(227, 91, 146)">
          Ingresar
        </button>

      <!-- Register buttons -->
      <div class="text-center">
        <p><router-link to="/register" style="color:rgb(227, 91, 146)">Create an account</router-link></p>
       <p><router-link to="/register" style="color:rgb(227, 91, 146)">Forgot your password</router-link></p>

      </div>
    </form>

  </div>







</template>

<script>
export default {
  name: "loginView",
  created() {},
  data() {
    return {
      userName:'',
      inactivity:null,
      loggedUser:false

    };
  },
  props: {},
  methods: {
    iniciarSesion() {
      if (this.userName.trim() !== '') {
        localStorage.setItem('usuario', this.userName);
        this.inactividadTimeout = setTimeout(() => {
          this.cerrarSesion();
        }, 30 * 60 * 1000);
      }
    },


  },

};
</script>
<style>


body {
  padding: 1rem;
  background-image: url("src/assets/njnklj.png");
  margin-left:50%
}
.title {
  text-align: center;
  color: rgb(211, 90, 186);
  font-family: sans-serif;


}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: white;
  border-radius: 20px;
  padding: 12px;

}

.form-control{
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid black;
  color: black;
  border-radius: 4.5rem;
}
.error{
    font-size: 1rem;
}
input{
  border-radius: 4.25rem;
}

strong{
  font-size: xxx-large;
}
</style>
