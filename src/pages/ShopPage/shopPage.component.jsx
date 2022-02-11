import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import CollectionContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collection-overview/collection-overview.container";

const ShopPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [fetchCollectionsStartAsync]);
  return (
    <div className="shop-page">
      <Routes>
        <Route path="/*" element={<CollectionsOverviewContainer />} />
        <Route path={`:collectionId`} element={<CollectionContainer />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
