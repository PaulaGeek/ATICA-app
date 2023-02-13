import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { LandingPage } from "../component/landingPage.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <LandingPage />

      <Link to="/demo">
        <button className="btn btn-primary">Provicional</button>
      </Link>
    </>
  );
};
