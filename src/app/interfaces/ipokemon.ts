export interface IPokemon {
    name: string,
    abilities: {
        ability: {
            name: string
        }
    }[], //array of objects
    sprites: {
        front_default: string
    }
}
// only typing information we want to use from pokemon api