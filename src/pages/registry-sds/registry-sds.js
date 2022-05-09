import React, { useEffect } from 'react';
import { Table } from 'antd';

import { getEntries } from '../../store/entries/actions';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import './registry-sds.scss';

export const RegistrySds = () => {
    const { entries } = useSelector((state) => state.entries);

    const dispatch = useDispatch();

    const { pathname } = useLocation();

    useEffect(() => {
        dispatch(getEntries(pathname));
    }, [pathname, dispatch]);

    const columns = [
        {
            title: '',
            dataIndex: 'id_sds',
            data_type: 'string',
            is_sort: true,
            number_in_row: 2,
        },
        {
            title: 'Статус ',
            dataIndex: 'status',
            data_type: 'string',
            is_sort: true,
            number_in_row: 1,
        },
        {
            title: 'Наименование СДС',
            dataIndex: 'full_name',
            data_type: 'string',
            is_sort: true,
            number_in_row: 1,
        },
        {
            title: 'Регистрационный номер СДС',
            dataIndex: 'reg_no',
            data_type: 'string',
            is_sort: true,
            number_in_row: 1,
        },
        {
            title: 'Держатель',
            dataIndex: 'reg_comp',
            data_type: 'string',
            is_sort: true,
            number_in_row: 1,
        },
        {
            title: 'Дата регистрации',
            dataIndex: 'reg_date',
            data_type: 'string',
            is_sort: true,
            number_in_row: 1,
        },
    ];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={entries}
                className="registry-sro__table"
                size="medium"
                filterSearch={true}
                pagination={{
                    // pageSize: '5',
                    showSizeChanger: true,
                    // itemRender: itemRender
                    total: entries.length,
                }}
            />
        </div>
    );
};
