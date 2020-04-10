<template>
  <div id="app">
    <template v-if="pokemonList">
      <div v-for="(pokemon, index) in pokemonList.results" :key="index">
          <poke-cards :pokemon="pokemon"/>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import Cards from "./components/Cards.vue"

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
    getData(pokemon = "pokemon") {
      let uri = process.env.VUE_APP_API_URI;
      let params = {
        offset: 0,
        limit: 20
      };
      axios
        .get(uri + pokemon, { params })
        .then(res => {
          if (res.status === 200) {
            this.pokemonList = res.data;
          }
        })
        .catch(err => console.log(err));
    }
  },
  components: {
      'poke-cards': Cards
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
