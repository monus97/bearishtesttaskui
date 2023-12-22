import React, { useState } from "react";
import "./drawer.scss";
import CardData from "../components/cardData";
import { cardDataArray } from "../jsonData/cardData";
import { useDispatch, useSelector } from "react-redux";
import {
  switchDrawerMode,
  switchDrawerNarrowMode,
} from "../redux/actions/userAction";

const HomePage = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.userReducer);
  const toggleSidebar = () => {
    if (data === true) {
      dispatch(switchDrawerMode());
    } else {
      dispatch(switchDrawerNarrowMode());
    }
  };

  return (
    <div className="container">
      <div className="parent_div">
        <div className="leftside">
          <span onClick={toggleSidebar} className="icon_toggler">
            arrow
          </span>
        </div>
        <div className={`rightside ${data ? "open" : ""}`}>
          <div className="cards">
            {cardDataArray?.map((data, i) => (
              <CardData data={data} key={i}  />
            ))}
          </div>
        </div>
        <div className={`sidebar ${data ? "open" : ""}`}>
          <ul className="list_item">
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
