import { useState } from 'react'
import './App.css'
import { politicians } from './data/politicians'

function App() {
  const [query, setQuery] = useState('')

  const filtered = politicians.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="app">
      <h1>AIPAC TRACK</h1>
      <input
        className="search"
        type="text"
        placeholder="Search politicians..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ul className="results">
        {filtered.map(p => (
          <li key={p.name} className="result-item">
            <span className="name">{p.name}</span>
            <span className="amount">${p.amount.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
