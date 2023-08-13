import React, {useEffect, useMemo} from "react";
import {createContext, useState} from "react";
import data from "../DataBase/database.json";
import {Book, Library} from "../types";

type ContextProps = {
  booksFiltereds: Library[];
  genres: string[];
  handleGenre: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePage: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;
  filterGenre: string;
  filterPages: number;
  addBookToRead: (book: Book) => void;
  booksToRead: Book[];
  deleteBookFromRead: (book: Book) => void;
};
export const FilterContext = createContext<ContextProps>({} as ContextProps);

export const FilterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const dataLocalValidation = localStorage.getItem("booksToRead");
    if (dataLocalValidation === null) {
      localStorage.setItem("booksToRead", JSON.stringify([]));
    }
  }, []);
  const initialData = data.library;
  const [filterGenre, setFilterGenre] = useState("all");
  const [filterPages, setFilterPages] = useState(0);
  const [booksToRead, setBooksToRead] = useState(
    JSON.parse(localStorage.getItem("booksToRead")!)
  );
  const [booksFiltereds, setBooksFiltereds] = useState<Library[]>(initialData);

  //GET GENRES
  const getGenres = new Set(initialData.map((book) => book.book.genre));
  const genres = Array.from(getGenres);

  //FILTER BY GENRE AND PAGES

  const handleGenre = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterGenre(event.target.value);
  };

  //@ts-ignore
  const handlePage = (event: Event, value: number | number[]) => {
    if (typeof value === "number") {
      setFilterPages(value);
    }
  };
  //@ts-ignore
  const filteredBooksPages = useMemo(() => {
    if (filterPages === 0) {
      setBooksFiltereds(initialData);
    } else {
      setBooksFiltereds(
        initialData.filter((book) => book.book.pages >= filterPages)
      );
    }
    return booksFiltereds;
  }, [filterPages, initialData]);

  //@ts-ignore
  const filteredBooksGenre = useMemo(() => {
    if (filterGenre === "all") {
      setBooksFiltereds(initialData);
    } else {
      setBooksFiltereds(
        initialData.filter((book) => book.book.genre === filterGenre)
      );
    }
  }, [filterGenre, initialData]);

  //ADD AND DELETE BOOK
  function addBookToRead(book: Book) {
    const newBooksToRead = [...booksToRead];
    if (newBooksToRead.some((b) => b.ISBN === book.ISBN)) {
      alert("Book already added");
    } else {
      const newBooksToRead = [...booksToRead, book];
      setBooksToRead(newBooksToRead);
      localStorage.setItem("booksToRead", JSON.stringify(newBooksToRead));
      console.log("add", booksToRead);
    }
  }
  function deleteBookFromRead(book: Book) {
    const newBooksToRead = booksToRead.filter(
      (b: Book) => b.ISBN !== book.ISBN
    );
    setBooksToRead(newBooksToRead);
    localStorage.setItem("booksToRead", JSON.stringify(newBooksToRead));
  }

  const valueProps: ContextProps = {
    booksFiltereds,
    genres,
    handleGenre,
    handlePage,
    filterGenre,
    filterPages,
    addBookToRead,
    booksToRead,
    deleteBookFromRead,
  };
  return (
    <FilterContext.Provider value={valueProps}>
      {children}
    </FilterContext.Provider>
  );
};
