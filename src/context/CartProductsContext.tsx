import { createContext, useContext, Dispatch, SetStateAction } from "react";
export type GlobalContent = {
  addedProducts: any[];
  setAddedProducts: Dispatch<SetStateAction<any[]>>;
};
export const MyGlobalContext = createContext<GlobalContent>({
  addedProducts: [],
  setAddedProducts: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);