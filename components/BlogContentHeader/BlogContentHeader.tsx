import React from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Input from '../Input/Input';

import { categories, authors } from '../../lib/constants';
import styles from './blogContentHeader.module.css';

export default function BlogContentHeader() {
  const router = useRouter();

  const inputSearchFieldHandler = (e: any) => {
    const value = e.target.value;
    console.log(value);
  };

  const onChangeCategory = (categoryId: string) => {
    router.push(`/category/${categoryId}`);
  };

  const onChangeAuthor = (authorName: string) => {
    router.push(`/author/${authorName}`);
  };

  const findPostsByQuery = () => {
    console.log(111);
  };

  const searchIcon = (
    <div
      className={styles.searchIcon}
      onClick={findPostsByQuery}
    >
      <FontAwesomeIcon
        icon={faSearch}
        color='#fff'
      />
    </div>
  );

  return (
    <div className={styles.blogContentHeaderContainer}>
      <Input
        placeholder='Поиск статей...'
        classNames={styles.searchField}
        onChange={inputSearchFieldHandler}
        addonAfter={searchIcon}
      />

      <div className={styles.filtersContainer}>
        <Input
          classNames={styles.selectableField}
          selectOption={onChangeCategory}
          data={categories}
          readOnly
        />

        <Input
          classNames={styles.selectableField}
          selectOption={onChangeAuthor}
          data={authors}
          readOnly
        />
      </div>
    </div>
  );
}