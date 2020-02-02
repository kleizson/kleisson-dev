import React from 'react';
import ToolBar from './components/Toolbar/ToolBar'
import { GlobalStyle } from './styles/GlobalStyle'
import Container from './components/Container/Container'
import SocialMedias from './components/SocialMedias/SocialMedias'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
        <ToolBar/>
          <Container/>
            <SocialMedias/>
    </div>
  );
}

export default App;
