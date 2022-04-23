// theme
import theme from '../styles/theme';

// custom types
import type { TagMode } from '../types/types';

const setTagBackgroundColor = (mode: TagMode) => {
  switch (mode) {
    case 'category': {
      return theme.colors.bahamaBlue;
    }

    case 'directions': {
      return theme.colors.scooter;
    }

    case 'link': {
      return theme.colors.scooter;
    }

    default: {
      return 'grey';
    }
  }
};

export default setTagBackgroundColor;
