import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
<div className="content">
  <Layout>
      <Header className='header-color'
      title={
        <Link style={{textDecoration: 'none', color: 'white'}} to='/'>
          Projects
        </Link>}
      scroll>

          <Navigation>
              <Link to="/projects">Meals</Link>
          </Navigation>
      </Header>
      <Drawer title={
          <Link style={{textDecoration: 'none', color: 'black'}} to='/'>
            Projects
          </Link>
      }>
          <Navigation>
            <Link to="/projects">Meals</Link>
          </Navigation>
      </Drawer>
      <Content>
          <div className="page-content" />
          <Main />
      </Content>
  </Layout>
</div>
  );
}

export default App;
