import React, { useState, useCallback } from 'react';
import questions from '../questions';

const QuestionBox = (props) => {
  const { index, changeIndex, dark, score, changeScore } = props;
  const [highlight, setHighlight] = useState(false);


  // function for checking if the clicked option is correct and changing the score and index for next question
  const checkOption = useCallback(
    (option) => {
      const isCorrect = questions[index].options[option].isCorrect;
      changeScore((prevScore) => prevScore + (isCorrect ? 1 : 0));
      changeIndex();
    },
    [index, changeIndex, changeScore]
  );

  // Reset score if it's the first question
  if (index === 0) {
    changeScore(0);
  }

  // declaring styles for light mode and dark mode to use for css
  const boxShadowStyle = dark
    ? 'rgba(255, 255, 255, 0.116) 0px 19px 38px, rgba(255, 255, 255, 0.08) 0px 15px 12px'
    : 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px';

  const questionBoxStyle = dark
    ? { backgroundColor: '#323232' }
    : { backgroundColor: '#5C5C5C' };

  const optionBoxStyle = dark
    ? { backgroundColor: '#636262' }
    : { backgroundColor: '#ABABAB' };

  const buttonStyle = dark
    ? { backgroundColor: 'white', color: 'black' , boxShadow: '0px 10px 4px -4px #000'}
    : { backgroundColor: 'black', color: 'white' , boxShadow: '0px 8px 1px -4px #FFF'};

  return (
    <div className="flexBox" style={{ boxShadow: boxShadowStyle }}>
      
      
      <div className="questionBox" style={questionBoxStyle}>
      
        <h3 className="qNo">Question {index + 1} out of 5</h3>
      
        <p className="question" style={{ color: highlight ? 'red' : 'white' }}>
          {questions[index].text}
        </p>
      
        <div className="highlightBtns">
      
          <button className="btn" onClick={() => setHighlight(true)}>Highlight</button>
          <button className="btn" onClick={() => setHighlight(false)}>Remove Highlight</button>
          
        </div>

      </div>

      <div className="optionBox" style={optionBoxStyle}>
        {/* Displaying the options using the map HOF*/}
        {questions[index].options.map((option, i) => (
          <button key={i} onClick={() => checkOption(i)} style={buttonStyle}>
            {option.text}
          </button>
        ))}
      </div>


    </div>
  );
};

export default QuestionBox;
