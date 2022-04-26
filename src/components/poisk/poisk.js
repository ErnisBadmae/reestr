import './poisk.scss';
import { SearchOutlined } from '@ant-design/icons';
import { Space, Input } from 'antd';
import { useState } from 'react';
import axios from 'axios';

export const Poisk = () => {
  // const [isActive, setActive] = useState(false);
  const { Search } = Input;
  // const onSearch = (value) => console.log(value);
  // let flag = false;
  // const ToggleClass = () => {
  //   setActive(!isActive);
  // };
  const [data, setData] = useState()
  const [value, setValue] = useState('')

  const handleReset = () => {

  }
  const handleSearch = async (e) => {
    // e.preventDefault();
    return await axios
    .get(`http://localhost:3000/table?q=${value}`)
    .then((response) =>{
      setData(response.data)
      setValue('')
    })
    .catch((err) => console.log(err))    
  }
  return (
    <Space direction="vertical">
      <Search
        className='search'
        placeholder="рег. номер , наименование"
        onSearch={handleSearch}
        style={{
          width: 200,
        }}
      />
    </Space>
    // <div className="search">
    //   {/* <div className={isActive ? 'search-placeholder-active' : 'search-placeholder'}> */}
    //     {/* <p>рег. номер , наименование</p> */}
    //   {/* </div> */}
    //   <input
    //     // onClick={ToggleClass}
    //     type="text"
    //     placeholder="рег. номер , наименование"
    //   />
    //   <SearchOutlined className="icon" />
    // </div>
  );
};
