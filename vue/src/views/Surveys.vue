<template>
  <PageComponent>

    <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Surveys list</h1>
        <router-link
          to="{ name: 'SurveyCreate' }"
          class="px-3 py-2 text-white bg-blue-200 hover:bg-blue-50 rounded-md"
        >Add a new survey</router-link>
      </div>
    </template>

    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      <pre>{{surveys}}</pre>
    </div>
  </PageComponent>
</template>

<script setup>
import PageComponent from "../components/PageComponent.vue";
import store from "../store";
import {computed} from "vue";

const surveys = computed( () => store.state.surveys );

</script>
