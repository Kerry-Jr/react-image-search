import React from 'react'
import unsplash from "../api/unsplash";
import SearchBar from './SearchBar'
import ImageList from "./ImageList";

class App extends React.Component {

  state = {
    images: []
  };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {query: term},
    });
    this.setState({images: response.data.results});
  }

//   axios.get('https://api.unsplash.com/search/photos', {
//   params: { query: term },
//   headers: {
//     Authorization:
//        'Client-ID INOLOMAa9x9agWSnVs0Ae-1Yi-R38vfOsjX4ejk8sms'
//   }
// }).then((response) => {
//   const imageData = response.data.results
//   console.log(imageData)
// })
//    .catch((error) => {
//      console.log(error, 'An error has occurred!')
//    })
// }


  render() {
    return (
       <div className="ui container" style={{marginTop: '10px'}}>
         <SearchBar onSubmit={this.onSearchSubmit}/>
         <div>
          <ImageList images={this.state.images}/>
         </div>
       </div>
    )
  }

}

export default App;
