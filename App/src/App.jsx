import { useState, useEffect } from 'react';
import './App.css';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';

function App() {
  // getting mode from localStorage or setting the default to false
  const [dark, setDark] = useState(localStorage.getItem('darkMode') === 'true' || false);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  // Update localStorage when dark mode changes
  useEffect(() => {
    localStorage.setItem('darkMode', dark);
  }, [dark]);

  // Function for increasing index
  const changeIndex = () => setIndex(index + 1);

  // Function for changing the theme
  const changeTheme = () => setDark(!dark);

  // Function for resetting the index
  const resetIndex = () => setIndex(0);

  return (
    <div style={{ backgroundColor: dark ? "#000" : "#fff", color: dark ? "#fff" : "#000" }}>
      <div className="header">
        <span className='kalvium' style={{ color: dark ? "#fff" : "#000" }}>KALVIUM</span>
        <button className='mode' onClick={changeTheme} style={{ backgroundColor: dark ? "#fff" : "#000", color: dark ? "#000" : "#fff" }}>
          {dark ? "Light" : "Dark"}
        </button>
      </div>
      <div className='component'>
        {/* Rendering questions component or result component based on the index value */}
        {index < 5 ? (
          <QuestionBox index={index} changeIndex={changeIndex} dark={dark} score={score} changeScore={setScore} />
        ) : (
          <Result score={score} resetIndex={resetIndex} />
        )}
      </div>
    </div>
  );
}

export default App;
