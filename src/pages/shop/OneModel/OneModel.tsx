import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { iModels } from '../../../redux/store/types/IModels';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import styles from './OneModel.module.css';
import useActions from '../../../redux/hooks/useActionUser';

export default function OneModel() {
  const { categories, models } = useTypedSelector(state => state.model);
  const [oneModel, setOneModel] = useState<iModels>();
  const [indexModel, setIndexModel] = useState<any>(0);
  const [indexSize, setIndexSize] = useState<any>(0);
  const [modelInput, setModelInput] = useState<string>('');
  const [modelAddBasket, setModelAddBasket] = useState<any>({ amount: 1 });
  const [restSize, setRestSize] = useState<string>('');
  const [inputDisablet, setInputDisabled] = useState<boolean>(true);
  const [lineCard, setLineCard] = useState<number>();

  const { addModel } = useActions();

  useEffect(() => {
    const modelParse = localStorage.getItem('model');

    setOneModel(JSON.parse(modelParse!));
  }, []);

  useEffect(() => {
    setModelAddBasket({
      ...modelAddBasket,
      price: oneModel?.discount || oneModel?.price,
      _id: oneModel?._id,
      modelName: oneModel?.name,
      color: oneModel?.colors[0]._id,
      modelImg: oneModel?.colors[0].modelImgItem,
      img: oneModel?.colors[0].imgItem,
    });
  }, [oneModel]);

  function handleColor(model: any, index: number) {
    setInputDisabled(true);
    setModelInput('');
    setRestSize('');
    setIndexSize(0);
    setModelAddBasket({
      ...modelAddBasket,
      modelImg: model.modelImgItem,
      img: model.imgItem,
      modelName: oneModel?.name,
      size: null,
      color: model.color,
      colorId: model._id,
    });

    setIndexModel(index);
  }

  function handleSize(sizeModel: any, index: number) {
    const { size, rest, _id } = sizeModel;

    setModelInput('1');

    setInputDisabled(false);

    if (modelAddBasket.color) {
      setRestSize(`Остаток на складе: ${sizeModel.rest}`);
    }

    setModelAddBasket({
      ...modelAddBasket,
      uniqueId: _id,
      size: { size, rest },
    });

    setIndexSize(index + 1);
  }

  async function addBasket() {
    addModel(modelAddBasket);
  }

  function handleModel(model: iModels) {
    localStorage.setItem('model', JSON.stringify(model));

    setOneModel(model);
  }

  return oneModel ? (
    <section className={styles.OneModel}>
      <h3>{oneModel?.name}</h3>
      <div className={styles.shopRoutes}>
        <Link className={styles.mainLink} to={'/'}>
          Главная
        </Link>
        <div className={styles.line}>—</div>
        <div className={styles.shopItem}>
          <Link className={styles.categoriesName} to={'/shop'}>
            {oneModel?.categoriesId.name}
          </Link>
        </div>
        <div className={styles.line}>—</div>
        <div className={styles.shopItemGrey}>
          <div>{oneModel?.name}</div>
        </div>
      </div>
      <div className={styles.oneModelDiv}>
        <div className={styles.imgOneModel}>
          <img
            className={styles.imgMain}
            src={oneModel?.colors[indexModel].modelImgItem.toString()}
            alt=''
          />
          <div className={styles.lineCard}>
            {oneModel?.colors[indexModel].imgItem.map((_, index) => (
              <div className={styles.lineCard_div}>
                <img
                  className={
                    lineCard === index
                      ? `${styles.lineCardImg} ${styles.lineCardImgActive}`
                      : `${styles.lineCardImg}`
                  }
                  src='https://svgur.com/i/puM.svg'
                  alt=''
                />
              </div>
            ))}
          </div>
          <div className={styles.cardImg}>
            {oneModel?.colors[indexModel].imgItem.map((img, index) => (
              <div
                onMouseEnter={() => {
                  setLineCard(index);
                }}
                onMouseLeave={() => {
                  setLineCard(undefined);
                }}
                key={index}
                className={styles.cardImg_div}
              >
                <img src={img.toString()} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.oneModelBody}>
          <div className={styles.oneModelPrice}>
            {oneModel?.discount ? (
              <div>
                <p className={styles.oneModelPriceItem1p}>
                  {oneModel?.discount.toString()} ₽
                </p>
                <p className={styles.oneModelPriceItem2p}>
                  {oneModel?.price.toString()}₽
                </p>
              </div>
            ) : (
              <p className={styles.oneModelPriceItem1p}>
                {oneModel?.price.toString()} ₽
              </p>
            )}
          </div>
          <div className={styles.oneModelColor}>
            <p>Выберите цвет</p>
            <div>
              {oneModel?.colors.map((model: any, index: number) => (
                <button
                  key={model._id}
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
                        key={sizeModel._id}
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
                disabled={inputDisablet}
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
      <div className={styles.linkModel}>
        <h4>Связанные товары</h4>
        <div className={styles.collectionsShop}>
          {models.map(model => {
            if (oneModel.categoriesId.name == model.categoriesId.name) {
              if (oneModel._id !== model._id) {
                return (
                  <div
                    onClick={() => {
                      handleModel(model);
                    }}
                    key={model._id}
                    className={styles.collection}
                  >
                    <div className={styles.collectionDiv}>
                      <NavLink to={`/oneModel`}>
                        <img src={model.modelImg} alt='' />
                        <div className={styles.cardImg}>
                          {
                            <div className={styles.cardImg_div}>
                              <img src={model.img[0].toString()} />
                            </div>
                          }
                        </div>
                      </NavLink>
                    </div>
                    <h4>{model.name}</h4>
                    <span>{model.price.toString()} ₽</span>
                  </div>
                );
              } else {
                return (
                  <div className={styles.zeroLinkModel}>
                    Пока нет связанных товаров
                  </div>
                );
              }
            }
          })}
        </div>
      </div>
    </section>
  ) : (
    <div className={styles.oneModelNull}></div>
  );
}
