<template>
  <div>
    <img v-bind:src="showPokemonImage(pokemon.url)"/>
    <p>{{ pokemon.name }}</p>
  </div>
</template>

<script>
let Cards = {
  props: ["pokemon"],
  data() {
    return {
        title: null
    }
  },
  methods: {
    showPokemonImage(uri) {
      let id = uri.split("/")[uri.split("/").length - 2];
      let imageUri = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
      return imageUri;
    }
  }
};

export default Cards;
</script>

<style scoped>

</style>