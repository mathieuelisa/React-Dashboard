import React from 'react';

export const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'username',
    headerName: 'User',
    width: 250,
    renderCell: (params) => {
      return (
        <div className='avatarContainer'>
          <img className='avatar' src={params.row.img} alt='profil' />
          {params.row.username}
        </div>
      );
    },
  },
  { field: 'email', headerName: 'Email', width: 240 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 130,
    renderCell: (params) => {
      return (
        <div
          className={`${
            params.row.status === 'pending'
              ? 'pending'
              : params.row.status === 'active'
              ? 'approved'
              : 'cancel'
          }`}
        >
          {params.row.status}
        </div>
      );
    },
  },
];

export const rows = [
  {
    id: 1,
    username: 'Jon Snow',
    img: 'https://www.gabrielgorgi.com/wp-content/uploads/2019/12/01.jpg',
    email: 'jon@gmail.com',
    status: 'passive',
    age: 35,
  },
  {
    id: 2,
    username: 'Cersei Lannister',
    img: 'https://www.gabrielgorgi.com/wp-content/uploads/2019/12/01.jpg',
    email: 'cersei299@gmail.com',
    status: 'pending',
    age: 42,
  },
  {
    id: 3,
    username: 'Jaime Lannister',
    img: 'https://www.gabrielgorgi.com/wp-content/uploads/2019/12/01.jpg',
    email: 'jaime99@gmail.com',
    status: 'pending',
    age: 45,
  },
  {
    id: 4,
    username: 'Tony Stark',
    img: 'https://www.gabrielgorgi.com/wp-content/uploads/2019/12/01.jpg',
    email: 'arya971@gmail.com',
    status: 'pending',
    age: 16,
  },
  {
    id: 5,
    username: 'Daenerys Targaryen',
    img: 'https://www.gabrielgorgi.com/wp-content/uploads/2019/12/01.jpg',
    email: 'daenerys@gmail.com',
    status: 'active',
    age: null,
  },
  {
    id: 6,
    username: 'Melisandre',
    img: 'https://www.gabrielgorgi.com/wp-content/uploads/2019/12/01.jpg',
    email: null,
    status: 'pending',
    age: 150,
  },
  {
    id: 7,
    username: 'Ferrara Clifford',
    img: 'https://www.gabrielgorgi.com/wp-content/uploads/2019/12/01.jpg',
    email: 'pipolitp@gmail.com',
    status: 'pending',
    age: 44,
  },
  {
    id: 8,
    username: 'Roro Frances',
    img: 'https://www.gabrielgorgi.com/wp-content/uploads/2019/12/01.jpg',
    email: 'Ross99@gmail.com',
    status: 'active',
    age: 36,
  },
  {
    id: 9,
    username: 'Harvey Roxie',
    img: 'https://www.gabrielgorgi.com/wp-content/uploads/2019/12/01.jpg',
    email: 'harvey@gmail.com',
    status: 'pending',
    age: 65,
  },
  {
    id: 10,
    username: 'Mathieu Elisa',
    img: 'https://www.gabrielgorgi.com/wp-content/uploads/2019/12/01.jpg',
    email: 'moi@gmail.com',
    status: 'passive',
    age: 36,
  },
];
