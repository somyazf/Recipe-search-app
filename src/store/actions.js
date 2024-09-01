import axiosClient from '../axiosClient';

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      commit('setSearchedMeals', data.meals)
    })
}

export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }) => {
      commit('setMealsByLetter', data.meals)
    })
}

export function searchMealsByIngredient({ commit }, ingredient) {
  console.log('ingredient', ingredient)
  axiosClient.get(`filter.php?i=${ingredient}`)
    .then(({ data }) => {
      console.log('searchMealsByIngredient data', data.meals)
      commit('setMealsByIngredient', data.meals)
    })
}