import React, { useState } from 'react';

// types
import type { BusinessCategory, InputChangeEvent } from '../../types/types';

// styled components
import * as S from './styles';

// props
type FilterItemProps = {
  category: BusinessCategory;
  // eslint-disable-next-line no-unused-vars
  setFilters: (event: InputChangeEvent) => void;
};

const FilterItem = ({ category, setFilters }: FilterItemProps) => {
  const [isChecked, setIsChecked] = useState(false);

  // event functions
  const checkHandler = (event: InputChangeEvent) => {
    setFilters(event);

    setIsChecked((prevState) => !prevState);
  };

  return (
    <li>
      <S.Label htmlFor={`Category Filter ${category}`} isChecked={isChecked}>
        <S.Check
          id={`Category Filter ${category}`}
          onChange={checkHandler}
          type='checkbox'
          value={category}
        />
        {category}
      </S.Label>
    </li>
  );
};

export default FilterItem;
