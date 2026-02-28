import games from '../data/games.json'


//todos los juegos
export const getGames= ()=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(games)
        },2000)
    })
};

//Categorias

export const getGamesbyCategory = (platform)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            const filtro = games.filter((g)=>g.platform == platform)
            resolve(filtro)
        },2000)
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
        },2000)
    })
};