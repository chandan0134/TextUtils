import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import About from './component/About';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import from 'react-router-dom'


function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState('dark');
  const [alert, setAlert] = useState({ msg: '', type: '' });
  const [enable, setEnable] = useState(false);
  const [selectColour, setSelectColour] = useState('');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setModeText('light');
      showAlert('Color changed to dark', 'success');
      setEnable(true);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setModeText('dark');
      showAlert('Color changed to white', 'success');
      setEnable(false);
    }
  };

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" toggleMode={toggleMode} mode={mode} modeText={modeText} />
      <div className="container">
        <Alert alert={alert} />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<TextForm showAlert={showAlert} mode={mode} />} />
              {/* <Route index element={<Home />} /> */}
              <Route exact path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
