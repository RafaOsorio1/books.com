import {FormControl, Input, InputAdornment} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "../App.css";
import {FantasyList} from "./Lists/FantasyList";
import {CiFiList} from "./Lists/CiFiList";
import {AventureList} from "./Lists/Aventure";
export const ListBooks = () => {
  // const {booksFiltereds, addBookToRead, booksToRead, deleteBookFromRead} =
  //   useContext(FilterContext);

  return (
    <article className=" mt-[70px] w-full">
      <section className="flex flex-col gap-4 w-full justify-center items-center">
        <div className="">
          <FormControl variant="outlined">
            <Input
              placeholder="Search"
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <FantasyList />
        <CiFiList />
        <AventureList />
      </section>
    </article>
  );
};
