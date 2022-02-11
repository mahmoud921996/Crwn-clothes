import React from "react";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { CollectionsOverviewContainer } from "./collection-overview.styled";
import { useSelector } from "react-redux";
const CollectionOverView = () => {
  const collections = useSelector(selectCollectionsForPreview);
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

export default CollectionOverView;
