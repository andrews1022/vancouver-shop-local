// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

// components
import ExternalLink from "../ExternalLink/ExternalLink";

// styled components
import { Copy } from "../UI/Copy";
import * as S from "./BusinessesItem.styles";

// utils
import renderCategoryIcon from "../../utils/renderCategoryIcon";

// constants
import { SLUG_GOOGLE_MAPS } from "../../constants/urls";

// custom types
import type { Business } from "../../types/types";

// props type
type BusinessesItemProps = {
  business: Business;
};

const BusinessesItem = ({ business }: BusinessesItemProps) => (
  <S.Wrapper>
    <S.Heading>{business.name}</S.Heading>

    <Copy>{business.description}</Copy>

    <S.TagList>
      <S.TagItem mode="category">
        {business.category}{" "}
        <FontAwesomeIcon icon={renderCategoryIcon(business.category)} size="1x" />
      </S.TagItem>

      <S.TagItem mode="link">
        <ExternalLink href={business.link}>
          Visit Site <FontAwesomeIcon icon={faDesktop} size="1x" />
        </ExternalLink>
      </S.TagItem>

      {business.location ? (
        <S.TagItem mode="directions">
          <ExternalLink href={`${SLUG_GOOGLE_MAPS}${business.location.replace(/ /g, "+")}`}>
            Get Directions <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />
          </ExternalLink>
        </S.TagItem>
      ) : null}
    </S.TagList>
  </S.Wrapper>
);

export default BusinessesItem;
