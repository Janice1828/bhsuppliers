import { createContext, useContext, Dispatch, SetStateAction } from "react";
export type GlobalContent = {
  addedProducts: any[];
  setAddedProducts: Dispatch<SetStateAction<any[]>>;
  checkoutSelected: any[];
  setCheckoutSelected: Dispatch<SetStateAction<any[]>>;
  totalQty: number;
  setTotalQty: Dispatch<SetStateAction<number>>;
  total: number;
  setTotal: Dispatch<SetStateAction<number>>;
  subTotal: number;
  setSubTotal: Dispatch<SetStateAction<number>>;
};
export const MyGlobalContext = createContext<GlobalContent>({
  addedProducts: [],
  setAddedProducts: () => {},
  checkoutSelected: [],
  setCheckoutSelected: () => {},
  totalQty: 0,
  setTotalQty: () => {},
  total: 0,
  setTotal: () => {},
  subTotal: 0,
  setSubTotal: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
