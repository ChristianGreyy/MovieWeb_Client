import axios from "axios";

const createPaymentURL = async (amount, bankCode) => {
  return await axios.post(
    "http://localhost:8080/api/transaction/create_payment_url",
    {
      amount,
      bankCode,
    }
  );
};

const transactionService = {
  createPaymentURL,
};

export default transactionService;
