import React, { useContext } from "react";
import BookTitle from "./BookTitle";
import BookAuthor from "./BookAuthor";
import { BooksContext } from "../BooksContext";

const Books = () => {
  const { loading, error } = useContext(BooksContext);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div>
      <BookTitle />
      <BookAuthor />
    </div>
  );
};

export default Books;
