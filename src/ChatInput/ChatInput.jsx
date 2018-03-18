// Imports
import React from 'react';
import { FormGroup, InputGroup, Button, FormControl } from 'react-bootstrap';
import { SocketIO } from 'reactsockets';

// Components
import Name from '../Name/Name';

class ChatInput extends SocketIO {
  constructor(props) {
    // Parent
    super(props);
    // State
    this.state = {
      message: '',
    };
    // Sockets config
    this.url = 'http://localhost:8080';
    // KeysTrust
    // this.setKeysTrust([]);
    // Binds
    this.SendMessages = this.SendMessages.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.SetName = this.SetName.bind(this);
  }
  // Change input
  onChange(e) {
    e.preventDefault();
    this.setState({
      message: e.target.value,
    });
  }
  // Handler key
  handleKeyPress(e) {
    // Detect enter press
    if (e.charCode === 13) this.SendMessages(e);
  }
  // Send messages
  SendMessages(e) {
    // Events
    e.preventDefault();
    // Menssage
    this.Publish('message', {
      messages: {
        message: this.state.message,
        name: this.state.name || 'Julio',
      },
    });
    // State
    this.setState({
      message: '',
    });
  }
  // Set name
  SetName(name) {
    // Response
    const response = name.length > 0;
    // Set
    if (response) {
      this.setState({ name });
    }
    // Return
    return response;
  }
  // Type name
  TypeName() {
    return (this.state.name ? null : <Name setName={this.SetName} />);
  }
  // Render component
  render() {
    return (
      <div id="chat-input">
        {this.TypeName()}
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              value={this.state.message}
              onChange={this.onChange}
              onKeyPress={this.handleKeyPress}
              placeholder="Type your message"
            />
            <InputGroup.Button>
              <Button
                onClick={this.SendMessages}
              >
                Send
              </Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </div>
    );
  }
}

export default ChatInput;
