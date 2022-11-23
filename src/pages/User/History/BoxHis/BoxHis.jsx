import React from "react";
import "./BoxHis.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const BoxHis = ({
  username,
  bank_name,
  service_package,
  money,
  kind_package,
}) => {
  const userSlice = useSelector((state) => state.user);

  return (
    <div className="BoxHis">
      <div className="BoxHis_info flex justify-between">
        <h2>UserName: </h2>
        <h2>{username}</h2>
      </div>

      <div className="BoxHis_info flex justify-between">
        <h2>Tên ngân hàng: </h2>
        <h2>{bank_name}</h2>
      </div>

      <div className="BoxHis_info flex justify-between">
        <h2>Gói dịch vụ: </h2>
        <h2>{service_package}</h2>
      </div>

      <div className="BoxHis_info flex justify-between">
        <h2>Giá gói: </h2>
        <h2>{money}</h2>
      </div>

      <div className="BoxHis_info flex justify-between">
        <h2>Loại gói dịch vụ: </h2>
        <h2>{kind_package}</h2>
      </div>
    </div>
  );
};

export default BoxHis;
