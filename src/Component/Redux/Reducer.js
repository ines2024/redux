import { Add, Delete, Edit } from "./Actiontype"

const initialState = {
    movies:
    [
        {id:1,
            title:"Rosewood",
            description:"Le pathologiste de Miami, le Dr Beaumont Rosewood, Jr., découvre des secrets dans le corps des gens en utilisant son matériel de laboratoire dernier cri.",
            image:"https://flxt.tmsimg.com/assets/p11770738_b_v9_ad.jpg",
            rating:4,
            video:"https://www.youtube.com/embed/Hs1YW9jqJls?si=QZ6z8uFCczUqy5Mb",
    
        },
    
        {id:2,
            title:"Avatar",
            description:"Un marine paraplégique envoyé sur la lune Pandora pour une mission unique est tiraillé entre suivre ses ordres et protéger le monde qu'il considère le sien.",
            image:"https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
            rating:5,
            video:"https://www.youtube.com/embed/5PSNL1qE6VY?si=qN-tqIYniKg0D0rm",
    
        },
    
        {id:3,
            title:"Prison Break",
            description:"Michael Scofield s'engage dans une véritable lutte contre la montre : son frère Lincoln est dans le couloir de la mort, en attente de son exécution. ",
            image:"https://fr.web.img5.acsta.net/pictures/17/05/22/16/49/588696.jpg",
            rating:3,
            video:"https://www.youtube.com/embed/AL9zLctDJaU?si=kWAsBy7uk-pOdGkX",
    
        }
    
    ]
}

export const reducer=(state = initialState, { type, payload }) => {
  switch (type) {

  case Add:
    return { ...state, movies:[...state.movies,payload] }
  case Delete:
    return {...state,movies:state.movies.filter(e=>e.id!==payload)}
  case Edit:
    return {...state,movies:state.movies.map (e=>e.id ===payload.id ?e=payload.data :e)}

  default:
    return state
  }
}
