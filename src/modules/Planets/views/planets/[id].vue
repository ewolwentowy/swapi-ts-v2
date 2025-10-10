<script setup lang="ts">
import {useRoute} from "vue-router";
import {useFetch} from "../../../../utils/useData";
import type {Planets} from "../../../../utils/apiType.ts";
import LoadingComponent from "../../../../components/LoadingComponent.vue";
import ErrorComponent from "../../../../components/ErrorComponent.vue";

const route = useRoute();
const url = `https://swapi.info/api/planets/${route.params.id}`;
const {data, error, loading} = useFetch<Planets>(url)
</script>

<template>
  <div v-if="loading">
    <LoadingComponent/>
  </div>
  <div v-else-if="error" class="error">
    <error-component :error/>
  </div>
  <div v-else-if="data" class="main">
    <h2>Planetary data</h2>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-3 my-1">
          Name:
        </div>
        <div class="col-3 my-1">
          {{ data.name }}
        </div>
      </div>
      <div class="row justify-content-center ">
        <div class="col-3 my-1">
          Rotation period:
        </div>
        <div class="col-3 my-1">
          {{ data.rotation_period }}
        </div>
      </div>
      <div class="row justify-content-center ">
        <div class="col-3 my-1">
          Orbital period:
        </div>
        <div class="col-3 my-1">
          {{ data.orbital_period }}
        </div>
      </div>
      <div class="row justify-content-center ">
        <div class="col-3 my-1">
          Diameter:
        </div>
        <div class="col-3 my-1">
          {{ data.diameter }}
        </div>
      </div>
      <div class="row justify-content-center ">
        <div class="col-3 my-1">
          Climate:
        </div>
        <div class="col-3 my-1 text-capitalize">
          {{ data.climate }}
        </div>
      </div>
      <div class="row justify-content-center ">
        <div class="col-3 my-1">
          Gravity:
        </div>
        <div class="col-3 my-1">
          {{ data.gravity }}
        </div>
      </div>
      <div class="row justify-content-center ">
        <div class="col-3 my-1">
          Terrain:
        </div>
        <div class="col-3 my-1 text-capitalize">
          {{ data.terrain }}
        </div>
      </div>
      <div class="row justify-content-center ">
        <div class="col-3 my-1">
          Surface water:
        </div>
        <div class="col-3 my-1">
          {{ data.surface_water }}
        </div>
      </div>
    </div>
    <div class="container-fluid text-center">
      <router-link to="/planets" class="btn text-decoration-none">
        Back to the list
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-return-left"
            viewBox="0 0 16 16"
        >
          <path
              fill-rule="evenodd"
              d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
@import "../../../../assets/styleDetails.css";
</style>