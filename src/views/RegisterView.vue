<template>
  <div class="login" col="12" style=" margin-left: 54%;">
    <img src="../assets/logo3.png" alt="image-logo" style="margin-left:19%">
    <form class="form">
      <!-- Email input -->
      <div class="form-outline mb-4">
        <input v-model="userName" type="text" class="form-control" id="form2Example" placeholder="User" />

      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <input type="text" v-model="password" id="form2Example3" class="form-control" placeholder="name"/>

      </div>

      <div class="form-outline mb-4">
        <input type="text" v-model="password" id="form2Example1" class="form-control" placeholder="last name"/>

      </div>

      <div class="form-outline mb-4">
        <input type="password" v-model="password" id="form2Example4" class="form-control" placeholder="password"/>
      </div>

      <!-- Submit button -->
      <p v-if="error" class="error">Correo o contraseña incorrectos.</p>
        <button v-on:click="confirmUser" type="button" class="btn btn-primary btn-block mb-4"
          style="background:rgb(227,91,146);border-radius:2rem;border-color:rgb(227, 91, 146)">
          submit
        </button>

      <!-- Register buttons -->
      <div class="text-center">
        <p><router-link to="/" style="color:rgb(227, 91, 146)">Back to login</router-link></p>
      </div>
    </form>
    <img src="../assets/imageBack.png" alt="background-image" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -2;">
  </div>

</template>

<script>
export default {
  name: "registerView",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {

  },
};
</script>

<style>
body{
  background-color: white;

}
.register {
  margin-left:50%

}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background:white;
  border-radius: -1px;


}
.form-label {
  margin-top: 2rem;
  margin-bottom: 0.5rem;

}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px;


}
.form-submit {
  background: white;

  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;

}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}

</style>
