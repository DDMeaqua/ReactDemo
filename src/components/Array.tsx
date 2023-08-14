import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <div className='border-2 border-blue-400 m-3 p-3'>
      <h1>振奋人心的雕塑家们：</h1>
      <input
      className='border-2 border-green-400 m-2 p-2 rounded-lg'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setArtists([
          ...artists,
          { id: nextId++, name: name }
        ]);
      }}>添加</button>
      <ul>
        {artists.map(artist => (
          <li className='border-2' key={artist.id}>{artist.name}
            <button className='border-2 border-green-400 p-2 m-2 rounded-lg' onClick={()=>{
              setArtists(artists.filter(s => s.id !== artist.id))
            }}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
