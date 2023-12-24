import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './autoBot.css';
import chatBot from '../../assets/images/chatbot.png';
import ActionProvider from './actionProvider';
import MessageParser from './messageParser';
import config from './chatBotConfig';

class AutoBot extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showChat: false,
        }
    }

    showHide = () => {
        this.state.showChat ? this.setState({showChat: false}): this.setState({showChat: true});
    }

    render(){
        return(
            <>
                {
                    this.state.showChat ? 
                        <div className='chatBot'>
                            <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
                        </div>
                    :
                    ""
                }
                <div className={this.state.showChat ? 'chatBotTriggerBox show' : 'chatBotTriggerBox'}  onClick={()=>this.showHide()}>
                    <img src={chatBot} alt='LDR Bot' />
                </div>
                {/* <div className='chatBot'>
                    <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
                </div> */}
            </>
        )
    }
}

export default AutoBot;