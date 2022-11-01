// theme
import theme from "../styles/theme";

// custom types
import type { TagMode } from "../types/types";

const exhaustiveMatchingGuard = (action: never): never => {
  throw new Error(`Should not have reached here. Incorrect action used: ${action}`);
};

const setTagBackgroundColor = (mode: TagMode) => {
  switch (mode) {
    case "category": {
      return theme.colors.bahamaBlue;
    }

    case "directions": {
      return theme.colors.scooter;
    }

    case "link": {
      return theme.colors.scooter;
    }

    default: {
      return exhaustiveMatchingGuard(mode);
    }
  }
};

export default setTagBackgroundColor;
