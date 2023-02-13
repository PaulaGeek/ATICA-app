import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { DetailsProject } from "./detailsProject.js";
import { ProjectDetailsView } from "../pages/projectDetailsView.js";

export const SocialGral = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <>
      <img
        src="http://images7.memedroid.com/images/UPLOADED716/622c677ad5fa4.jpeg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Titulo del Projecto</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <h6 className="text-primary">Categoria:</h6>
        <button type="button" className="btn btn-info lm-10">
          contacto
        </button>
        <Link to="/landingPage">
          <button>
            <i className="fa fa-angle-double-left" aria-hidden="true"></i>
          </button>
        </Link>
        <button className="btn btn-light border-warning">💛</button>
      </div>
    </>
  );
};
