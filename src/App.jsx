  import AppRoutes from './routes/AppRoutes'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function App() {

  return (
    <div>
      <ToastContainer position="bottom-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
      <AppRoutes />
    </div>
  )
}

export default App
