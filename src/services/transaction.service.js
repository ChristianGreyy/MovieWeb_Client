import axios from "axios";
import axiosClient from "../api/axiosClient";

const createPaymentURL = async (amount, bankCode) => {
  return await axiosClient.post(
    "http://localhost:8080/api/transaction/create_payment_url",
    {
      amount,
      bankCode,
    }
  );
};

const response = async (amount, bankCode) => {
  return await axiosClient.put(
    "http://localhost:8080/api/transaction/response",
    {
      amount,
    }
  );
};
const transactionService = {
  createPaymentURL,
  response,
};

export default transactionService;
