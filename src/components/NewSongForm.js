import React, {useState} from 'react'

const NewSongForm = ({addSong}) => {

  const [title, setTitle] = useState('');


  const onChange = (event) => {
    //console.log(event.target.id, '---',event.target.value);
    setTitle(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(title);
    addSong(title);
    setTitle('');

  }

  return (
    <div className="row">
      <form onSubmit={onSubmit}>
        <div className="input-field">
          <input  placeholder="Placeholder" 
                  id="title" 
                  type="text" 
                  className="validate"
                  onChange={onChange} 
                  value={title}
                  required
                  />
          <label htmlFor="songtitle">Song Title</label>
        </div>
        <div>
          <button className="btn">Add Song</button>
        </div>
      </form>
    </div>
  )
}


export default NewSongForm;