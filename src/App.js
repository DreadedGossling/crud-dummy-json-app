import './App.css'; import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login.js';

export default function App() {
  return (<>
    <Router>
      <Routes>
        {/* <Route
          path='/'
          element={<App />} /> */}
        <Route
          path="/"
          element={<Login />}
        />
      </Routes>
    </Router>

  </>)
}