import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  getActiveGiftCards,
  getArchivedGiftCards,
  getGiftCardDetails,
} from ".";

describe("Services testing", () => {
  it("returns data when getActiveGiftCards is called", (done) => {
    var mock = new MockAdapter(axios);
    const data = { response: true };
    mock
      .onGet("http://localhost:3001/gift-cards?state=active")
      .reply(200, data);

    getActiveGiftCards().then((response) => {
      expect(response).toEqual(data);
      done();
    });
  });

  it("returns data when getArchivedGiftCards is called", (done) => {
    var mock = new MockAdapter(axios);
    const data = { response: true };
    mock
      .onGet("http://localhost:3001/gift-cards?state=archived")
      .reply(200, data);

    getArchivedGiftCards().then((response) => {
      expect(response).toEqual(data);
      done();
    });
  });

  it("returns data when getGiftCardDetails is called", (done) => {
    var mock = new MockAdapter(axios);
    const data = { response: true };
    mock.onGet("http://localhost:3001/gift-cards/1").reply(200, data);

    getGiftCardDetails(1).then((response) => {
      expect(response).toEqual(data);
      done();
    });
  });
});
