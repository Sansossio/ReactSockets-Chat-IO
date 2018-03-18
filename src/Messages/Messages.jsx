// Imports
import React from 'react';
import { SocketIO } from 'reactsockets';

class Messages extends SocketIO {
  // Constructor
  constructor(props) {
    // Parent
    super(props);
    // State
    this.state = {
      messages: [],
    };
    // Sockets config
    this.url = 'http://localhost:8080';
    this.subscribes = 'message';
    // KeysTrust
    this.setKeysTrust([
      { messages: 'storage' },
    ]);
  }
  // Scroll bottom
  componentDidUpdate() {
    const { scrollHeight } = this.messageList;
    const height = this.messageList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }
  // Render
  render() {
    const allMessages = this.state.messages.map((m, i) => {
      // Define key
      const myKey = `${i}-${m}`;
      // Print
      return (
        <div key={myKey}>
          <b>{m.name || 'DefaultName'}</b>: {m.message}
        </div>
      );
    });
    return (
      <div id="chat-container" ref={(el) => { this.messageList = el; }}>
        {allMessages}
      </div>
    );
  }
}

export default Messages;
