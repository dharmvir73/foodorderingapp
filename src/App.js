import './App.css';
import Auth from './pages/auth/Auth';
import Registration from './pages/registration/Registration'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Auth/>} />
        <Route path="/register" element={<Registration/>} />
      </Routes>
    </div>
  );
}

export default App;
