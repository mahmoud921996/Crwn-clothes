import React from "react";
import { connect, useSelector } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";
import {
  CollectionItemsContainer,
  CollectionPageContainer,
  CollectionTitle,
} from "./collection.styled";

import { useParams } from "react-router-dom";

const Collection = () => {
  const { collectionId } = useParams();

  const collection = useSelector(selectCollection(collectionId));
  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default Collection;
