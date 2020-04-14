<template>
  <div id="app">
    <input ref="start" type="text" @keyup.enter="search" />
    <template v-if="pokemonList">
      <template v-for="(pokemon, index) in pokemonList.results">
        <poke-cards :pokemon="pokemon" :key="index"></poke-cards>
      </template>
    </template>
    <button @click="goToTop">^</button>
  </div>
</template>

<script>
import Cards from "./components/Cards.vue";
import Service from "./services/getdata.js";

const Services = new Service();

const App = {
  name: "app",
  data() {
    return {
      pokemonList: null
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      Services.getPokemonList()
        .then(res => {
          console.log(res);
          if (res.status === 200){
            this.pokemonList = res.data
          }
        })
        .catch(err => {
          console.log(err)
        });
    },
    search(event) {
      console.log(event);
    },
    goToTop() {
      // console.log(this.$refs);
      this.$refs.start.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  },
  components: {
    "poke-cards": Cards
  }
};

export default App;
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
