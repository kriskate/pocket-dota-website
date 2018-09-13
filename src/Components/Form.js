import React from 'react';
import { Col, Input, Button, Fa, Card, CardBody, FormInline } from 'mdbreact';

const isDev = process.env.NODE_ENV === 'development'
export default class Form extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      invalidEmail: false,

      name: !isDev ? '' : 'pocket-dota-test-user',
      email: !isDev ? '' : 'celmaiuser@us.er',
    }
  }
  validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  onSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if(!e.target.className.includes('was-validated')) e.target.className += ' was-validated';
    
    const { email, name } = this.state;
    
    const url = !isDev ? '/subscribe' : 'http://localhost:8080/subscribe';
    if(!this.validateEmail(email)){
      alert('The specified email address is not valid.')
    }else {
      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            email, name,
          })
        });

        const { status, message } = await res.json();

        if(status === 'OK') {
          this.setState({ submitted: message });
        } else {
          throw new Error(message);
        }
      } catch(e) {
        alert(e.message);
      }
    }
  }

  changeHandler = (event) => {
    this.setState({...this.state, [event.target.name]: event.target.value})
  }

  render() {
    const { name, email, submitted } = this.state;

    return(
      <Card>
        <CardBody className="text-center">
          { submitted ||
            <div>
              <p className="text-center h4 py-4">Subscribe to hear news about Pocket Dota</p>
              <FormInline onSubmit={this.onSubmit} className="needs-validation justify-content-center" >
                <Col md="4">
                  <Input value={name} name='name' onChange={this.changeHandler} type="text" id="defaultFormRegisterNameEx" className="form-control" label="Your name" required icon='user' />
                </Col>
                <Col md="4">
                  <Input value={email} name ='email' onChange={this.changeHandler} type="email" id="defaultFormRegisterConfirmEx3" className="form-control" label="Your email" required icon='envelope' />
                </Col>

                <Button color="elegant" type="submit" >Subscribe <Fa icon="paper-plane-o" /></Button>
              </FormInline>
            </div>
          }
        </CardBody>
      </Card>
    );
  }
};