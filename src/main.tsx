import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import Layouts from './layouts';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider, App } from 'antd';
import 'antd/dist/reset.css';
import '@ant-design/v5-patch-for-react-19';
import './main.d';
import './map.d';
import { ModalProvider } from './components/ModalProvider';
import 'leaflet/dist/leaflet.css';

createRoot(document.getElementById('root')!).render(
  <>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0d6efd',
        },
      }}
    >
      <App>
        <Provider store={store}>
          <BrowserRouter>
            <ModalProvider>
              <Layouts />
            </ModalProvider>
          </BrowserRouter>
        </Provider>
      </App>
    </ConfigProvider>
  </>
);
