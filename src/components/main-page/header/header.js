import { ButtonRegistry } from '../../buttons/button-registry/button-registry';
import { Button } from 'antd';
import logo from '../../../assets/img/logo/logo.png';
import './header.scss';
import { Layout } from 'antd';
import { useLocation } from 'react-router-dom';

export const Header = () => {
    const { Content } = Layout;
    const { pathname } = useLocation();
    return (
        <Content style={{ padding: '0 20px' }}>
            <header className="header">
                <div className="header__logo pointer">
                    <a href="http://localhost:3000/">
                        <img className="logo" src={logo} alt="logo" />
                    </a>
                </div>
                <div className="header__title">
                    <div className="header__title_title">ПРОФСДС</div>
                    {/* <div className="header__title_support">
            Обеспечения взаимодействия между участниками системы добровольной
            сертификации
          </div>
          <div className="header__title_support">
            в сфере Оценки опыта и деловой репутации
          </div> */}
                </div>
                <div>
                    <ButtonRegistry
                        //     onClick={() => console.log('pathname', pathname)}
                        text="Реестр СДС"
                        path={'/'}
                    />
                    <ButtonRegistry
                        //     onClick={() => console.log('pathname', pathname)}
                        text="Реестр ОС"
                        path={'/2'}
                    />
                    <ButtonRegistry
                        //     onClick={() => console.log('pathname', pathname)}
                        text="Реестр экспертов"
                        path={'/3'}
                    />
                    <ButtonRegistry
                        //     onClick={() => console.log('pathname', pathname)}
                        text="Реестр сертификатов"
                        path={'/4'}
                    />
                </div>
            </header>
            <div className="header__line"></div>
        </Content>
    );
};
