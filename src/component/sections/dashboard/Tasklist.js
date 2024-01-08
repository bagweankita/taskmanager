import React, { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { FiSearch } from 'react-icons/fi';
import { InputAdornment, OutlinedInput } from '@mui/material';

const Tasklist = ({ list, deleteTask }) => {
  const [searchValue,setSearchValue] = useState("");
  const [tasklist,setTasklist]=useState(list);

  return (
    <div className='task-list'>
      <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            
            type="text"
                                        size='small'
                                        placeholder='Search by Status'
                                        name="searchValue"
                                        value={searchValue}
                                        onChange={(e) => setSearchValue(e.target.value)}
                startAdornment={
                    <InputAdornment position='start'>
                        <FiSearch />
                    </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      <table>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Discription</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list && list.filter(items => items.status.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.taskname}</td>
                <td>{item.discription}</td>
                <td>{item.status}</td>
                <td>
                  <button onClick={() => deleteTask(index)}>Delete</button>

                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tasklist