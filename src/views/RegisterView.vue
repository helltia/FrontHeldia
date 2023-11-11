<template>
   <div class="register">
    <h1 class="title">Sign Up</h1>
    <form action class="form" @submit.prevent="register">
      <label class="form-label" for="#userName">User Name:</label>
      <input>
      <label class="form-label" for="#firstName">First Name:</label>
      <input id="firstname"

      >
      <label class="form-label" for="#lastName">Last Name:</label>
      <input
       >
  <label class="form-label" for="#lastName">Password:</label>
  <input>
  <br>
      <input v-on:click="createUser" class="btn btn-primary btn-block mb-4" type="submit" value="Registrate">
      <br>
      <div class="text-center">
        <p>Already have an account? <router-link to="/">Return to login</router-link></p>
      </div>
    </form>
  </div> 
  <div></div>
</template>

<script>
export default {
  name: "registerView",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
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
  color: black;
  margin-bottom: 0.5rem;

}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid black;
  color: black;

}
.form-submit {
  background: white;
  border: solid black;
  color: black;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;

}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}

</style>