import React from "react";
import BooksProvider from "../BooksProvider";
import Books from "./Books";

const BooksApp = () => {
  return (
    <BooksProvider>
      <Books />
    </BooksProvider>
  );
};

export default BooksApp;
