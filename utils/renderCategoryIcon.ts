import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faPaintBrush,
  faPumpSoap,
  faBook,
  faGem,
  faCamera,
  faBirthdayCake,
  faCut,
  faShoppingBag,
  faTshirt,
  faPizzaSlice,
  faGamepad,
  faCandyCane,
  faHome,
  faPen,
  faStore,
  faDog,
  faVideo,
  faClipboardList,
  faUmbrellaBeach,
  faHeartbeat
} from "@fortawesome/free-solid-svg-icons";

const renderCategoryIcon = (category: string) => {
  switch (category) {
    case "Accessories": {
      return faShoppingBag;
    }

    case "Art": {
      return faPaintBrush;
    }

    case "Bath & Cosmetics": {
      return faPumpSoap;
    }

    case "Books": {
      return faBook;
    }

    case "Candles": {
      return faBirthdayCake;
    }

    case "Craft": {
      return faCut;
    }

    case "Fashion": {
      return faTshirt;
    }

    case "Film Equipment": {
      return faVideo;
    }

    case "Food & Drinks": {
      return faPizzaSlice;
    }

    case "Games & Hobbies": {
      return faGamepad;
    }

    case "Holidays": {
      return faCandyCane;
    }

    case "Home & Kitchen": {
      return faHome;
    }

    case "Jewelry": {
      return faGem;
    }

    case "Literary": {
      return faPen;
    }

    case "Marketplaces": {
      return faStore;
    }

    case "Pets": {
      return faDog;
    }

    case "Photography": {
      return faCamera;
    }

    case "Things to Do": {
      return faClipboardList;
    }

    case "Vacation": {
      return faUmbrellaBeach;
    }

    case "Wellness": {
      return faHeartbeat;
    }

    default: {
      return faReact;
    }
  }
};

export default renderCategoryIcon;
