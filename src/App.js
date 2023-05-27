import './App.css';
import { useEffect, useState } from 'react'

function QuotesGenerator({ quotes, setQuote, quote }) {
  function changeQuote() {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }

  return (
    <div className='quotes-generator'>
      <h1 className='project-name'>Project 3: Quote Generator</h1>
      <div className='quotes-table'>
        <button className='btn-change-quote' onClick={changeQuote}>New Quote</button>
        <h3 className='title'><span>"</span>{quote?.text}</h3>
        <p className='author'>- {quote?.author}</p>
      </div>
    </div>
  )
}

function App() {
  const [quotes, setQuotes] = useState([])
  const [quote, setQuote] = useState(null)

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(res => res.json())
      .then(json => {
        setQuotes(json)
        setQuote(json[0])
      })
  }, [])
  
  return (
    <div className="App">
      <QuotesGenerator quotes={quotes} setQuote={setQuote} quote={quote} />
    </div>
  );
}

export default App;
