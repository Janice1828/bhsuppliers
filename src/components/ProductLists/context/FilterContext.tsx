import { createContext, useContext, Dispatch, SetStateAction } from "react";
export type productListFilterContent = {
  displayingProducts: any[];
  setDisplayingProducts: Dispatch<SetStateAction<any[]>>;
};
export const ProductListsContext = createContext<productListFilterContent>({
  displayingProducts: [],
  setDisplayingProducts: () => {},
});
export const ProductListsFilterContext = () => useContext(ProductListsContext);
