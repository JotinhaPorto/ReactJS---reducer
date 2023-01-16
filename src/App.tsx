import { ChangeEvent, useState } from 'react';
import { usePeopleList } from './reducers/peopleList';


const App = () => {
  const [nameInput, setNameInput] = useState('')
  const [list, dispatch] = usePeopleList();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value)



  }
  console.log(list)
  const handleAddButton = () => {
    if (nameInput) {
      dispatch({
        type: 'ADD',
        payload: {
          name: nameInput
        }
      });
      setNameInput('')
    }
  }
  const handleOrderButton = () => {
    dispatch({
      type: 'ORDER'
    });
  }

  return (
    <div className='p-5 flex flex-col'> Lista de Pessoas:

      <input type="text" value={nameInput} onChange={handleInputChange} />
      <button onClick={handleAddButton}>Adicionar</button>


      <hr />

      <button onClick={handleOrderButton}>Ordenar</button>
      <br />
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item.name}
            <button className='p-2 m-4 text-white rounded-2xl bg-slate-500' onClick={() => dispatch({
              type: 'REMOVE', payload: {
                id: item.id
              }
            })}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
