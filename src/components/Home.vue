<script setup lang="ts">
</script>

<template>
  <div class="home">
    <div>
      <h1>Welcome to the Star Wars Data Explorer!</h1>
      <p class="description">
        Discover characters, planets, and species from the Star Wars universe
        using the SWAPI Reborn API. Click any section from the menu above to get
        started.
      </p>
    </div>
    <figure class="text-center">
      <blockquote class="blockquote">
        <p>Do. Or do not. There is no try. </p>
      </blockquote>
      <figcaption class="blockquote-footer">
        Yoda
        <cite title="Source Title">STAR WARS: THE EMPIRE STRIKES BACK</cite>
      </figcaption>
    </figure>
  </div>
</template>

<style scoped>
.home {
	height: 85vh;
	background-image: url("../assets/Star-wars-logo-new-tall.webp");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
}
div {
	height: 80%;
}
h1 {
	display: flex;
	justify-content: center;
	padding: 20px;
	color: rgb(255, 232, 31);
}
.description {
	display: flex;
	justify-content: center;
	margin: 20px;
	padding: 20px;
	height: auto;
	font-size: 16x;
	font-weight: 500;
	color: rgb(255, 232, 31);
}
.text-center {
	bottom: 200px;
	color: rgb(255, 232, 31);
}
</style>