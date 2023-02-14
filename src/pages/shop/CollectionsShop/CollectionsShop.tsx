import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { iModels } from '../../../redux/store/types/IModels';
import styles from './CollectionsShop.module.css';
import Pagination from './Pagination/Pagination';
import ContentLoader from 'react-content-loader';
import SkeletonShop from './SkeletonShop';

interface CollectionsProps {
  currentPage: number;
  setCurrentPage: (value: any) => void;
  modelsPerPage: number;
}

export default function Collections({
  modelsPerPage,
  currentPage,
  setCurrentPage,
}: CollectionsProps): JSX.Element {
  const { error, loading, modelsFilter, models } = useTypedSelector(
    state => state.model
  );

  function handleModel(model: iModels) {
    localStorage.setItem('model', JSON.stringify(model));
  }

  const lastModelsIndex = currentPage * modelsPerPage;
  const firstModelsIndex = lastModelsIndex - modelsPerPage;

  function paginate(pageNumber: number) {
    return setCurrentPage(pageNumber);
  }

  const nextPage = () => {
    const currentPages = Math.ceil(models.length / modelsPerPage) - 1;

    if (currentPages >= currentPage) {
      return setCurrentPage((prev: number) => prev + 1);
    }
  };

  const pageNumbers: any[] = [];

  for (let i = 1; i <= Math.ceil(models.length / modelsPerPage); i++) {
    pageNumbers.push(i);
  }

  let currentModels = modelsFilter.slice(firstModelsIndex, lastModelsIndex);

  return (
    <section className={styles.CollectionsShopSection}>
      <div>
        <div className={styles.showCollections}>
          <p>
            {loading ? (
              <ContentLoader
                speed={2}
                width={130}
                height={30}
                viewBox='0 0 130 30'
                backgroundColor='#f3f3f3'
                foregroundColor='#ecebeb'
              >
                <rect x='-8' y='-1' rx='0' ry='0' width='150' height='30' />
              </ContentLoader>
            ) : modelsFilter.length == 0 ? null : null ||
              modelsFilter.length == 1 ? (
              ` Показан: ${modelsFilter.length} товар`
            ) : null || modelsFilter.length == 2 ? (
              ` Показано: ${modelsFilter.length} товара`
            ) : null || modelsFilter.length == 3 ? (
              ` Показано: ${modelsFilter.length} товара`
            ) : null || modelsFilter.length == 4 ? (
              ` Показано: ${modelsFilter.length} товара`
            ) : (
              null ||
              (pageNumbers[1] === 2
                ? ` Показано: ${currentModels.length} из ${modelsFilter.length} товаров`
                : ` Показано: ${modelsFilter.length} товаров`)
            )}
          </p>
        </div>
        <div className={styles.collectionsShop}>
          {loading ? (
            [...new Array(3)].map((_, index) => (
              <div key={index} className={styles.collection}>
                <div className={styles.collectionDiv}>
                  <SkeletonShop />
                </div>
              </div>
            ))
          ) : modelsFilter.length <= 0 ? (
            <section>
              <div className={styles.zeroModels}>
                <div>В каталоге пока нет товаров</div>
              </div>
            </section>
          ) : (
            currentModels.map(model => (
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
                {model.discount ? (
                  <div className={styles.modelDiscountDiv}>
                    <span
                      className={`${styles.modelPrice} ${styles.discountTrue}`}
                    >
                      {model.price.toString()} ₽
                    </span>
                    <span className={styles.modelDiscount}>
                      {model.discount.toString()} ₽
                    </span>
                  </div>
                ) : (
                  <span className={styles.modelPrice}>
                    {model.price.toString()} ₽
                  </span>
                )}
              </div>
            ))
          )}
        </div>
        <div className={styles.showCollections}>
          <p>
            {modelsFilter.length <= 9
              ? ''
              : ` Показано: ${currentModels.length} из ${modelsFilter.length} товаров`}
          </p>
        </div>
        {modelsFilter.length > 9 ? (
          <Pagination
            nextPage={nextPage}
            paginate={paginate}
            pageNumbers={pageNumbers}
            currentPage={currentPage}
          />
        ) : (
          ''
        )}
      </div>
    </section>
  );
}
