import React from 'react';
import { Editor } from 'primereact/editor';
import { useState } from 'react';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function BlogPost() {
  const [value, setValue] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [category, setCategory] = useState('');
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(file);
      setImagePreview(imageURL);
    }
  };

  return (
    <div className='BlogPost'>
      <div style={{ borderColor: 'black', border: '1px solid #dcdcdc', marginLeft: '100px', marginRight: '100px', marginTop: '10px', height: '200px', background: `url(${imagePreview}) center/cover no-repeat` }}>
        <p style={{ marginLeft: '40%', marginTop: '2%', fontSize: 'small' }}>Select a cover photo or a random image will be selected</p>
        <input style={{ marginLeft: '44%', marginTop: '2%' }}
          type="file"
          accept="image/*"
          id="imageInput"
          onChange={handleImageChange}
        />
      </div>

      <div className='title' style={{marginLeft: '100px', marginTop: "20px", border: "1px solid #dsdcdc", display: "flex"}}>
        <h3 style={{marginRight: "10px"}}>Enter the title for your Blog :</h3>
        <input type="text" style={{ width: "20%", height: "20px" }} />
      </div>

      <div className='category' style={{ marginLeft: '100px', marginTop: "20px", border: "1px solid #dsdcdc", display: "flex" }}>
      <h3 style={{marginRight: "10px"}}>Choose a category : </h3>
      <FormControl sx={{ m: 1, minWidth: 150}}>
        <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
        <Select style={{ }}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={category}
          onChange={handleChange}
          autoWidth
          label="Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </div>

      <div className='post' style={{ marginLeft: '100px', marginRight: '100px', marginTop: '30px' }}>
        <Editor style={{ height: "750px" }}
          value={value}
          onTextChange={(e) => setValue(e.htmlValue)}
        />
      </div>
      <Button style={{ marginTop: '20px', float: 'right', marginRight: '100px', width: '100px', fontWeight: 'bold', fontSize: 'medium', marginBottom: "20px" }} variant="contained">POST</Button>
    </div>
  );
}

export default BlogPost;
