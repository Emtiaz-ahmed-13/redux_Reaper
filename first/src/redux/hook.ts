import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStore } from "./store";

export const useAppSelector = useSelector.withTypes<RootStore>();

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();