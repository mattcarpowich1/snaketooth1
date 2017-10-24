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
      passwordConfirm: '',
      warning: '',
      nameCheck: '',
      passCheck: ''
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
    if (e.target.value.length < 6) {
      this.setState({
        nameCheck: 'Name must be at least 6 characters'
      })
    } else {
      this.setState({
        nameCheck: ''
      })
    }
  }

  updatePassword(e) {
    this.setState({
      password: e.target.value
    })
    if (e.target.value.length < 8) {
      this.setState({
        passCheck: 'Password must be at least 8 characters'
      })
    } else {
      this.setState({
        passCheck: ''
      })
    }
    if (e.target.value !== this.state.passwordConfirm) {
      this.setState({
        warning: 'Passwords must match'
      })
    } else {
      this.setState({
        warning: ''
      })
    }
  }

  updateConfirm(e) {
    this.setState({
      passwordConfirm: e.target.value
    })
    if (this.state.password !== e.target.value) {
      this.setState({
        warning: 'Passwords must match'
      })
    } else {
      this.setState({
        warning: ''
      })
    }
  }

  submit() {
    if ((this.state.name.length >= 6) &&
       (this.state.password.length >= 8) &&
       (this.state.password === this.state.passwordConfirm)) {
      let data = {
        name: this.state.name,
        password: this.state.password
      }
      fetch('/api',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })  
        .then(() => console.log("Success"))
        .catch((err) => console.log(err))
    }
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
                  confHandler={this.updateConfirm} 
                  warning={this.state.warning}
                  nameCheck={this.state.nameCheck} 
                  passCheck={this.state.passCheck} />
          </div>
          <Button 
            text={'Connect to WiFi Now'}
            actionHandler={this.submit} />
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