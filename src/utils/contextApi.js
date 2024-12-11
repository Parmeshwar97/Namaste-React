import { createContext } from "react";

//! Creating the context.
const userContext = createContext({
  user: "Default User",
});

export default userContext;
