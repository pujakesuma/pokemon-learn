import axios from 'axios';

class Service {
    constructor(token = "token") {
        this.token = token
    }

    getPokemonList = (pokemon = "pokemon", offset = 0, limit = 0) => {
        let uri = process.env.VUE_APP_API_URI;
        let params = {
            offset,
            limit
        };
        return new Promise((resolve, reject) => {
            axios
                .get(uri + pokemon, {
                    params
                })
                .then(res => {
                    resolve(res)
                })
                .catch(err => reject(err));
        });
    }
}

export default Service;