import { NavLink, useNavigate } from "react-router-dom";
import "./NavBarPro.css";
import { useContext } from "react";
import { cartContext } from "../Root/Root";
const NavBarPro = () => {
  const { products } = useContext(cartContext);
  const navigate = useNavigate();
  const handleCart = () => {
    navigate("/deshboard");
  };
  const handleWishList = () => {
    navigate("/deshboard/whishlist");
  };
  const links = (
    <>
      <div className="flex gap-5 font-bold">
        <NavLink to={"/"}>Home</NavLink>
        {/* <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink> */}
        <NavLink to={"/statistics"}>Statistics</NavLink>
        <NavLink to={"/deshboard"}>Dashboard</NavLink>
        <NavLink to={"/self"}>History</NavLink>
        
      </div>
    </>
  );
  return (
    <div>
      <div className="flex justify-around items-center  bg-white rounded-t-lg text-black mt-5 mr-5 ml-5 p-2">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className=" flex gap-5">
          <div>
            <button onClick={handleCart} className="btn button rounded-full">
              <img
                className="w-[30px] h-[30px]"
                src={"https://i.ibb.co.com/phw968t/icons8-cart-50.png"}
              ></img>
            </button>

            {products.length > 0 && (
              <h1 className="bg-white text-black rounded-[100%] w-7 h-7 p-1 text-center relative -top-16 -right-10 font-bold">
                {products.length}
              </h1>
            )}
          </div>

          <button onClick={handleWishList} className="btn button rounded-full">
            <img
              className="w-[30px] h-[30px]"
              src={"https://i.ibb.co.com/Db6k2Bk/icons8-heart-50.png"}
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBarPro;
