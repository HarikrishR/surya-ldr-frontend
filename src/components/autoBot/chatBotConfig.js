import { createChatBotMessage } from 'react-chatbot-kit';
import LdrOptions from './ldrOptions';
import ServiceOptions from './serviceOptions';
import MappingServiceOptions from './mappingServiceOptions';

const config = { 
    botName: "LDR",
    initialMessages: [
        createChatBotMessage("Hi, welcome LDR Pvt Ltd, No 1 land surveying & valuation company in India.",{
            widget: "ldrOptions", 
        })
    ],
    widgets: [
        {
            widgetName: "ldrOptions",
            widgetFunc: (props) => <LdrOptions {...props} />,
        },
        {
            widgetName: "serviceOptions",
            widgetFunc: (props) => <ServiceOptions {...props} />,
        },
        {
            widgetName: "mappingServiceOptions",
            widgetFunc: (props) => <MappingServiceOptions {...props} />,
        },
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#376B7E",
        },
        chatButton: {
            backgroundColor: "#376B7E",
        },
    },
}

export default config