import Axios from "axios"
import { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

// action names
const LIST_ITEMS = "calls/LIST_ITEMS"

// initial state
const initialState = {
  items: []
}

// reducer 
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LIST_ITEMS:
      return { ...state, items: action.payload }
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

// custom hooks

export function useCart() {
  const dispatch = useDispatch()
  const items = useSelector(appState => appState.cartReducer.items)

  useEffect(() => {
    dispatch(showItems())
  }, [dispatch])

  return { items }
}