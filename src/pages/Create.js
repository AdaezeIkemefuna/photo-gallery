import React, { useState } from 'react'

const Create = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('')
    const [desc, setDesc] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <form className='create' onSubmit={handleSubmit}>
        <label>
            <span>Image Title:</span>
                <input 
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
        </label>

        <label>
            <span>Description:</span>
                <textarea 
                    type="text"
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                />
        </label>

        <label>
            <span>Select Category:</span>
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="dogs">Dogs</option>
                    <option value="cats">Cats</option>
                    <option value="rabbits">Rabbits</option>
                    <option value="snakes">Snakes</option>
                    <option value="others">Others</option>
                </select>
        </label>
       
        
        <label>
            <span>Upload Image:</span>
                <input 
                    type="url"
                    alt={url}
                    onChange={(e) => setUrl(e.target.value)}
                    value={url}
                    />
        </label>
        <button>Upload</button>
    </form>
  )
}

export default Create;