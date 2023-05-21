import { setAccount } from "@redux/slices/accountSlice";
import { takeLeading } from "redux-saga/effects";

function* todoRequestSaga() {}

export default [takeLeading(setAccount, todoRequestSaga)];
