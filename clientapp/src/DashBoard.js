import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import addLandtoStorage from "./setLocalStorage";
import * as React from "react";


export const ProfileActions = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <button style={{fontFamily:"monospace"}}
          className="btn btn-secondary"
          onClick={() => console.log('s') }
        >
          Visit Market Place
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="# "
                onClick={() => {
                  navigate("/");
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};



