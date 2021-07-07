import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './input.module.css';

interface DataItem {
  id: string,
  value: string,
}

interface InputProps {
  classNames?: string,
  defaultValue?: string,
  placeholder?: string,
  addonAfter?: React.ReactElement,
  data?: DataItem[],
  selectOption?: (id: string) => void,
  onChange?: (e: any) => void,
  readOnly?: boolean,
}

export default function Input({
  classNames,
  data,
  defaultValue = '',
  placeholder,
  addonAfter,
  selectOption,
  onChange,
  readOnly
}: InputProps) {
  const [fieldValue, setValue] = useState<string>(data ? data[0].value : defaultValue);
  const [isOpen, toggleOpen] = useState(false);

  const clickHandler = (e: any) => {
    if (data && data.length > 0) {
      toggleOpen(prev => !prev);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <OutsideClickHandler
        onOutsideClick={(e: any) => {
          toggleOpen(false);
        }}
      >
        <input
          className={`
            ${styles.input}
            ${classNames}
          `}
          readOnly={readOnly}
          type='text'
          placeholder={placeholder}
          value={fieldValue}
          onChange={(e) => {
            console.log('HERE');
            setValue(e.target.value);
            onChange && onChange(e);
          }}
          onClick={clickHandler}
        />

        { addonAfter && addonAfter }

        {
          (data && data.length > 0) &&
          <>
            <FontAwesomeIcon
              icon={faChevronDown}
              size='xs'
              className={`
                ${styles.arrowDown}
                ${isOpen && styles.arrowDownActive}
              `}
            />

            <ul
              className={`
                ${styles.selectContainer}
                ${isOpen && styles.selectContainerOpened}
              `}
            >
              {
                data.map(({ id, value }) => {
                  const isSelectedItem = value === fieldValue;

                  return (
                    <li
                      key={id}
                      className={`
                        ${styles.selectItem}
                        ${isSelectedItem && styles.selectItemActive}
                      `}
                      onClick={() => {
                        setValue(value);
                        toggleOpen(false);
                        selectOption && selectOption(id);
                      }}
                    >
                      {value}
                    </li>
                  );
                })
              }
            </ul>
          </>
        }
      </OutsideClickHandler>
    </div>
  );
}