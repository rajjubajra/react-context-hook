import React, {useState} from 'react'

const SongList = () => {
  const [songs, setSongs] = useState([
    {title: 'Let it be', id: 1},
    {title: 'Bridge over trouble water', id: 2},
    {title: 'Imagine', id: 3},
  ])

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
    </div>
  )
}

export default SongList; 
