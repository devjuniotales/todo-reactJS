import  {useState } from 'react';

import './styles/App.css';

function App() {
  const [value, setValue] = useState('')
  const [todo, setTodo] = useState([])

  function save(e) {

      if(value.length == 0){
        return alert('Erro, Campo inválido ou vazio!')
      }
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
        alert('Usuário adicionado com sucesso!')
  }

  function remove(index) {
        const novo =  [...todo].filter(user=>  user.index !== index , ...todo)
        
        setTodo(novo)
  }

  return (
      <div className= 'container'>
        <div className = 'content'>

          <div className ='header'>
              <h1 className = 'title'> TODO LIST </h1>
          </div>

        <form onSubmit={save} className ='form'>
          <div className = 'content-form'>
            <label> Adicionar Usuário </label>
            <input type="text" value={value} onChange = {e => setValue(e.target.value)} />
            <button
             type ='submit'
             className ='button-add'>Salvar</button>
          </div>
          {todo.map((item) => {
            return(
              <div className ='content-list'>
                      <div className ='list-body'>
                      <label htmlFor="id">ID : {item.index}</label>
                      <label htmlFor="user">{item.user}</label>
                      <button 
                      className ='button-remove'
                      type ='button'
                      onClick = {()=> remove(item.index)}>Excluir</button>
                  </div>
            </div>
            )
          })}
        </form>
       </div>
      </div>
  );
}

export default App;
