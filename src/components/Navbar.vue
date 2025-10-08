<script setup lang="ts">

</script>

<template>
 <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="text-decoration-none">Home</router-link>
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/people" class="text-decoration-none"
            >People
            </router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/planets" class="text-decoration-none"
            >Planets
            </router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/species" class="text-decoration-none"
            >Species
            </router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  top: 0%;
  display: flex;
  align-items: center;
  height: 60px;
  text-decoration: none;
}

.text-decoration-none {
  display: flex;
  color: rgb(230, 208, 83);
  transition: 0.3s;
}

.nav-item {
  padding: 0 20px;
  margin-left: 20px;
  font-size: 18px;
}

.container-fluid {
  padding-left: 15px;
  font-size: 22px;
  font-weight: bold;
}

.text-decoration-none:hover {
  text-shadow: 0px 0px 3px rgb(240, 226, 39);
  color: rgb(240, 226, 39);
  transform: scale(1.2);
}

.navbar-toggler {
  border-color: rgb(230, 208, 83);
}

.btn {
  color: red
}
</style>