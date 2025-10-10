<script setup lang="ts">
import LoadingComponent from "../../../components/LoadingComponent.vue";
import ErrorComponent from "../../../components/ErrorComponent.vue";
import {useFetch} from "../../../utils/useData.ts"

const url = "https://swapi.info/api/planets";
const {data, error, loading} = useFetch(url)

</script>

<template>
  <div v-if="loading">
    <loading-component/>
  </div>
  <div v-else-if="error">
    <error-component :error/>
  </div>
  <div v-else>
    <div class="container-fluid px-4 text-center">
      <h2 class="text-center my-4">List of planets</h2>
      <div class="row">
        <div
            v-for="(planet, index) in data"
            :key="index"
            class="list-unstyled col-sm-12 col-md-4 col-lg-3"
        >
          <router-link
              :to="`/planets/${index + 1}`"
              class="text-decoration-none btn"
          >
            {{ planet.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../../../assets/styleView.css";
</style>