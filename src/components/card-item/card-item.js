import React, { useEffect } from 'react';
import './card-item.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import itemData from '../../helpers/itemData';
import { ButtonRegistry } from '../buttons/button-registry/button-registry';
function CardItem(props) {
  const { id } = useParams();
  // console.log( id);
  const dispatch = useDispatch();
  const { currentItem } = useSelector((state) => state);
  console.log('currentItem', currentItem);
  useEffect(() => {
    dispatch(itemData(id));
  }, []);

  return (
    <div className="card">
      <div className="card__title">
        <strong>{currentItem.full_name}</strong>
      </div>
      <div className="card__body">
        <strong>
          Регистрационный номер в государственном реестре саморегулируемых
          организаций:
        </strong>
        <br />
        {currentItem.reg_no}
        <strong>
          <br />
          Адрес:
        </strong>
        <br />
        {currentItem.area}
        <strong>
          <br />
          Сокращенное название компании:
        </strong>
        <br />
        {currentItem.short_name}
        <strong>
          <br />
          Дата регистрации:
        </strong>
        <br />
        {currentItem.reg_date}
        <strong>
          <br />
          Сайт:
        </strong>
        <br />
        {currentItem.site}
      </div>
      <div className="btn__card">
        <ButtonRegistry text="Список членов СДС" path={'/spisok2'} />
        <ButtonRegistry text="Сведения о компенсации" path={'/spisok3'} />
        <ButtonRegistry text="Выгрузить реестр членов СДС" path={'/spisok3'} />
      </div>
    </div>
  );
}

export default CardItem;
