import React, { useContext } from "react";
import { BooksContext } from "../BooksContext";

const BookAuthor = () => {
  const { bookList, updateBookAuthor } = useContext(BooksContext);

  const handleChange = (id, event) => {
    updateBookAuthor(id, event.target.value);
  };

  return (
    <div>
      <div>Authors of books</div>
      <div>
        {bookList &&
          bookList.map((t) => (
            <div key={t.id}>
              <input
                type="text"
                value={t.author}
                onChange={(e) => handleChange(t.id, e)}
              />
              <input type="text" defaultValue={t.name} readOnly />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookAuthor;