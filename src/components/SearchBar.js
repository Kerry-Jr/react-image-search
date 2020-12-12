import React from 'react'

class SearchBar extends React.Component {

  state = {
    term: ''
  }

// onFormSubmit(event) {
//     event.preventDefault()
//   console.log(this.state.term)
// }

  // in order to refactor to not use a bind(this) just turn it into an arrow function
onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.term)
}
// or a third way as seen in the form tag onSubmit you can pass it along inline like so
  render() {
    return (
       <div className="ui segment">
         <form onSubmit={this.onFormSubmit} className="ui form">
           {/*<form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">*/}
           <div className="field">
             <label>Image Search</label>
             <input type="text"
                    value={this.state.term}
                    onChange={(e) => this.setState({ term: e.target.value.toUpperCase()})}/>
           </div>
         </form>
       </div>
    )
  }
}

export default SearchBar;
