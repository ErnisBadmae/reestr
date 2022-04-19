import React, { useEffect } from 'react';
import './card-item.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import itemData from '../../helpers/itemData';

function CardItem(props) {
  const params = useParams();
  console.log('parans', params);
  const dispatch = useDispatch();
  const { currentItem } = useSelector((state) => state);

  useEffect(() => {
    dispatch(itemData(params.id));
  }, []);

  console.log(currentItem)
  ;
  // useEffect(() => {
  //   // dispatch({ type: , payload: params.id });
  // }, [dispatch, params.id]);

  return (
    <div className="card">
      <div className="card__title">
        <strong>
          Саморегулируемая организация Ассоциация профессиональных
          проектировщиков Сибири
        </strong>
      </div>
      <div className="card__body">
        <strong>
          Регистрационный номер в государственном реестре саморегулируемых
          организаций:
        </strong>
      </div>
      <div className="btn__card">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </div>
  );
}

export default CardItem;
