<template>
    <div class="container">
        <p class="language-absolute">{{ switchLanguage }}</p>
        <p class="title">
            {{ name ? name : capsName()}}
            <span>#{{ pokemonDetail.id }}</span>
        </p>
        <div class="pokeDetail" v-if="pokemonDetail">
            <div>
                <img :src="pokemonDetail.sprites.front_default" :alt="pokemonDetail.name">
            </div>
            <div>
                <p class="flavor_text">{{ flavor_text }}</p>  
                <p>
                    Types: <span v-for="(type, index) in pokemonTypes" :key="index" class="type">{{ type }}</span>
                </p>  
            </div>
        </div>
        <p v-else style="text-align: center;">
            Loading ...
        </p>
        <hr>
        <div class="profile-container">
            <p class="title profile-container adjust">
                Profile
            </p>
            <template v-if="pokemonDetail">
                <div class="profile">
                    <div>
                        <p>
                            Genus: <span>{{ genus }}</span>
                        </p>
                        <p>
                            Abilities: <span v-for="(data, index) in pokemonAbilities" :key="index">{{ data.ability.name }}</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Height: <span>{{ pokemonDetail.height }}</span>
                        </p>
                        <p>
                            Weight: <span>{{ pokemonDetail.weight }}</span>
                        </p>
                    </div>
                </div>
            </template>
        </div>
        <hr>
        <div class="evolution">
            <p class="title evolution">Evolution</p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
const Detail = {
    name: "Detail",
    data() {
        return {
            pokemonDetail: "",
            name: "",
        };
    },
    methods: {
        capsName() {
            return this.$route.params.pokemon[0].toUpperCase() + this.$route.params.pokemon.slice(1)
        }
    },
    computed: {
        switchLanguage() {
            return this.$store.getters.getLanguage
        }
    },
    mounted() {
        let uriSpecies = process.env.VUE_APP_API_URI + `pokemon-species/` + this.$route.params.pokemon;
        let uriDetail = process.env.VUE_APP_API_URI + `pokemon/` + this.$route.params.pokemon;

        axios.all([axios.get(uriDetail), axios.get(uriSpecies)])
        .then(
            axios.spread((Detail, Species) => {
                // Species
                let DataLanguage = Species.data.flavor_text_entries.find(
                    data => data.language.name === this.switchLanguage
                );
                let names = Species.data.names.find( value => value.language.name === this.switchLanguage )
                let genera = Species.data.genera.find( value => value.language.name === this.switchLanguage )
                this.name = names.name;
                this.genus = genera.genus;
                this.flavor_text = DataLanguage.flavor_text;

                // Detail
                const { data } = Detail
                this.pokemonTypes = data.types.map( value => value.type.name )
                this.pokemonAbilities = data.abilities.filter( value => value.is_hidden )
                console.log(this.pokemonAbilities)
                this.pokemonDetail = data;
                console.log(DataLanguage);
                console.log(Detail.data);
            })
        )
        .catch(
            err => console.log(err)
        )
    }
};

export default Detail;
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Dosis&display=swap");

.container {
    margin: 2% auto;
    padding: 0 40px;
    border: 1px solid black;
    height: 80vh;
    width: 50vh;
    transition: 1s;
    box-shadow: 6px 6px #858484;
    position: relative;
}

.language-absolute {
    position: absolute;
    margin: 0px;
    top: 5px;
    left: 10px;
}

.container:hover {
    transform: translate(-6px);
    box-shadow: 10px 10px #cacaca, 20px 20px #858484;
}

p {
    font-family: "Dosis", sans-serif;
}

hr {
    border: 0.5px solid #616161;
}

p span {
    color: #616161;
}

.title {
    text-align: center;
    margin: 10px auto;
    font-size: 22pt;
}

.pokeDetail {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.pokeDetail div img {
    margin: 0 6px 0 0;
}

.flavor_text {
    text-align: left;
    width: 380px;
    overflow: hidden;
}

.container .profile p:first-child {
    text-align: left;
    color: black;
}

.container .profile p span {
    color: #616161;
}

.type {
    border: 1px solid black;
    border-radius: 10%;
    padding: 2px 5px;
    margin: 0 5px;
}

.adjust {
    position: relative;
    left: 5%;
}

.profile-container {
    text-align: left;
    margin-bottom: 3%;
}

.profile {
    display: flex;
    justify-content: center;
    line-height: 8pt;
}

.profile div {
    margin: 0 20px;
}

.evolution {
    position: relative;
    text-align: right;
    right: 2%
}
</style>