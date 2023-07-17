import React, { useState } from 'react'

function List({ contact }) {
  const [filter, setFilter] = useState('');

  const filtered = contact.filter((i) => {
    return Object.keys(i).some((k) =>
      i[k]
        .toString()
        .toLowerCase()
        .includes(filter.toLowerCase())
    );
  });

  return (
    <div>
      <h1>Contacts</h1>
      <div><input placeholder='Filter Contact' value={filter} onChange={(e) => setFilter(e.target.value)} /></div>
      <div><ul>{filtered.map((e, i) => (
        <li key={i}><span>{e.fullname}</span><span>{e.phone_number}</span></li>
      ))}</ul>
      </div>
      <h3>Total Contacts({filtered.length})</h3>
    </div>
  )
}

export default List