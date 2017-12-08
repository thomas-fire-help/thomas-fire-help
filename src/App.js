import React, { Component } from 'react';
import { ToolHeader, Tabs } from '@procore/core-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToolHeader>
          <ToolHeader.Section>
            <ToolHeader.Header>Thomas Fire Help</ToolHeader.Header>
            <Tabs>
              <Tabs.Tab>
                <Tabs.Link>
                  <a>About</a>
                </Tabs.Link>
              </Tabs.Tab>
              <Tabs.Tab>
                <Tabs.Link>
                  <a>Supplies</a>
                </Tabs.Link>
              </Tabs.Tab>
              <Tabs.Tab variant="active">
                <Tabs.Link>
                  <a>Volunteers</a>
                </Tabs.Link>
              </Tabs.Tab>
              <Tabs.Tab>
                <Tabs.Link>
                  <a>Housing</a>
                </Tabs.Link>
              </Tabs.Tab>
              <Tabs.Tab>
                <Tabs.Link>
                  <a>Resources</a>
                </Tabs.Link>
              </Tabs.Tab>
            </Tabs>
          </ToolHeader.Section>
        </ToolHeader>
      </div>
    );
  }
}

export default App;
