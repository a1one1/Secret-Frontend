import React from 'react';
import nextPageImg from '../../../../assets/shop/Vector 1 (2).svg';
import styles from './Pagination.module.css';

interface IPogination {
  pageNumbers: number[];
  currentPage: number;
  paginate: (pageNumber: number) => void;
  nextPage: () => void;
}

export default function Pagination({
  pageNumbers,
  currentPage,
  paginate,
  nextPage,
}: IPogination) {
  return (
    <div className={styles.pagination}>
      <div className={styles.paginationDiv}>
        <ul className={styles.paginationUl}>
          {pageNumbers.map((number, index) => (
            <li
              className={
                currentPage === number
                  ? styles.paginationLiAct
                  : styles.paginationLi
              }
              key={index}
            >
              <button
                className={styles.paginationBtn}
                onClick={() => {
                  paginate(number);
                }}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
        <button onClick={nextPage} className={styles.nextPage}>
          <img src={nextPageImg} alt='nextPage' />
        </button>
      </div>
    </div>
  );
}
