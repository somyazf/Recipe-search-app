
<script setup>
import store  from '../store';
import { onMounted, computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue'

const meals = computed(() => store.state.searchedMeals);
const keyword = ref("");
const route = useRoute();

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})
</script>
<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Search Meals by Name</h1>
  </div>
  <div class="px-8 pb-3">
    <input
      type="text"
      class="rounded-lg border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full h-11 pl-2"
      placeholder="Search for Meals"
      v-model="keyword"
      @change="searchMeals"
      @keyup.enter="searchMeals"
    />
  </div>
  <Meals :meals="meals" />
</template>