<script setup>
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  }
})

function truncateWords(str, count) {
  if (!str) return str;
  return str.split(" ").slice(0, count).join(" ")
}
</script>
<template>
  <div
    class="bg-white shadow rounded-xl hover:scale-105 transition-all mb-6"
  >
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        {{ meal.strInstructions ? truncateWords(meal.strInstructions, 20) + "..." : null }}
      </p>
    </div>
  </div>
</template>