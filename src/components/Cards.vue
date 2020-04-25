<template>
    <div class="card" @click="goToDetail">
        <img
            v-bind:src="showPokemonImage(pokemon.url)"
            :style="{ filter: `grayscale( ${visited} )` }"
        />
        <p>{{ capitalizedFirstName(pokemon.name) }}</p>
    </div>
</template>

<script>
let Cards = {
    props: ["pokemon"],
    data() {
        return {
            title: null,
            visited: "100%",
            imagUri: "",
            id: ""
        };
    },
    methods: {
        showPokemonImage(uri) {
            this.id = uri.split("/")[uri.split("/").length - 2];
            this.imageUri = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
            return this.imageUri;
        },
        capitalizedFirstName(name) {
            return name[0].toUpperCase() + name.slice(1);
        },
        goToDetail() {
            this.visited = "0";
			this.$router.push({ name: 'detail', params: { pokemon: this.pokemon.name } })
        }
    }
};

export default Cards;
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Dosis&display=swap');

p {
    margin: 6px;
    font-family: 'Dosis', sans-serif;
}

img {
    filter: grayscale(100%);
}

.card {
    border: 1px solid black;
    border-radius: 10px;
    margin: 0 10px 10px 10px;
    transition: 0.2s;
    width: 200px;
}

@media only screen and (max-width: 460px) {
    .card {
        width: 40%;
    }
}

@media only screen and (max-width: 330px) {
    .card {
        width: 200px;
    }
}

.card:hover {
    transform: translate(-2px);
    box-shadow: 4px 4px 0px grey;

}

.card:hover img {
    animation: pokeJump 0.4s 2 alternate;
    filter: grayscale(0) !important;
}

@keyframes pokeJump {
    0% {
        transform: translateY(0px);
    }
    100% {
        transform: translateY(-50px);
    }
}

.card:active {
    transform: translate(0px);
    box-shadow: 1px 1px 2px grey;
}
</style>