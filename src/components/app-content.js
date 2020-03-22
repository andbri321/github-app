'user strict'

import  React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({userinfo,repos}) => (
  <div className='app' >
    <Search />
    {!!userinfo && <UserInfo />}
    {!!userinfo && <Actions />}

    {!!repos.length &&
      <Repos
        className='repos'
        title='Repositórios'
        repos={[{
          name:'Nome do repositorio',
          link: '#'
        }]}
      />
    }

    {!!repos.length &&
      <Repos
        className='starred'
        title='Favoritos'
        repos={[{
          name:'Nome do repositorio',
          link: '#'
        }]}
      />
    }

  </div>
)

export default AppContent
