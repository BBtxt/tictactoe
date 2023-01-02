import React from 'react'
const user = { 
    name: 'John',
    imageUrl: 'https://cdn.dribbble.com/users/1044993/screenshots/17246782/media/59a2825d93c780ff003226d65ae786f2.png?compress=1&resize=400x300&vertical=top',
    imageSize: 90
  }
export default function User() {
  return (
    <>
    <h1>{user.name}</h1>
    <img
    className='avatar'
    src={user.imageUrl}
    style={{
        width: user.imageSize,
        height: user.imageSize
    }}
    />
    </>
  )
}

