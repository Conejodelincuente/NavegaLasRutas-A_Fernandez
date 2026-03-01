import games from '../data/games.json'


//todos los juegos
export const getGames= ()=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(games)
        },800)
    })
};

//Categorias

export const getGamesbyCategory = (platform)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            const filtrado = games.filter((g)=>g.platform == platform)
            resolve(filtrado)
        },800)
    })
};

//Detalle de un jeugo

export const getGamesbyID = (id)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            const game = games.find((g)=> g.id === Number(id))
            if (game){
                resolve (game)
            }else{
                reject(new Error (`Juego con el id ${id} no ha podido ser encontrado`))
            }
        },800)
    })
};