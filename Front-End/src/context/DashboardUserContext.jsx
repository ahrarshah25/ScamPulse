import React, { createContext, useEffect, useState } from "react";
import checkUserAuth from "../utils/checkUserAuth";

export const UserDataContext = createContext();

const DashboardUserContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const auth = await checkUserAuth();
        setCurrentUser(auth);
      } catch (error) {
        console.log("Error MSG: " + error.message);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);

  const user = currentUser;

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="relative flex items-center justify-center w-16 h-16 border-4 border-teal-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-teal-600 font-medium text-lg">Loading...</p>
      </div>
    );
  }
  return (
    <UserDataContext.Provider value={user}>
        {children}
    </UserDataContext.Provider>
  );
};

export default DashboardUserContext;
