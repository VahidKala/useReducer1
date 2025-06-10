import { useReducer } from 'react';

const useReduFn = () => {
  const initialState = [{ id: 'a', text: 'Learn Javascript', complete: false }, { id: 'b', text: 'Learn Node', complete: false }, { id: 'c', text: 'Learn', complete: false }]

  const reducer = (state, action) => {
    const itemId = state.filter(z => z.id === action)
    const itemsWithOutId = state.filter(z => z.id !== action)

    let elementInMainState=initialState.filter(z => z.id === action)
    let indexOfElementInMainState=initialState.indexOf(elementInMainState[0])
    switch (itemId[0].complete) {
      case false:
        let updatedElement1 = { ...itemId[0], complete: true }
        itemsWithOutId.splice(indexOfElementInMainState, 0, updatedElement1)
        return itemsWithOutId
      case true:
        let updatedElement2 = { ...itemId[0], complete: false }
        itemsWithOutId.splice(indexOfElementInMainState, 0, updatedElement2)
        return itemsWithOutId
      default:
        return state;
    }
  }

  const [result, dispatch] = useReducer(reducer, initialState);

  const checkFn = (event) => {
    dispatch(event.target.parentNode.id)
  }

  return (
    <ul>
      {result.map(todo => (<li key={todo.id} id={todo.id}><input type='checkbox' checked={todo.complete} onChange={checkFn} />{todo.text}</li>))}
    </ul>

  )
}

export default useReduFn;
