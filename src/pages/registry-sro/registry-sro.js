import { Table, Row, Col, Modal, Layout, Select, Input, Form } from 'antd';
import { useEffect, useState } from 'react';
import './registry-sro.scss';
import getData from '../../helpers/rootData';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import {useNavigate} from 'react-router-dom'

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
  const [loading, setLoading] = useState(false);
  // const [id, setId] = useState(0);

  const { columns, data } = useSelector((store) => store);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(getData());
  }, []);

  // const columns = [
  //   {
  //     title: 'id_sds',
  //     dataIndex: 'id_sds',
  //     defaultSortOrder: 'descend',
  //     // ellipsis: true,
  //     width: '1%',
  //   },
  //   {
  //     title: 'Полное наименование',
  //     dataIndex: 'full_name',
  //     sorter: (a, b) => a.full_name.length - b.full_name.length,

  //     // defaultSortOrder: 'descend',
  //     width: '10%',
  //     // filters: [
  //     //   {
  //     //     text: 'моя компания',
  //     //     value: 'моя компания',
  //     //   },
  //     // ],
  //     // onFilter: (value, item) => item.full_name.includes(value),
  //   },
  //   {
  //     title: 'Сокращенное наименование',
  //     dataIndex: 'short_name',
  //     // sorter: (a, b) => a.short_name.length - b.short_name.length,
  //     // defaultSortOrder: 'descend',
  //     width: '10%',
  //   },
  //   {
  //     title: 'Регистрационный номер',
  //     dataIndex: 'reg_no',
  //     // sorter: (a, b) => a.reg_no.length - b.reg_no.length,
  //     // render: (reg_no) => `${reg_no.first} ${reg_no.last}`,
  //     // defaultSortOrder: 'descend',
  //     width: '10%',
  //   },
  //   {
  //     title: 'Дата регистрации',
  //     dataIndex: 'reg_date',
  //     sorter: (a, b) => a.reg_date.length - b.reg_date.length,
  //     // render: (reg_date) => `${reg_date.first} ${reg_date.last}`,
  //     // defaultSortOrder: 'descend',
  //     width: '10%',
  //   },
  //   {
  //     title: 'Компания',
  //     dataIndex: 'reg_comp',
  //     sorter: (a, b) => a.reg_comp.length - b.reg_comp.length,
  //     // defaultSortOrder: 'descend',
  //     width: '10%',
  //   },
  //   {
  //     title: 'Сайт',
  //     dataIndex: 'site',
  //     // sorter: (a, b) => a.site.length - b.site.length,
  //     // render: (site) => `${site.first} ${site.last}`,
  //     // defaultSortOrder: 'descend',
  //     width: '10%',
  //   },
  //   {
  //     title: 'Адрес',
  //     dataIndex: 'area',
  //     sorter: true,
  //     // render: (area) => `${area.first} ${area.last}`,
  //     // defaultSortOrder: 'descend',
  //     width: '10%',
  //   },
  //   {
  //     title: 'Статус',
  //     dataIndex: 'status',
  //     sorter: (a, b) => a.status.length - b.status.length,
  //     // defaultSortOrder: 'descend',
  //     width: '10%',
  //   },
  // ];

  const dataSource = data.map((item) => ({ ...item, key: item.id_sds }));

  // function itemRender(current, type, originalElement) {
  //   if (type === 'предыдущая') {
  //     return <a>Previous</a>;
  //   }
  //   if (type === 'следующая') {
  //     return <a>Next</a>;
  //   }
  //   return originalElement;
  // }
  // const handleSearch = (e) => {
  //   setSearchText(e.target.value);
  //   if (e.target.value === '') {
  //   }
  // };

  const relocateToCard = (record) => {
    return {
      onClick: () => {
        console.log(record)
        //const { id_sds = '' } = record || {};
        // setId(id_sds);
        navigate('/entry/' + record.data_key)
        // localStorage.setItem('userChange', id_sds);
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
      <Content style={{ padding: '0 50px' }}>
        <button onClick={() => setFilterModalVisible(true)}> Фильтр</button>
        <Modal
          title="Отфильтровать записи"
          onOk={() => {
            console.log(form.getFieldsValue());
          }}
          visible={filterModalVisible}
          onCancel={() => setFilterModalVisible(false)}
        >
          <Form form={form}>
            <Form.Item name="state">
              <Select
                className="registry-sro__filter-input"
                placeholder="Статус"
              >
                {statusOptions.map((el) => (
                  <Option key={el.value} value={el.value}>{el.title}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="address">
              <Input
                className="registry-sro__filter-input"
                placeholder="Адрес"
              ></Input>
            </Form.Item>
          </Form>
        </Modal>
        <Row>
          <Col xs={24}>
            <Table
              loading={loading}
              columns={columns}
              dataSource={dataSource}
              size="small"
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
          </Col>
        </Row>
      </Content>
    </div>
  );
};
