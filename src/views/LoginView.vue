<template>

    <div class="login" col="12" style="margin-left: 54%;">
   
    <img src="../assets/logo3.png" alt="image-logo" style="margin-left: 19%;">
  
      <form class="form">
        <!-- Email input -->
        <div class="form-outline mb-4">
          <input v-model="userName" type="text" class="form-control" id="usuario" placeholder="User" />
        </div>
  
        <!-- Password input -->
        <div class="form-outline mb-4">
          <input type="password" v-model="password" id="password" class="form-control" placeholder="password"/>
        </div>
  
        <p v-if="error" class="error">Correo o contraseña incorrectos.</p>
        <hr>
        <button v-on:click="loginUser()" type="button" class="btn btn-primary btn-block mb-4"
          style="background: rgb(227, 91, 146); border-radius: 2rem; border-color: rgb(227, 91, 146)">
          Ingresar
        </button>
  
        <!-- Register buttons -->
        <div class="text-center">
          <p><router-link to="/register" style="color: rgb(227, 91, 146)">Create an account</router-link></p>
          <p><router-link to="/register" style="color: rgb(227, 91, 146)">Forgot your password</router-link></p>
        </div>
      </form>
    </div>
 
  

</template>

<script>
 import axios from 'axios';
export default {
  name: "loginView",
  created() {},
  data() {
    return {
      userName:'',
      inactivity:null,
      loggedUser:false,
      password:'',
      error:false

    };
  },
  props: {},
  methods: {
    async loginUser(){
      try {
          let response = await axios.post('https://healthia.adaptable.app/users/login',
            {
                userName: this.userName,
                 password: this.password,
             });
          if (response.status == 200 || response.status == 201){
          await this.$router.push("/home");
         }else{
          this.error = true
        }
         console.log(response)
      } catch (e){
        this.error = true
        setTimeout(() => {
        this.error = null; 
      }, 3000);
        console.log(e)
      }
    
    },
    
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