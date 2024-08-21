// import { createContext } from "react";

// const UserContext = createContext();
// export default UserContext;
import { createContext, useContext, Dispatch, SetStateAction } from "react";
export type GlobalContent = {
  addedProducts: any[];
  setAddedProducts: Dispatch<SetStateAction<any[]>>;
};
export const MyGlobalContext = createContext<GlobalContent>({
  addedProducts: [], // set a default value
  setAddedProducts: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
