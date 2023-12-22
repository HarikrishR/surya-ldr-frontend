

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    greet() {
      const greetingMessage = this.createChatBotMessage("Press below options.", {
        widget: "ldrOptions",
      })
      this.updateChatbotState(greetingMessage)
    }

    handleServiceList = () => {
        const message = this.createChatBotMessage("Click below service options.", {
            widget: "serviceOptions",
          })
        this.updateChatbotState(message);
    };

    handleMappingService = () => {
        const message = this.createChatBotMessage("Click below mapping service options.", {
            widget: "mappingServiceOptions",
          })
        this.updateChatbotState(message);
    };
    
    updateChatbotState(message) {
   
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
   
      
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider