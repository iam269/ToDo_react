import React, { Component } from 'react'
import Todo from './components/Todo'

export class App extends Component {
  render() {
    return (
      <div className='bg-stone-900 grid py-4 min-h-screen'>
        <Todo/>
      </div>
    )
  }
}

export default App
