import axios from "axios";
import { ArchivedGiftCardException } from "../exceptions/ArchivedGiftCardException";
import { ActiveGiftCardException } from "../exceptions/ActiveGiftCardException";
import { GiftCardDetailsException } from "../exceptions/GiftCardDetailsException";

const getActiveGiftCards = () => {
  return axios
    .get("http://localhost:3001/gift-cards?state=active")
    .then((res) => res.data)
    .catch((error) => new ActiveGiftCardException(error));
};

const getArchivedGiftCards = () => {
  return axios
    .get("http://localhost:3001/gift-cards?state=archived")
    .then((res) => res.data)
    .catch((error) => new ArchivedGiftCardException(error));
};

const getGiftCardDetails = (id: number) => {
  return axios
    .get(`http://localhost:3001/gift-cards/${id}`)
    .then((res) => res.data)
    .catch((error) => new GiftCardDetailsException(error));
};

export { getActiveGiftCards, getArchivedGiftCards, getGiftCardDetails };
