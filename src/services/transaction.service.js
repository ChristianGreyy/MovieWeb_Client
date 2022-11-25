import axios from "axios";
import axiosClient from "../api/axiosClient";

const createPaymentURL = async (amount, bankCode) => {
  return await axiosClient.post(
    `${process.env.REACT_APP_URL}/api/transaction/create_payment_url`,
    {
      amount,
      bankCode,
    }
  );
};

const response = async (amount, name_bank) => {
  return await axiosClient.put(
    `${process.env.REACT_APP_URL}/api/transaction/response`,
    {
      amount,
      name_bank,
    }
  );
};
const transactionService = {
  createPaymentURL,
  response,
};

export default transactionService;
