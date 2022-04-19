import { Input, Space } from 'antd';


export const Poisk = () => {
  const { Search } = Input;
  const onSearch = value => console.log(value);

  return (
     <Space direction="vertical">
        <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
        />
    </Space>
    
  );
};
