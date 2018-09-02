/* global chrome */
import React from 'react';
import './App.css';
import { Tabs, Button } from 'antd';
import AdInfo from './AdInfo';

const TabPane = Tabs.TabPane;
const close = <Button icon="close" shape="circle" size="large" />;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: []
    };

    chrome.runtime.onMessage.addListener(this.pushMessage);
  }

  pushMessage = (request, sender, sendResponse) => {
    console.log(`Message received from content script [${sender.tab.url}]: ${request.message}`);
    sendResponse({response: 'Received'});
    this.setState({
      messages: this.state.messages.concat([request.message])
    });
  }

  render() {
    const { messages } = this.state;
    console.log(messages);

    return (
      <div className="App">
        <ul>
          {messages.map(message => (<li>{message}</li>))}
        </ul>
        <Tabs defaultActiveKey="1" tabBarExtraContent={close}>
          <TabPane tab="Ad Info" key="1"><AdInfo /></TabPane>
          <TabPane tab="Cookies" key="2">Content of tab 2</TabPane>
          <TabPane tab="Details" key="3">Content of tab 3</TabPane>
        </Tabs>
      </div>
    )
  }
}

export default App;
