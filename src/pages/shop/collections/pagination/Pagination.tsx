import React from 'react';
import nextPage from '../../../../assets/shop/Vector 1 (2).svg';
import styles from './pagination.module.css';

interface IPogination {
  modelsPerPage: number;
  totalModels: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
  nextPage: () => void;
}

export default function Pagination(props: IPogination) {
  const pageNumbers: any[] = [];

  for (let i = 1; i < Math.ceil(props.totalModels / props.modelsPerPage); i++) {
    pageNumbers.push(i);
    
  }

  return (
    <div className={styles.pagination}>
      <div className={styles.paginationDiv}>
        <ul className={styles.paginationUl}>
          {pageNumbers.map(number => (
            <li
              className={
                props.currentPage === number
                  ? styles.paginationLiAct
                  : styles.paginationLi
              }
              key={number}
            >
              <button
                className={styles.paginationBtn}
                onClick={() => {
                  props.paginate(number);
                }}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
        <button onClick={props.nextPage} className={styles.nextPage}>
          <img src={nextPage} alt='nextPage' />
        </button>
      </div>
    </div>
  );
}
