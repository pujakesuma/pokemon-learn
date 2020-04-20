<template>
  <div :ref="pokemon.name" class="card">
    <img v-bind:src="showPokemonImage(pokemon.url)"/>
    <p>{{ capitalizedFirstName(pokemon.name) }}</p>
  </div>
</template>

<script>
let Cards = {
  props: ["pokemon","section"],
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
    },
    capitalizedFirstName(name) {
      return name[0].toUpperCase() + name.slice(1)
    }
  }
};

export default Cards;
</script>

<style scoped>

.card {
  border: 1px solid black;
  border-radius: 10px;
  margin: 0 10px 10px 10px;
  transition: 0.2s;
}

.card:hover {
  transform: translate(-2px);
  box-shadow: 6px 4px 2px 0px grey;
}

.card:active {
  transform: translate(0px);
  box-shadow: 1px 1px 2px grey;
}

</style>