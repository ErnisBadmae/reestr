import { ButtonRegistry } from '../../buttons/button-registry/button-registry';
import { Button } from 'antd';
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
          <ButtonRegistry text="Реестр СДС" path={'/'} />
          <ButtonRegistry text="Реестр ОС" path={'/spisok2'} />
          <ButtonRegistry text="Реестр экспертов" path={'/spisok3'} />
          <ButtonRegistry text="Реестр сертификатов" path={'/spisok4'} />
        </div>
      </header>
      <div className="header__line"></div>
    </Content>
  );
};
