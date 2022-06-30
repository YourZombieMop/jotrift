import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './index.sass';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Header>
      <h1>&lt;/Jotrift&gt;</h1>
    </Header>
    <App />
    <Footer>
      <small>Copyright</small>
    </Footer>
  </StrictMode>
)