import React, {Component} from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

class FbMessenger extends Component {
    render(){
        return(
        <div>
        <MessengerCustomerChat
          pageId="1048268575251118"
          appId="1:676138681404:web:3267a9d87604d4309f6f39"
          htmlRef={window.location.pathname}
        />
      </div>
      )
    }
 }

export default FbMessenger