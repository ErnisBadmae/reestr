import React, { useEffect } from 'react';
import './card-item.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import itemData from '../../helpers/itemData';
import { ButtonRegistry } from '../../../components/buttons/button-registry/button-registry';

function CardItem4(props) {
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
        <strong>Статус действия сертификата</strong>
        <br />
        <p>{currentItem.reg_no}</p>
        <strong>
          <br />№ выданного сертификата
        </strong>
        <br />
        <p>{currentItem.area}</p>
        <strong>
          <br />№ бланка
        </strong>
        <br />
        <p>{currentItem.reg_date}</p>
        <strong>
          <br />
          Дата выдачи
        </strong>
        <br />
        <p>{currentItem.reg_comp}</p>
        <strong>
          <br />
          Срок действия сертификата
        </strong>
        <br />
        <p>{currentItem.site}</p>
        <strong>
          <br />
          Соответствие требованиям (например, стандарт)
        </strong>
        <br />
        <p>{currentItem.reg_date}</p>
        <strong>
          <br />
          Полное наименование получателя
        </strong>
        <br />
        <p>{currentItem.reg_date}</p>
        <strong>
          <br />
          ИНН получателя
        </strong>
        <br />
        <p>{currentItem.status}</p>
        <strong>
          <br />
          ОГРН получателя
        </strong>
        <br />
        <p>{currentItem.status}</p>

        <strong>
          <br />
          Особые отметки (например, оценка при наличии)
        </strong>
        <br />
        <p>{currentItem.status}</p>
        <strong>
          <br />
          Скан-копия сертификата
        </strong>
        <br />
        <p>{currentItem.status}</p>
        <strong>
          <br />
          Орган по сертификации
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

export default CardItem4;
