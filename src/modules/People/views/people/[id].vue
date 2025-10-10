<script setup lang="ts">
import {useRoute} from "vue-router";
import {useFetch} from "../../../../utils/useData.ts";
import type {People} from "../../../../utils/apiType.ts";
import LoadingComponent from "../../../../components/LoadingComponent.vue";
import ErrorComponent from "../../../../components/ErrorComponent.vue";

const route = useRoute();
const url = `https://swapi.info/api/people/${route.params.id}`;
const {data, error, loading} = useFetch<People>(url)

</script>

<template>
<div v-if="loading">
    <LoadingComponent/>
  </div>
  <div v-else-if="error" class="error">
    <error-component :error/>
  </div>
  <div v-else-if="data" class="main">
    <h2>Character data</h2>
       <div class="text-center">{{data.name}}</div>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-3 my-1">
          Height:
        </div>
        <div class="col-3 my-1">
          {{ data.height }}
        </div>
      </div>
      <div class="row justify-content-center ">
        <div class="col-3 my-1">
          Mass:
        </div>
        <div class="col-3 my-1">
          {{ data.mass }}
        </div>
      </div>
      <div class="row justify-content-center ">
        <div class="col-3 my-1">
          Hair color:
        </div>
        <div class="col-3 my-1 text-capitalize">
          {{ data.hair_color }}
        </div>
      </div>
      <div class="row justify-content-center ">
        <div class="col-3 my-1">
          Skin color:
        </div>
        <div class="col-3 my-1 text-capitalize">
          {{ data.skin_color }}
        </div>
      </div>
      <div class="row justify-content-center ">
        <div class="col-3 my-1">
          Eye color:
        </div>
        <div class="col-3 my-1 text-capitalize">
          {{ data.eye_color }}
        </div>
      </div>
      <div class="row justify-content-center ">
        <div class="col-3 my-1">
          Birth year:
        </div>
        <div class="col-3 my-1">
          {{ data.birth_year }}
        </div>
      </div>
      <div class="row justify-content-center ">
        <div class="col-3 my-1">
          Gender:
        </div>
        <div class="col-3 my-1 text-capitalize">
          {{ data.gender }}
        </div>
      </div>
    </div>
    <div class="container-fluid text-center">
      <router-link to="/people" class="btn text-decoration-none">
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