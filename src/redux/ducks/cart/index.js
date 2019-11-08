import Axios from "axios"
import { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

// action names
const LIST_ITEMS = "calls/LIST_ITEMS"
const LIST_CART = "calls/LIST_CART"

// initial state
const initialState = {
  items: [],
  cart: []
}

// reducer 
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LIST_ITEMS:
      return { ...state, items: action.payload }
    case LIST_CART:
      return { ...state, cart: action.payload }
    default:
      return state
  }
}

// actions
export function showItems() {
  return dispatch => {
    Axios.get("/products").then(resp => {
      console.log('data', resp.data)
      dispatch({
        type: LIST_ITEMS,
        payload: resp.data
      })
    })
  }
}

export function showCart() {
  return dispatch => {
    Axios.get("/cart").then(resp => {
      dispatch({
        type: LIST_CART,
        payload: resp.data
      })
    })
  }
}

export function addCart(item) {
  return dispatch => {
    Axios.post("/cart", { item }).then(resp => {
      // dispatch(showItems())
      dispatch(showCart())
    })
  }
}

export function deleteCart(id) {
  return dispatch => {
    Axios.delete("/cart/" + id).then(resp => {
      dispatch(showCart())
    })
  }
}

// custom hooks

export function useCart() {
  const dispatch = useDispatch()
  const items = useSelector(appState => appState.cartReducer.items)
  const cartItems = useSelector(appState => appState.cartReducer.cart)
  
  const add = item => dispatch(addCart(item))
  const remove = item => dispatch(deleteCart(item))

  useEffect(() => {
    dispatch(showItems())
    dispatch(showCart())
  }, [dispatch])

  return { items, add, cartItems, remove }
}