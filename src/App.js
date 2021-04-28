import { createContext, useState } from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import { useStateValue } from "./StateProvider";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  // console.log(user);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {" "}
      <div className="app">
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
              {/* wigdets */}
            </div>
          </>
        )}
      </div>
    </UserContext.Provider>
  );
}

export default App;
