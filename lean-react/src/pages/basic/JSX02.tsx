import React from 'react'

// https://cdn.pixabay.com/photo/2022/10/15/21/23/cat-7523894_1280.jpg

const cat = {
  catUrl: 'https://cdn.pixabay.com/photo/',
  desciption: '2022/10/15/21/23/',
  imageId: 'cat-7523894_1280.jpg',
  name: '아기고양이', 
  imageTheme: {
    width: '200px',
    height: '150px'
  },
  theme: {
    backgroundColor: 'black',
    color: 'white'
  }
}

function JSX02() {
  return (
    <div style={cat.theme}> 
      <p>{cat.name}'s Picture</p>
      <img src={cat.catUrl + cat.desciption + cat.imageId} alt={cat.name}
      width={cat.imageTheme.width}
      height={cat.imageTheme.height}
      />
    </div>
  )
}

export default JSX02