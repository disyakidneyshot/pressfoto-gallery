import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import Gallery from './components/Gallery/Gallery'
import newData from './data.json'

let formattedData = newData.data.items.map((image) => {
  image.isChecked = false
  return image
})

// console.log(formattedData)

class App extends Component {

  state = {
    data: formattedData,
    checkedCounter: 0
  }

  componentWillUpdate () {
    console.log('UPDATED', this.state.data)
  }

  onCheckPhoto = (item_id) => {
    let checkedPhoto = this.state.data.filter(image => image.item_id === item_id)[0]
    checkedPhoto.isChecked = !checkedPhoto.isChecked
    const newCheckedData = this.state.data.map(image => {
      if (image.item_id === item_id) {
        image = checkedPhoto
      }
      return image
    })
    let checkedCounter = this.state.data.filter(image => image.isChecked === true).length
    this.setState({data: newCheckedData, checkedCounter: checkedCounter})
  }

  deleteHandler = (item_id) => {
    const afterDeletingData = this.state.data.filter(image => image.item_id !== item_id)

    this.setState({ data: afterDeletingData })
  }

  deletePhotosHandler = () => {
    const afterDeletingData = this.state.data.filter(image => image.isChecked !== true)
    this.setState({ data: afterDeletingData, checkedCounter: 0 })
  }

  undoCheckHandler = () => {
    const undoCheckedData = this.state.data.map(image => {
      image.isChecked = false
      return image
    })
    this.setState({ data: undoCheckedData, checkedCounter: 0 })
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <Gallery 
          images={this.state.data} 
          onCheckPhoto={this.onCheckPhoto}
          onDeleteImage={this.deleteHandler}/>
        <Nav 
          checkedCount={this.state.checkedCounter} 
          deletePhotos={this.deletePhotosHandler}
          undoCheck={this.undoCheckHandler}/>
      </div>
    );
  }
}

export default App;
