import React, { useEffect } from 'react';
import { Table } from 'antd';

import { getEntries } from '../../store/entries/actions';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import './registry-certificates.scss';

export const RegistryCertificates = () => {
    const { entries } = useSelector((state) => state.entries);

    const dispatch = useDispatch();

    const { pathname } = useLocation();

    useEffect(() => {
        dispatch(getEntries(pathname));
    }, [pathname, dispatch]);

    const columns = [
        {
            title: '',
            dataIndex: 'id',
            data_type: 'string',
            is_sort: true,
            number_in_row: 2,
        },
        {
            title: '№ сертификата',
            dataIndex: 'number',
            data_type: 'string',
            is_sort: true,
            number_in_row: 1,
        },
        {
            title: 'Наименование организации',
            dataIndex: 'company_name',
            data_type: 'string',
            is_sort: true,
            number_in_row: 1,
        },

        {
            title: 'Срок действия сертификата',
            dataIndex: 'certificate_date',
            data_type: 'string',
            is_sort: true,
            number_in_row: 1,
        },
        {
            title: 'Валидация',
            dataIndex: 'valid_date',
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
