import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import "./styles.scss";
function Main() {
  return (
    <main>
      <h1>Каршеринг</h1>
      <h2>Need for drive</h2>
      <p>Поминутная аренда авто твоего города</p>
      <Button className="orderButton" value="Забронировать" pathname="order/location"/>
    </main>
  );
}
export default Main;