import { RouterProvider } from "react-router-dom";
import router from "./router/index";
import { useContext, useState } from "react";
import { UserContext } from './Context/user.js';

function App() {
     const defaultUser = useContext(UserContext);
     const [user, setUser] = useState(defaultUser);
     const contextObj = { user, setUser };

  return (
    <>
      <UserContext.Provider value={contextObj}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
}

export default App
