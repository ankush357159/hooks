import React, { useEffect, useState } from "react";
import { books } from "./books";
import { BooksContext } from "./BooksContext";

const BooksProvider = ({ children }) => {
  console.log(children)
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setBookList(books);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, []);

  const updateBookTitle = (id, newTitle) => {
    setBookList((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, name: newTitle } : book
      )
    );
    // console.log(id, newTitle);
  };

  const updateBookAuthor = (id, newAuthor) => {
    setBookList((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, author: newAuthor } : book
      )
    );
    // console.log(id, newAuthor);
  };

  return (
    <BooksContext.Provider
      value={{ bookList, loading, error, updateBookAuthor, updateBookTitle }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
