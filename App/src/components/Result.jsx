import React, { useMemo } from 'react';

const Result = ({ score, resetIndex }) => {
  const percentage = useMemo(() => (score / 5) * 100, [score]);

  return (
    <div className="resultDiv">

      <h1>Final Score</h1>
      
      <h3>{score} out of 5 correct - {percentage}%</h3>
      
      {/* button for resetting the index */}
      <button className="btn restart" onClick={() => resetIndex()}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
