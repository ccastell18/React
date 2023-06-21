import React, { useState } from 'react';
import UserInput from './components/UserInput/UserInput';
import Header from './components/Header/Header';
import ResultTable from './components/ResultTable/ResultTable';

function App() {
  //const [results, setResults] = useState(null);
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
  if (userInput) {
    const yearlyData = [];
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <UserInput onCalculate={calculateHandler} />
      <ResultTable />
    </div>
  );
}

export default App;
