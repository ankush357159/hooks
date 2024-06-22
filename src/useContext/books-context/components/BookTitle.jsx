import React, { useContext } from "react";
import { BooksContext } from "../BooksContext";

const BookTitle = () => {
  const { bookList, updateBookTitle } = useContext(BooksContext);

  const handleChange = (id, event) => {
    updateBookTitle(id, event.target.value);
  };

  return (
    <div>
      <div>Titles of books</div>
      <div>
        {bookList &&
          bookList.map((t) => (
            <div key={t.id}>
              <input
                type="text"
                value={t.name}
                onChange={(e) => handleChange(t.id, e)}
              />
              <input type="text" defaultValue={t.author} readOnly />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookTitle;