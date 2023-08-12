import {useContext} from "react";
import {FilterContext} from "../Context";

export const ListBooks = () => {
  const {booksFiltereds, addBookToRead, booksToRead, deleteBookFromRead} =
    useContext(FilterContext);
  return (
    <article>
      <section>
        <h1>List Books</h1>
        <div>
          <div>
            {booksFiltereds.map((book) => {
              return (
                <div key={book.book.ISBN}>
                  {book.book.title}{" "}
                  <button
                    className="bg-blue-500 p-2 rounded text-white"
                    onClick={() => addBookToRead(book.book)}
                  >
                    Add
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="bg-red-500 text-white">Books to read</h1>
          {booksToRead ? (
            booksToRead.map((book) => {
              return (
                <div key={book.ISBN}>
                  {book.title}
                  <button
                    className="bg-red-500 p-2 rounded text-white"
                    onClick={() => deleteBookFromRead(book)}
                  >
                    Delete
                  </button>
                </div>
              );
            })
          ) : (
            <p>No books</p>
          )}
        </div>
      </section>
    </article>
  );
};
