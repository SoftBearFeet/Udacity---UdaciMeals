import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    console.log('Props', this.props);
    return (
      <div>
        Hello World
      </div>
    )
  }
}

function  mapStateToProps (state) {
const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']



  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(state[day]).reduce((meals, meal) => {
        meals[meal] = state[day][meal] ?
          state[day][meal] : null
          return meals
      }, {}),
    }))
  }
}

export default connect(mapStateToProps)(App)
