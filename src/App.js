import  {useState } from 'react';

import './styles/App.css';


function App() {
  const [value, setValue] = useState('')
  const [todo, setTodo] = useState([])

  function save(e) {
      e.preventDefault()
      let i = 1
      todo.forEach(element => {
          return i = element.index + 1 
      });
        const novo = [{
         index:  i,
         user: value
        }]
        setTodo([...todo, ...novo])
  }

  function remove(index) {
   const novo =  [...todo].filter(user=>  user.index !== index , ...todo)
   
   setTodo(novo)
  }

  return (
    <div className="app">
      <div className= 'container'>
        <form onSubmit={save} >
          <div className ='add'>
            <label htmlFor="adc">Adicionar usuário </label>
            <input type="text" value={value} onChange = {e => setValue(e.target.value)} />
            <button type ='submit'> Salvar</button>
          </div>
          <div className ='header'>
            <label htmlFor="users">Usuários</label>
          </div>
          {todo.map((item) => {
          return(
            <div className ='list'>
                  <div className ='listBody'>
                      <label htmlFor="id">{item.index}</label>
                      <label htmlFor="user">{item.user}</label>
                        <button type ='button' onClick = {()=> remove(item.index)}>Excluir</button>
                  </div>
            </div>
          )
        })}
        <div>
        </div>
        </form>
      </div>
    </div>
  );
}

export default App;
