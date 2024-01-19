import { useState } from 'react';
import './App.css';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';

function App() {
  const [dark, setDark] = useState(false);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  // fucntion for increasing index
  const changeIndex = () => setIndex(index + 1);

  // function for changing the theme
  const changeTheme = () => setDark(!dark);

  // function for reseting the index
  const resetIndex = () => setIndex(0);

  return (

    <div style={{ backgroundColor: dark ? "#000" : "#fff", color: dark ? "#fff" : "#000" }}>

      <div className="header">
      
        <span className='kalvium' style={{ color: dark ? "#fff" : "#000" }}>KALVIUM</span>
      
        {/* button for changing dark theme and light theme */}
        <button className='mode' onClick={changeTheme} style={{ backgroundColor: dark ? "#fff" : "#000", color: dark ? "#000" : "#fff" }}>
          {dark ? "Light" : "Dark"}
        </button>
      </div>

      <div className='component'>

        {/* redering questions componenet or result component based on the index value */}
        {/* Conditional Rendering */}
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
