import React, {useState} from 'react'
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    {title: 'Let it be', id: 1},
    {title: 'Bridge over trouble water', id: 2},
    {title: 'Imagine', id: 3},
  ])

  const addSong = (title) => {
    setSongs([...songs, {title: title, id: uuid() }])
  }

  return (
    <div className="row">
      <h3>Song List</h3>
      <div className="col s12 m8">
        <ul className="collection">
            {
              songs.map((song)=>{
                return (
                  <li className="collection-item" key={song.id}>{song.title}</li>
                )
              })
            }
        </ul>
      </div>
      <div className="col s12 m4">
        <NewSongForm addSong={addSong} />
      </div> 
    </div>
  )
}

export default SongList; 
