import { Table, Layout, Select, Input, Form, Drawer, Button } from 'antd';
import { FilterFilled } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import './registry-sro.scss';
import { getEntries } from '../../store/entries/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { entriesTableColumns } from '../../helpers/entriesTableConstants';

const { Content } = Layout;
const { Option } = Select;

const statusOptions = [
  {
    value: 'enabled',
    title: 'Действует',
  },
  {
    value: 'disabled',
    title: 'Исключено',
  },
  {
    value: 'wait',
    title: 'Замечания',
  },
];

export const RegistryRSO = () => {
  let [filterModalVisible, setFilterModalVisible] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [id, setId] = useState(0);

  const { entries } = useSelector((state) => state.entries);
  console.log('entries', entries);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(getEntries());
  }, []);


  const dataSource = entries.map((item) => ({ ...item, key: item.id_sds }));
  console.log('dataSource', dataSource);
  
  const relocateToCard = (record) => {
    return {
      onClick: (e) => {
        e.preventDefault();
        navigate('/entry/' + record.id_sds);
      },
    };
  };

  return (
    <div>
      {/* <Space style={{}}>
        <Input
          placeholder="Введите поисковое значение"
          onChange={handleChange}
          type="text"
          allowClear
          value={searchText}
        />
      </Space> */}
      <Content style={{ padding: '0 20px' }}>
        <div className="registry-sro__filter-wrapper">
          <FilterFilled
            className="registry-sro__filter-icon"
            onClick={() => setFilterModalVisible(true)}
          />
        </div>
        <div className="registry-sro__drawer-wrapper">
          <Drawer
            getContainer={false}
            style={{ position: 'absolute' }}
            title="Отфильтровать записи"
            visible={filterModalVisible}
            onClose={() => setFilterModalVisible(false)}
          >
            <Form form={form}>
              <Form.Item name="state">
                <Select
                  className="registry-sro__filter-input"
                  placeholder="Статус"
                >
                  {statusOptions.map((el) => (
                    <Option key={el.value} value={el.value}>
                      {el.title}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name="address">
                <Input
                  className="registry-sro__filter-input"
                  placeholder="Адрес"
                ></Input>
              </Form.Item>
              <Form.Item name="fullName">
                <Input
                  className="registry-sro__filter-input"
                  placeholder="Полное наименование организации"
                ></Input>
              </Form.Item>
              <Form.Item name="regNumber">
                <Input
                  className="registry-sro__filter-input"
                  placeholder="Регистрационный номер"
                ></Input>
              </Form.Item>
            </Form>
            <div className="registry-sro__buttons-wrapper">
              <Button
                className="custom-button"
                onClick={() => setFilterModalVisible(false)}
              >
                Cancel
              </Button>
              <Button
                className="custom-button"
                type="primary"
                onClick={() => {
                  console.log(form.getFieldsValue());
                }}
              >
                OK
              </Button>
            </div>
          </Drawer>
          {/* <Row>
          <Col xs={24}> */}
          <Table
            // loading={loading}
            columns={entriesTableColumns}
            dataSource={dataSource}
            className="registry-sro__table"
            size="medium"
            // pagination={{ position: [state.top, state.bottom] }}
            // onRow={(record, dataIndex) => {
            //   return {
            //     onClick: (event) => {}, // click row
            //   };
            // }}
            // filterMultiple={true}
            filterSearch={true}
            pagination={{
              // pageSize: '5',
              showSizeChanger: true,
              // itemRender: itemRender
              total: dataSource.length,
            }}
            onRow={(record) => relocateToCard(record)}
          />
        </div>
        {/* </Col>
        </Row> */}
      </Content>
    </div>
  );
};
