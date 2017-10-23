import React, { Component } from 'react'
import Banner from './banner.js'
import InfoText from './infotext.js'
import Button from './button.js'
import Form from './form.js'
import {render} from 'react-dom';

class App extends Component {

  constructor() {
    super()
    this.state = {
      buttonClicked: false,
      fadeOut: '',
      fadein: '',
      name: '',
      password: '',
      passwordConfirm: ''
    }
    this.registerClick = this.registerClick.bind(this)
    this.updateName = this.updateName.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.updateConfirm = this.updateConfirm.bind(this)
    this.submit = this.submit.bind(this)
  }

  registerClick() {
    let _this = this
    setTimeout(() => {
      _this.setState({
        buttonClicked: true,
        fadein: 'fadein'
      })
    }, 100);
    this.setState({
      fadeOut: 'fadeOut'
    })
  }

  updateName(e) {
    this.setState({
      name: e.target.value
    })
  }

  updatePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  updateConfirm(e) {
    this.setState({
      passwordConfirm: e.target.value
    })
  }

  submit() {
    
  }

  render() {

    let content;
    let _this = this;
    if (!(this.state.buttonClicked)) {
      content = (
        <div>
          <div className="info-holder">
            <InfoText colorSwitch={this.state.fadeOut}/>
          </div>
          <Button 
            actionHandler={this.registerClick}
            text={'Accept and Continue'}/>
        </div>
      )
    } else {
      content = (
        <div> 
          <div className="info-holder">
            <Form fadeIn={this.state.fadein}
                  namehandler={this.updateName} 
                  passHandler={this.updatePassword} 
                  confHandler={this.updateConfirm} />
          </div>
          <Button 
            text={'Connect to WiFi Now'}
            actionHandler={this.submit}/>
        </div>
      )
    }

    return (
      	<div className="container-fluid">
          <Banner />
          { content }
      	</div>
    )
  }
}

render(<App/>, document.getElementById('app'));