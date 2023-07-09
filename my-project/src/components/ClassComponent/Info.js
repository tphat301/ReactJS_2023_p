import React from 'react'
class UserComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: 'Thanh',
      lastname: 'Phat',
      age: 25
    }
  }
  setAge = () => {
    this.setState((value) => ({
      age: value.age + 1
    }))
  }

  render() {
    return (
      <>
        <div className='firstname'>{this.state.firstname}</div>
        <div className='lastname'>{this.state.lastname}</div>
        <div className='age'>{this.state.age}</div>
        <button onClick={this.setAge}>Setstate</button>
      </>
    )
  }
}
