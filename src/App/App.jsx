// import { getDatabase, ref, child, get } from "firebase/database";
import firebase from "firebase/compat/app";
import firebaseConfig from "../firebaseConfig.js";
// import firebaseConfig from "../../firebaseConfig.js";
import "firebase/compat/database";
import { useQuery, useMutation, useQueryClient } from "react-query";

import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { useEffect } from "react";

import Home from "../Pages/Home/Home";
import Catalog from "../Pages/Catalog/Catalog";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import NavAlt from "../Components/Alt/Nav/Nav";
import FooterAlt from "../Components/Alt/Footer/Footer";
import Cabinet from "../Pages/Cabinet/Cabinet";
import Cart from "../Pages/Cart/Cart";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Policy from "../Pages/Policy/Policy";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Favourites from "../Pages/Favourites/Favourites";
import Header from "../Components/Header/Header";
import { getDatabase, ref, set, onValue, get, child } from "firebase/database";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function App() {
  const database = getDatabase();

  let data = null;

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.database();

  const starCountRef = ref(database);
  onValue(starCountRef, (snapshot) => {
    data = snapshot.val();
  });

  async function getAllUsers() {
    const snapshot = await db.ref("users").once("value");
    return snapshot.val();
  }

  const [user, setUser] = useState();
  const [showNavFooter, setShowNavFooter] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setShowNavFooter(false);
        navigate("/login");
        setUser({
          email: null,
          displayName: null,
        });
        return;
      } else {
        setShowNavFooter(true);
      }
      setUser({
        displayName: currentUser.displayName,
        email: currentUser.email,
      });
      onValue(starCountRef, (snapshot) => {
        data = snapshot.val();
        const dataArr = Object.values(data.users);
        dataArr.forEach(function (item) {
          const dataEmail = item.email;
          if (currentUser.email == dataEmail) {
            <Cabinet item={item}/>
          }
        });
      });
    });
  }, []);

  const dbRef = ref(getDatabase());
  get(child(dbRef, `users`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        //
      } else {
        //
      }
    })
    .catch((error) => {
      console.error(error);
    });
  // для firebase
  const [likeCount, setLikeCount] = useState(0);
  const [cartCounter, setCartCounter] = useState([]);
  const [favCounter, setFavCounter] = useState([]);

  useEffect(() => {
    const cartData = localStorage.getItem("cartCounter");
    if (cartData) {
      const parsedCartData = JSON.parse(cartData);
      setCartCounter(parsedCartData);
    }

    const favData = localStorage.getItem("favCounter");
    if (favData) {
      const parsedFavData = JSON.parse(favData);
      setFavCounter(parsedFavData);
    }
  }, []);

  if (!user) {
    return <h1>Загрузка...</h1>;
  }
  return (
    <div>
      {(showNavFooter && (
        <Nav likeCount={likeCount} cartCounter={cartCounter} />
      )) || <NavAlt />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/Catalog"
          element={
            <Catalog
              setLikeCount={setLikeCount}
              likeCount={likeCount}
              cartCounter={cartCounter}
              setCartCounter={setCartCounter}
              favCounter={favCounter}
              setFavCounter={setFavCounter}
              data={data}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart cartCounter={cartCounter} setCartCounter={setCartCounter} />
          }
        />
        <Route
          path="/cabinet"
          element={
            <Cabinet/>
          }
        />

        <Route path="/aboutus" element={<AboutUs />} />

        <Route
          path="/policy"
          element={
            <Policy cartCounter={cartCounter} setCartCounter={setCartCounter} />
          }
        />

        <Route
          path="/register"
          element={
            <Register
              cartCounter={cartCounter}
              setCartCounter={setCartCounter}
            />
          }
        />

        <Route
          path="/login"
          element={
            <Login cartCounter={cartCounter} setCartCounter={setCartCounter} />
          }
        />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      {(showNavFooter && <Footer />) || <FooterAlt />}
    </div>
  );
}

export default App;
