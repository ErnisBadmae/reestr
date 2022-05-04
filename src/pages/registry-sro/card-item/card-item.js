import React, { useEffect } from 'react';
import './card-item.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import itemData from '../../helpers/itemData';
import { ButtonRegistry } from '../../../components/buttons/button-registry/button-registry';
import { getView } from '../../../store/entries/actions';

function CardItem(props) {
    const { id } = useParams();
    // console.log( id);
    const dispatch = useDispatch();
    // const { currentItem } = useSelector((state) => state);
    const { currentCard } = useSelector((state) => state.entries);

    const currentItem = currentCard?.reduce((acc, el, i) => {
        return {
            ...acc,
            ...el,
        };
    }, {});
    console.log('finish', currentItem);

    //     const currentItem = currentCard ?? Object.assign({}, currentCard);
    //     console.log(currentItem, 'objectasssing');
    //     const currentItem = entries.find((el) => el.id_sds === id);
    useEffect(() => {
        dispatch(getView(id));
    }, []);

    return (
        <div className="card">
            <div className="card__title">
                <strong>{currentItem?.full_name}</strong>
            </div>
            <div className="card__body">
                <strong>Полное наименование СДС</strong>
                <br />
                <p>{currentItem?.reg_no}</p>
                <strong>
                    <br />
                    Регистрационный номер СДС
                </strong>
                <br />
                <p>{currentItem?.area}</p>
                <strong>
                    <br />
                    Дата регистрации (оно же Дата регистрации в реестре
                    Росстандарта)
                </strong>
                <br />
                <p>{currentItem?.reg_date}</p>
                <strong>
                    <br />
                    Организация, представившая СДС на регистрацию (Оно же
                    Держатель)
                </strong>
                <br />
                <p>{currentItem?.reg_comp}</p>
                <strong>
                    <br />
                    Сайт:
                </strong>
                <br />
                <p>{currentItem?.site}</p>
                <strong>
                    <br />
                    Область распространения системы (объекты сертификации)
                </strong>
                <br />
                <p>{currentItem?.reg_date}</p>
                <strong>
                    <br />
                    Изображение знака
                </strong>
                <br />
                <p>{currentItem?.reg_date}</p>
                <strong>
                    <br />
                    Статус
                </strong>
                <br />
                <p>{currentItem?.status || 'нет данных'}</p>
            </div>
            <div className="btn__card">
                <ButtonRegistry text="Список членов СДС" path={'/spisok2'} />
                <ButtonRegistry
                    text="Сведения о компенсации"
                    path={'/spisok3'}
                />
                <ButtonRegistry
                    text="Выгрузить реестр членов СДС"
                    path={'/spisok3'}
                />
            </div>
        </div>
    );
}

export default CardItem;
