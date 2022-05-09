import { Outlet } from 'react-router-dom';
import { Header } from './header/header';
import './main-page.scss';
import { Layout } from 'antd';

export const MainPage = () => {
    const { Content } = Layout;
    return (
        <>
            <Header />
            {/* <Content style={{ padding: '0 20px' }}>
                {/* <div className='breadcrumbs'>
          </div> */}
            <Outlet />
            {/* </Content> */}
        </>
    );
};
