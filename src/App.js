import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import Gallery from './components/Gallery/Gallery'
import newData from './data.json'
import Modal from './components/UI/Modal/Modal'

let formattedData = newData.data.items.map((image) => {
  image.isChecked = false
  return image
})

class App extends Component {

  state = {
    data: formattedData,
    checkedCounter: 0,
    openModal: false,
    modalPic: null
  }

  componentDidMount () {
    window.addEventListener('keyup', this.handleEscPress, false)
  }

  handleEscPress = (e) => {
    if (e.keyCode === 27) {
      e.preventDefault()
      this.undoCheckHandler()
    }
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
    const newCheckedCounter = afterDeletingData.filter(image => image.isChecked === true).length
    this.setState({ data: afterDeletingData, checkedCounter: newCheckedCounter })
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

  closeModalHandler = () => {
    let className = 'modal-open'
    document.body.classList.remove(className)
    this.setState({ openModal: false })
    setTimeout(() => {
      this.setState({ modalPic: null })
    }, 500)
  }

  onModalIconClickHandler = (image_id) => {
    let className = 'modal-open'
    document.body.classList.add(className)
    const modalPicUrl = this.state.data.filter(image => image.item_id === image_id)[0]
    this.setState({ modalPic: modalPicUrl.sample_url, openModal: true })
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <Gallery
          images={this.state.data} 
          onCheckPhoto={this.onCheckPhoto}
          onDeleteImage={this.deleteHandler}
          onModalClick={this.onModalIconClickHandler}/>
        <Nav 
          checkedCount={this.state.checkedCounter} 
          deletePhotos={this.deletePhotosHandler}
          undoCheck={this.undoCheckHandler}/>
        <Modal 
          show={this.state.openModal} 
          closeModal={this.closeModalHandler}
          modalPicUrl={this.state.modalPic} />
      </div>
    );
  }
}

export default App;
