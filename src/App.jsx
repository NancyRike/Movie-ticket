import { AppRouter } from './router/appRouter'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {

  return (
    <>
      <ToastContainer />
      <AppRouter />
    </>
  )
}

export default App
