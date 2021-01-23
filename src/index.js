import ReactDOM from 'react-dom'
import { ToastProvider } from 'react-toast-notifications'
import 'jquery-mask-plugin'
import App from './App'
import './styles.scss'

ReactDOM.render(
  <ToastProvider>
    <App />
  </ToastProvider>,
  document.getElementById('root'),
)
