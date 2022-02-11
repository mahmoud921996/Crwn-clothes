import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);
//arr of obj
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections =>  collections[collectionUrlParam]
  );


  export const selectIsCollectionFetching=createSelector(
    [selectShop],
    shop => shop.isFetched
  )


  export const selectIsCollectionsLoaded=createSelector(
    [selectShop],
    shop => !!shop.collections
  )