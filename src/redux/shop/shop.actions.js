import {
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
} from "./shop.types";
import { collection,getDocs } from "firebase/firestore";

import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionsFailure = (err) => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload:err
});


export const fetchCollectionsStartAsync=()=>{
    return dispatch =>{
        const collectionRef= collection(firestore,'collections')
        dispatch(fetchCollectionsStart())
       getDocs(collectionRef).then(snapshot =>{
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionMap));
        }).catch(error => dispatch(fetchCollectionsFailure(error)));
    }
}
