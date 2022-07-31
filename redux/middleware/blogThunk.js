import actionTypes from "../actions/actionTypes";
import { firestore } from "../../firebase";
import { addDoc, collection, getDocs } from "@firebase/firestore";

export const getComments = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_STATE, payload: {status: "loading"} });
    const commentsCollection = collection(firestore, "comments");
    const commentsSnapshot = await getDocs(commentsCollection);
    const allComments = commentsSnapshot.docs.map((doc) => doc.data());
    dispatch({ type: actionTypes.GET_COMMENTS, payload: allComments });
  } catch (err) {
    dispatch({ type: actionTypes.SET_STATE, payload: {status: "error"} });
  }
};

export const submitComment = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_STATE, payload: {status: "submittingComment"} });
    const commentsCollection = collection(firestore, "comments");
    const response = await addDoc(commentsCollection, payload);
    dispatch({ type: actionTypes.POST_COMMENT, payload});
  } catch (err) {
    dispatch({ type: actionTypes.SET_STATE, payload: "ErrSubmit" });
  }
};
