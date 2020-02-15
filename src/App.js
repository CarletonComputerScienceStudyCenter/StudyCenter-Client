import React from 'react';
import './App.css';
import MathJax from 'react-mathjax-preview'

const math = String.raw`
Consider bitstrings of length 9. The positions in these strings are numbered as $1, 2, 3, ..., 9$. How many such bitstrings have the property that
<ul>
    <li>the bit at each even position is 0, or</li>
    <li>the bitstring starts with 1010?</li>
    </ul>

<ol type="a">
		<li>$54$</li>
		<li>$56$</li>
        <li>$58$</li>
        <li>$60$</li>
	  </ol>`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <MathJax math={math} />
      </header>
    </div>
  );
}

export default App;
