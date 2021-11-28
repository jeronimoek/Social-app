import './App.scss';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Feed from './components/Feed';
import Recommended from './components/Recommended';
import Resume from './components/Resume';
const { Header, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>Header</Header>
        <Layout className="inner-layout">
          <Content>
            <Feed/>
          </Content>
          <Sider>
            <div className="sider-content">
              <Resume/>
              <Recommended/>
            </div>
          </Sider>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
