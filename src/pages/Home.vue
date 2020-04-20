<template>
  <div id="home">
    <!-- <input ref="start" type="text" @keyup.enter="search" /> -->
    <div v-if="pokemonList" class="card-list">
      <template v-for="(pokemon, index) in pokemonList.results">
        <poke-cards :pokemon="pokemon" :key="index"></poke-cards>
      </template>
    </div>
    <div>
      <button @click="goToTop">^</button>
    </div>
  </div>
</template>

<script>
import Cards from "../components/Cards";
import Service from "../services/getdata.js";

const Services = new Service();

const Home = {
  name: "home",
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

export default Home;
</script>

<style>
#home {
  text-align: center;
  margin-top: 60px;
}

.card-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
