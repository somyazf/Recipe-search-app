<script setup>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from '../components/Meals.vue'

const route = useRoute();
const ingredient = route.params.ingredient
const meals = computed(() => store.state.mealsByIngredient)

onMounted(() => {
store.dispatch('searchMealsByIngredient', ingredient)
})

</script>
<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for {{ ingredient }}</h1>
  </div>

  <Meals :meals="meals" />
</template>