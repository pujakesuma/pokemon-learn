<template>
  <div id="app">
    <div class="container">
      <div class="title">
        <h1>pokemon api</h1>
        <h5>an awesome pokemon</h5>
      </div>
    <div class="wrapper">
      <template v-if="pokemonList">
        <div
          v-for="(pokemon, index) in pokemonList.results"
          :key="index"
          class="card"
        >
          <poke-cards :pokemon="pokemon" />
        </div>
      </template>
    </div>
  </div>
    </div>

</template>

<script>
import axios from 'axios';
import Cards from './components/Cards.vue';

const App = {
  name: 'app',
  data() {
    return {
      pokemonList: null,
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
      pokemon = 'pokemon';
      const uri = process.env.VUE_APP_API_URI;
      const params = {
        offset: 0,
        limit: 20,
      };
      try {
        let data = await axios.get(uri + pokemon, { params });
        this.pokemonList = data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  components: {
    'poke-cards': Cards,
  },
  watch: {
    pokemonList: function(val) {
      console.log('okok', val, this.pokemonList);
    },
  },
};

export default App;
</script>

<style lang="scss">
.container {
  height: auto;
}

.title {
  margin-bottom: 1rem;
}

.title h1 {
  text-transform: capitalize;
  text-align: center;
  font-size: 2.5rem;
  line-height: 3.5rem;
}

.title h5 {
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #777;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}

.card {
  border-radius: 12px;
  padding: 2px 4px;
  background-color: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>
