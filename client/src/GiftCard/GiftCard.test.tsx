import React from "react";
import { render, screen } from "@testing-library/react";
import {
  CardLabel,
  CardName,
  CardProgressBar,
  CardEmptyStatePlaceholder,
} from "./index";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("Card's component unit testing", () => {
  it("should render the right text", () => {
    const { getByText } = render(
      <CardLabel>Votre carte se clôture dans 3 semaines</CardLabel>
    );

    expect(getByText(/Votre carte se clôture dans 3 semaines/i)).toBeTruthy();
  });

  it("should render the right text", () => {
    const { getByText } = render(<CardName>Carte cadeau de Noël</CardName>);

    expect(getByText(/Carte cadeau de Noël/i)).toBeTruthy();
  });

  it("should render the right text", () => {
    const { getByText } = render(
      <CardEmptyStatePlaceholder>
        Une erreur est survenue
      </CardEmptyStatePlaceholder>
    );

    expect(getByText(/Une erreur est survenue/i)).toBeTruthy();
  });

  it("should render the right consummed amount passed in props", () => {
    const { getByText } = render(
      <CardProgressBar value={50}>
        <CardLabel>50€ dépensés / 100€</CardLabel>
      </CardProgressBar>
    );

    expect(getByText(/50%/i)).toBeTruthy();
  });
});
