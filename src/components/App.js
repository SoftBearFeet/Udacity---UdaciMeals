import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'

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

function mapDispatchToProps (dispatch) {
  return {
    selectRecipe: (data) => {dispatch(addRecipe(data))},
    remove: (data) => {dispatch(removeFromCalendar(data))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
