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
      <div className="header">
        <img
          className="logo"
          src="/vite.svg"
          alt="logo"
        />
        <h1>AIPAC TRACK</h1>
      </div>
      <div className="search-container">
        <input
          className="search"
          type="text"
          placeholder="Search politicians..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {query && filtered.length > 0 && (
          <ul className="dropdown">
            {filtered.map(p => (
              <li key={p.name} className="dropdown-item">
                <img className="photo" src={`https://ui-avatars.com/api/?name=${encodeURIComponent(p.name)}`} alt={p.name} />
                <div className="info">
                  <span className="name">{p.name}</span>
                  {p.state && <span className="state">{p.state}</span>}
                  <span className="amount">${p.amount.toLocaleString()}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
