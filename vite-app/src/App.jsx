import { useState, useEffect } from 'react'
import './App.css'
import { politicians } from './data/politicians'

function App() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(t)
  }, [])

  const filtered = politicians.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  )

  if (loading) {
    return (
      <div className="loading-screen">
        Loading...
      </div>
    )
  }

  return (
    <div className="app">
      <div className="header">
        <img
          className="logo"
          src="data:image/png;base64,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"
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
