import Test from "../../test/Test";
import { render, screen, fireEvent } from "@testing-library/react";

it("renders Test component", () => {
  render(<Test />);
  const divElement = screen.getByText(/This is test component/i);
  expect(divElement).toBeInTheDocument();
  expect(divElement).toHaveTextContent("This is test component: Hi");
  
});
it("render value on click event", () => {
  render(<Test />);
  const buttonElement = screen.getByText(/Click Me/i);
  const divElement = screen.getByText(/This is test component/i);
  expect(buttonElement).toBeInTheDocument()  
  fireEvent.click(buttonElement);
  expect(divElement).toHaveTextContent("This is test component: Hello");
});
