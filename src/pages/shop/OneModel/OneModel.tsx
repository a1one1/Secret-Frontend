import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { iModels } from '../../../redux/store/types/IModels';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import styles from './OneModel.module.css';
import useActions from '../../../redux/hooks/useActionUser';
import { useDispatch } from 'react-redux';
import { userActionTypes } from '../../../redux/store/types/user';
import { IUser } from '../../../redux/store/types/IUser';

export default function OneModel() {
  const { id, login, basket } = useTypedSelector(state => state.user);
  const dispatch = useDispatch();

  const [oneModel, setOneModel] = useState<iModels>();
  const [indexModel, setIndexModel] = useState<any>(0);
  const [indexSize, setIndexSize] = useState<any>(0);
  const [modelInput, setModelInput] = useState<String>('');
  const [modelAddBasket, setModelAddBasket] = useState<any>({ amount: 1 });
  const [restSize, setRestSize] = useState<String>('');
  const [inputDisablet, setInputDisabled] = useState<Boolean>(true);

  useEffect(() => {
    const modelParse = localStorage.getItem('model');
    setOneModel(JSON.parse(modelParse!));
  }, []);

  useEffect(() => {
    setModelAddBasket({
      ...modelAddBasket,
      _id: oneModel?._id,
      modelName: oneModel?.name,
      color: oneModel?.colors[0].color,
    });
  }, [oneModel]);

  function handleColor(model: any, index: number) {
    setInputDisabled(true);
    setModelInput('');
    setRestSize('');
    setIndexSize(0);
    setModelAddBasket({
      ...modelAddBasket,
      modelName: oneModel?.name,
      size: null,
      color: model.color,
    });

    setIndexModel(index);
  }

  function handleSize(sizeModel: any, index: number) {
    setModelInput('1');

    setInputDisabled(false);

    if (modelAddBasket.color) {
      setRestSize(`Остаток на складе: ${sizeModel.rest}`);
    }

    const { size, rest } = sizeModel;

    setModelAddBasket({
      ...modelAddBasket,
      size: { size, rest },
    });

    setIndexSize(index + 1);
  }

  async function addBasket() {
    if (!id) {
      const localStorageGet = localStorage.getItem('basket');
      const lsParse: IUser[] = JSON.parse(localStorageGet!);

      if (!localStorageGet) {
        localStorage.removeItem('basket');
        localStorage.setItem('basket', JSON.stringify([modelAddBasket]));

        dispatch({
          type: userActionTypes.ADD_USER,
          payload: [modelAddBasket],
        });
      }
      if (lsParse) {
        const lsAddBasket: IUser[] = [...lsParse!, modelAddBasket];

        localStorage.setItem('basket', JSON.stringify(lsAddBasket));

        dispatch({
          type: userActionTypes.ADD_USER,
          payload: lsAddBasket,
        });
      }
    } else {
      console.log('dsa');
    }
  }

  return (
    <section className={styles.OneModel}>
      <h3>{oneModel?.name}</h3>
      <div className={styles.shopRoutes}>
        <Link to={'/'}>Главная</Link>
        <div className={styles.line}>—</div>
        <div className={styles.shopItem}>
          <Link to={'/shop'}>{oneModel?.categoriesId.name}</Link>
        </div>
        <div className={styles.line}>—</div>
        <div className={styles.shopItemGrey}>
          <div>{oneModel?.name}</div>
        </div>
      </div>
      <div className={styles.oneModelDiv}>
        <div className={styles.imgOneModel}>
          <img src={oneModel?.colors[indexModel].img.toString()} alt='' />
        </div>
        <div className={styles.oneModelBody}>
          <div className={styles.oneModelPrice}>
            {oneModel?.discount ? (
              <div>
                <p className={styles.oneModelPriceItem1p}>
                  ${oneModel?.discount.toString()}
                </p>
                <p className={styles.oneModelPriceItem2p}>
                  ${oneModel?.price.toString()}
                </p>
              </div>
            ) : (
              <p className={styles.oneModelPriceItem1p}>
                ${oneModel?.price.toString()}
              </p>
            )}
          </div>
          <div className={styles.oneModelColor}>
            <p>Выберите цвет</p>
            <div>
              {oneModel?.colors.map((model: any, index: number) => (
                <button
                  onClick={() => {
                    handleColor(model, index);
                  }}
                  style={{
                    background: model.color.toString(),
                    border: index === indexModel ? '3px solid #6e9c9f' : 'none',
                  }}
                ></button>
              ))}
            </div>
          </div>
          <div className={styles.oneModelSize}>
            <p>Выберите размер</p>
            <div>
              {oneModel?.colors[indexModel].sizesModel.map(
                (sizeModel: any, index: number) => {
                  if (sizeModel.rest !== 0) {
                    return (
                      <button
                        onClick={() => {
                          handleSize(sizeModel, index);
                        }}
                        className={
                          index + 1 == indexSize
                            ? styles.sizeBtnAct
                            : styles.sizeBtn
                        }
                      >
                        {sizeModel.size}
                      </button>
                    );
                  }
                }
              )}
            </div>
          </div>

          <div className={styles.addBasket}>
            <div>
              <input
                disabled={Boolean(inputDisablet)}
                value={modelInput.toString()}
                onChange={e => {
                  setModelInput(e.target.value);

                  e.target.value > modelAddBasket.size.rest
                    ? setModelInput(modelAddBasket.size.rest)
                    : null;

                  setModelAddBasket({
                    ...modelAddBasket,
                    amount:
                      e.target.value > modelAddBasket.size.rest
                        ? Number(modelAddBasket.size.rest)
                        : Number(e.target.value),
                  });
                }}
                type='number'
              />
            </div>
            <div>
              <button
                disabled={Boolean(inputDisablet)}
                onClick={async () => {
                  await addBasket();
                }}
              >
                Добавить в корзину
              </button>
            </div>
          </div>
          <div className={styles.modelRest}>
            <p>{restSize}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
