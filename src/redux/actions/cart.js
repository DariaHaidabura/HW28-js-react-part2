import axios from "axios"

export const addCart = (todo) => ({
  type:'ADD_CART',
  payload:todo
})

export const removeCart = (id) => ({
  type:'REMOVE_CART',
  payload:id
})

export const addToFavs = (todos) => ({
  type:'ADD_FAVS',
  payload: todos
})

export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload,
})

export const fetchFavs = () => (dispatchFav) => {

  dispatchFav({
    type: 'SET_LOADED',
    payload: false,
  });

  axios.get("http://localhost:3000/favorites").then((res) => {
      dispatchFav(addToFavs(res.data));
    });
}