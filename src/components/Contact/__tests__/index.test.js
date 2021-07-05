// __tests__/Contact.test.js
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "../index";

afterEach(cleanup);

describe("Contact component renders", () => {
  it("renders", () => {
    render(<ContactForm />);
  });

  it("renders", () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});

it("renders", () => {
  const { getByTestId } = render(<ContactForm />);
  expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
  expect(getByTestId("button")).toHaveTextContent("Submit");
});
