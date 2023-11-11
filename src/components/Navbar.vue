<template>

    <div class="container-fluid" >
      <router-link to="/home" class="nav-link active;navbar-brand">
        <img src="src/assets/logo3.png" alt="image-logo" style="width: 100px; height: auto;">

      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
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
        <span class="navbar-text">
          <router-link to="/" class="nav-link active;navbar-brand">Exit</router-link>
        </span>
      </div>
    </div>

  
</template>

<script>
export default {
  name: "navbar",
  created() {},
  data() {
 
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style>
.navbar {
  background-color :transparent !important;
}


</style>