import {useContext} from "react";
import {FilterContext} from "../../Context";
import {CardBook} from "../CardBook";
import {motion} from "framer-motion";
import {Button} from "@mui/material";
import {Favorite} from "../Favorite";

export const FantasyList = () => {
  const {booksFiltereds, addBookToRead} = useContext(FilterContext);
  return (
    <div className="w-full flex gap-4 flex-col justify-center items-center">
      <h1 className="text-white font-bold text-2xl p-4 w-full bg-sky-500">
        Fantasy
      </h1>
      <div className="flex gap-4 overflow-x-scroll snap-x h-auto custom-scrollbar w-full px-4 py-4">
        {booksFiltereds
          .filter((book) => book.book.genre === "Fantasía")
          .map((book) => {
            return (
              <div key={book.book.ISBN}>
                <CardBook
                  ISBN={book.book.ISBN}
                  key={book.book.synopsis}
                  title={book.book.title}
                  desc={book.book.synopsis}
                  img={book.book.cover}
                />
                <motion.div
                  initial={{opacity: 0, scale: 0.5}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{duration: 0.4, delay: 0.5}}
                  exit={{opacity: 0, scale: 0.5}}
                  className="flex flex-row flex-wrap gap-4 mt-2"
                >
                  <Button
                    variant="contained"
                    onClick={() => addBookToRead(book.book)}
                  >
                    Add Book
                  </Button>
                  <Favorite />
                </motion.div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
