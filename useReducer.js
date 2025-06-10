import { useReducer } from 'react';

const ExpenseItem = () => {
  const initialState = [{ id: 'a', text: 'Learn Javascript', complete: false }, { id: 'b', text: 'Learn Node', complete: false }, { id: 'c', text: 'Learn', complete: false }]

  const reducer = (state, action) => {
    const item = state.filter(z => z.id === action)
    const list = state.filter(z => z.id !== action)

    switch (item[0].complete) { // 
      case false:
        return [...list, { ...item[0], complete: true }]
      case true:
        return [...list, { ...item[0], complete: false }]
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

export default ExpenseItem;
