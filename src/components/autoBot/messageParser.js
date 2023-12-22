class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
        this.actionProvider.greet()
      }

      if (lowerCaseMessage.includes("services")){
        this.actionProvider.handleServiceList()
      }

      if (lowerCaseMessage.includes("mapping")){
        this.actionProvider.handleMappingService()
      }
    }
  }
  
  export default MessageParser