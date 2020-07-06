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
    // getData(pokemon = "pokemon") {
    //   let uri = process.env.VUE_APP_API_URI;
    //   let params = {
    //     offset: 0,
    //     limit: 20
    //   };
    //   axios
    //     .get(uri + pokemon, { params })
    //     .then(res => {
    //       if (res.status === 200) {
    //         this.pokemonList = res.data;
    //       }
    //     })
    //     .catch(err => console.log(err));
    // }
    async getData(pokemon) {
      pokemon = 'pokemon'
      const uri = process.env.VUE_APP_API_URI
      const params = {
        offset: 0,
        limit: 20
      }
      try {
        let data = await axios.get(uri + pokemon, {params})
        return this.pokemonList = data.data
      } catch (err) {
        console.log(err);
      }
    }
  },
  components: {
      'poke-cards': Cards
  },
  watch: {
    pokemonList: function(val){
      console.log('okok',val, this.pokemonList)
    }
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
