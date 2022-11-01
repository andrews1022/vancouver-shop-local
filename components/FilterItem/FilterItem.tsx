import { useState } from "react";

// styled components
import * as S from "./FilterItem.styles";

// custom types
import type { BusinessCategory, InputChangeEvent } from "../../types/types";

// props type
type FilterItemProps = {
  category: BusinessCategory;
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
          type="checkbox"
          value={category}
        />
        {category}
      </S.Label>
    </li>
  );
};

export default FilterItem;
