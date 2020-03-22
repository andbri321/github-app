'user strict'

import React, {Component} from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos:[]
    }
  }
  render () {
    return <AppContent
      userinfo={this.state.userinfo} 
      repos={this.state.repos}
    />
  }
}
export default App
