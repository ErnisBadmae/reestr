import React, { useEffect } from 'react';
import './card-item.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import itemData from '../../helpers/itemData';
import { ButtonRegistry } from '../../../components/buttons/button-registry/button-registry';

function CardItem3(props) {
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
        <strong>Тип трудового договора</strong>
        <br />
        <p>{currentItem.reg_no}</p>
        <strong>
          <br />
          ФИО эксперта
        </strong>
        <br />
        <p>{currentItem.area}</p>
        <strong>
          <br />№ аттестата
        </strong>
        <br />
        <p>{currentItem.reg_date}</p>
        <strong>
          <br />
          Скан аттестата
        </strong>
        <br />
        <p>{currentItem.reg_comp}</p>
        <strong>
          <br />
          Действителен до
        </strong>
        <br />
        <p>{currentItem.site}</p>
        <strong>
          <br />
          Область деятельности (аттестации) эксперта
        </strong>
        <br />
        <p>{currentItem.reg_date}</p>
        <strong>
          <br />
          Практический опыт (в годах)
        </strong>
        <br />
        <p>{currentItem.reg_date}</p>
        <strong>
          <br />
          Дата вступления
        </strong>
        <br />
        <p>{currentItem.status}</p>
        <strong>
          <br />
          Дата исключения
        </strong>
        <br />
        <p>{currentItem.status}</p>

        <strong>
          <br />
          Должность
        </strong>
        <br />
        <p>{currentItem.status}</p>
        <strong>
          <br />
          Основание для привлечения личного труда
        </strong>
        <br />
        <p>{currentItem.status}</p>
        <strong>
          <br />
          Образование - разбить на поля Серия и номер, дата выдачи,
          регистрационный номер
        </strong>
        <br />
        <p>{currentItem.status}</p>
      </div>
      <div className="btn__card">
        <ButtonRegistry text="Список членов СДС" path={'/spisok2'} />
        <ButtonRegistry text="Сведения о компенсации" path={'/spisok3'} />
        <ButtonRegistry text="Выгрузить реестр членов СДС" path={'/spisok3'} />
      </div>
    </div>
  );
}

export default CardItem3;
