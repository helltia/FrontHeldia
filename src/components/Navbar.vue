<template>

    <div class="container-fluid" >
      <router-link to="/home" class="nav-link active navbar-brand">
        <img src="../assets/logo3.png" alt="image-logo" style="width: 100px; height: auto;">

      </router-link>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
             <router-link to="/pharmacys" class="nav-link active;navbar-brand">Pharmacy</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/hospitals" class="nav-link active;navbar-brand">Hospitals</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/chat" class="nav-link active;navbar-brand">Chat IA</router-link>
          </li>
        </ul>
        <span class="navbar-text" >
          <span @click="cerrarSesion">Get Out</span>
        </span>
      </div>
    </div>


</template>

<script>
export default {
  name: "Navbar",
  created() {},
  computed:{
    isUserLoggedIn() {
      return localStorage.getItem('usuario') !== null;
    },
  },

  data() {

    return {};
  },
  props: {},
  methods: {

      cerrarSesion() {
      localStorage.removeItem('usuario');
      this.$router.push('/')

      }
    }
};

</script>

<style>
.navbar {
  background-color :transparent !important;
}


</style>
