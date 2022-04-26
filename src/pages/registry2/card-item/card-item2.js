import React, { useEffect } from 'react';
import './card-item.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import itemData from '../../helpers/itemData';
import { ButtonRegistry } from '../../../components/buttons/button-registry/button-registry';
function CardItem2(props) {
  const { id } = useParams();
  // console.log( id);
  const dispatch = useDispatch();
  // const { currentItem } = useSelector((state) => state);
  const { entries } = useSelector((state) => state.entries);
  const currentItem = entries.find((el) => el.id_sds === id);
  // console.log('currentItem', currentItem);
  // useEffect(() => {
  //   dispatch(itemData(id));
  // }, []);

  return (
    <div className="card">
      <div className="card__title">
        <strong>{currentItem.full_name}</strong>
      </div>
      <div className="card__body">
        <strong>Номер аттестата аккредитации</strong>
        <br />
        <p>{currentItem.reg_no}</p>
        <strong>
          <br />
          Дата решения об аккредитации
        </strong>
        <br />
        <p>{currentItem.area}</p>
        <strong>
          <br />
          Номер решения об аккредитации
        </strong>
        <br />
        <p>{currentItem.reg_date}</p>
        <strong>
          <br />
          Полное наименование ОС
        </strong>
        <br />
        <p>{currentItem.reg_comp}</p>
        <strong>
          <br />
          Краткое наименование ОС (Оно же Наименование в Реестре ОС)
        </strong>
        <br />
        <p>{currentItem.site}</p>
        <strong>
          <br />
          Полное наименование ЮЛ/ИП
        </strong>
        <br />
        <p>{currentItem.reg_date}</p>
        <strong>
          <br />
          ИНН
        </strong>
        <br />
        <p>{currentItem.reg_date}</p>
        <strong>
          <br />
          ОГРН
        </strong>
        <br />
        <p>{currentItem.status}</p>
        <strong>
          <br />
          ФИО руководителя
        </strong>
        <br />
        <p>{currentItem.status}</p>

        <strong>
          <br />
          Адрес
        </strong>
        <br />
        <p>{currentItem.status}</p>
        <strong>
          <br />
          Сайт
        </strong>
        <br />
        <p>{currentItem.status}</p>
        <strong>
          <br />
          E-mail
        </strong>
        <br />
        <p>{currentItem.status}</p>
        <strong>
          <br />
          Область аккредитации
        </strong>
        <br />
        <p>{currentItem.status}</p>
        <strong>
          <br />
          Статус ОС в реестре Росаккредитации
        </strong>
        <br />
        <p>{currentItem.status}</p>
      </div>
      <div className="btn__card">
        <ButtonRegistry text="Список членов СДС" path={'/spisok2'} />
        <ButtonRegistry text="Сведения о компенсации" path={'/spisok3'} />
        <ButtonRegistry text="Выгрузить реестр членов СДС" path={'/spisok4'} />
      </div>
    </div>
  );
}

export default CardItem2;
