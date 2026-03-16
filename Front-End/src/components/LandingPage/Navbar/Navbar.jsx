import React, { useState, useEffect, useContext } from "react";
import { Menu, X, LogIn, UserPlus, LogOut, ShieldUser } from "lucide-react";
import Logo from "./Logo";
import Tabs from "./Tabs";
import Button from "./Button";
import { navigate } from "../../../hooks/useNavigate";
import { UserDataContext } from "../../../context/DashboardUserContext";
import { userLogout } from "../../../api/auth/logout.api";
import ProfileCard from "./ProfileCard";
import useLoading from "../../../hooks/useLoading";
import Swal from "sweetalert2";

const Navbar = () => {
  const user = useContext(UserDataContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useLoading(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleSignOut = async (e) => {
    e.stopPropagation();
    try {
      setLoading(true);
      const res = await userLogout();
      setLoading(false);
      if (res.data?.success) {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 2000,
          customClass: { popup: "swal-margin-top" },
        }).then(() => navigate("/login"));
      } else {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title: res.data.message,
          showConfirmButton: false,
          timer: 2000,
          customClass: { popup: "swal-margin-top" },
        });
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Error: " + error.message,
        showConfirmButton: false,
        timer: 2000,
        customClass: { popup: "swal-margin-top" },
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
       
        <Logo />

        <div className="hidden md:block">
          <Tabs />
        </div>

        <div className="hidden md:flex items-center gap-4">
          {!user && (
            <>
              <Button
                icon={LogIn}
                name="Login"
                variant="outline"
                onClick={() => navigate("/login")}
              />
              <Button
                icon={UserPlus}
                name="Sign Up"
                onClick={() => navigate("/signup")}
              />
            </>
          )}

          {user && (
            <div className="flex items-center gap-4">
              <ProfileCard avatar={user.avatar} />
              <Button
                icon={LogOut}
                name="Logout"
                variant="outline"
                onClick={handleSignOut}
              />
            </div>
          )}
        </div>

        <button
          className="md:hidden text-gray-700 hover:text-teal-600 transition-colors"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between p-5 border-b">
          <Logo />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700 hover:text-teal-600 transition-colors"
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-4">
          <Tabs mobile />

          {!user && (
            <>
              <Button
                icon={LogIn}
                name="Login"
                onClick={() => navigate("/login")}
              />
              <Button
                icon={UserPlus}
                name="Sign Up"
                variant="outline"
                onClick={() => navigate("/signup")}
              />
            </>
          )}

          {user && (
            <>
              <Button
                icon={ShieldUser}
                name="Dashboard"
                onClick={() => navigate("/dashboard")}
              />
              <Button
                icon={LogOut}
                name="Logout"
                variant="outline"
                onClick={handleSignOut}
              />
            </>
          )}
        </div>
      </aside>
    </header>
  );
};

export default Navbar;