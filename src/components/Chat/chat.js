import React, { Component } from 'react'
import MessageForm from './MessageForm'
import MessageList from './MessageList'
import './chat.css'

class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: JSON.parse(localStorage.getItem('messages')) || [],
        }
    }

    handleNewMessage = (text) => {
        const newMessage = { me: true, author: "Me", body: text };
        const messages = [...this.state.messages, newMessage];
        localStorage.setItem('messages', JSON.stringify(messages));
        this.setState({ messages });
    }

    componentDidUpdate = () => {
        localStorage.setItem('messages', JSON.stringify(this.state.messages));
    }

    render() {
        return (
            <div className="App">
                <MessageList messages={this.state.messages} />
                <MessageForm onMessageSend={this.handleNewMessage} />
            </div>
        )
    }
}

export default Chat