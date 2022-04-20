import { ButtonRegistry } from '../../buttons/button-registry/button-registry';
import logo from '../../../assets/img/logo/logo.png';
import './header.scss';
import { Layout } from 'antd';

export const Header = () => {
  const { Content } = Layout;

  return (
    <Content style={{ padding: '0 20px' }}>
      <header className="header">
        <div className="header__logo pointer">
          <a href="http://localhost:3000/">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </div>
        <div className="header__title">
          <div className="header__title_title">ПРОФ СДС</div>
          <div className="header__title_support">
            ОБЕСПЕЧЕНИЯ ВЗАИМОДЕЙСТВИЯ МЕЖДУ УЧАСТНИКАМИ СИСТЕМЫ ДОБРОВОЛЬНОЙ
            СЕРТИФИКАЦИИ
          </div>
        </div>
        <div>
          <ButtonRegistry text="Реестр 1" path={'/'} />
          <ButtonRegistry text="Реестр 2" path={'/spisok2'} />
          <ButtonRegistry text="Реестр 3" path={'/spisok3'} />
          <ButtonRegistry text="Реестр 4" path={'/spisok3'} />
        </div>
      </header>
      <div className='header__line'></div>
      {/* <hr align="center" width="auto" size="1" color="#ff0000" /> */}
    </Content>
  );
};
