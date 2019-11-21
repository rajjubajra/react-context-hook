import React, {useState} from 'react'
import uuid from 'uuid/v1';

const SongList = () => {
  const [songs, setSongs] = useState([
    {title: 'Let it be', id: 1},
    {title: 'Bridge over trouble water', id: 2},
    {title: 'Imagine', id: 3},
  ])

  const addSong = () => {
    setSongs([...songs, {title: 'Wa maya wa', id: uuid() }])
  }

  return (
    <div className="row">

      <h3>Song List</h3>
      <ul className="collection">
      {
        songs.map((song)=>{
          return (
            <li className="collection-item" key={song.id}>{song.title}</li>
          )
        })
      }
      </ul>
      <button className="btn" onClick={addSong}>Add Song</button>
    </div>
  )
}

export default SongList; 
