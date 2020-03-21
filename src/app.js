'user strict'

import React from 'react'

const App = () => (
  <div className='app' >
    <div className='search' >
      <input
        type='search'
        placeholder='Digite o nome do usuário no GitHub' />
    </div>

    <h1 className='app' >
      <img src="https://avatars2.githubusercontent.com/u/487669?v=4" />
      <h1 href='https://github.com/fdaciuk'> Fernando Daciuk </h1>
    </h1>

    <ul className='repos-info'>
      <li> Repositórios: 122 </li>
      <li> Seguidores: 122 </li>
      <li> Seguindo: 10 </li>
    </ul>

    <div className='actions'>
      <button>Ver Repositórios </button>
      <button>Ver Favoritos </button>
    </div>

    <div className='repos'>
      <h2> Repositórios </h2>
      <ul>
        <li> <a href='#'> Nome do repositorio </a> </li>
        <li> <a href='#'> Nome do repositorio </a> </li>
      </ul>
    </div>

    <div className='repos'>
      <ul>
        <li> <a href='#'> Nome do repositorio </a> </li>
        <li> <a href='#'> Nome do repositorio </a> </li>
      </ul>
    </div>

  </div>
)

export default App
