import React, { useEffect } from 'react';
import { Table } from 'antd';
import { getEntries } from '../../store/entries/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { relocateToCard } from '../../helpers/utils';
import { certifacatesTableColumn } from '../../helpers/columnsTableConstants';

import './registry-certificate-expert.scss';

export const RegistryCertificationExperts = () => {
    const { entries } = useSelector((state) => state.entries);
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getEntries(pathname));
    }, [pathname, dispatch]);

    return (
        <div>
            <Table
                columns={certifacatesTableColumn}
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
                onRow={(record) => relocateToCard(record, pathname, navigate)}
                rowKey={(obj) => obj.id}
            />
        </div>
    );
};
