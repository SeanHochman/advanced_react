import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [answer, setAnswer] = useState(789);

  const newAnswer = num => Promise.resolve(num);

  useEffect(() => {
    const newNum = async () => {
      const ans = await newAnswer(23);
      setAnswer(ans + 100);
    };
    newNum();
  }, [answer]);

  return <div>{`Hello React, the answer is ${answer}`}</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
