import {Fragment, useContext, useState} from "react";
import {FilterContext} from "../Context";
import {MenuItem, Slider, TextField} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {AnimatePresence, motion} from "framer-motion";

export function Filters() {
  const {genres, handleGenre, filterGenre, handlePage, filterPages} =
    useContext(FilterContext);

  const [showFilters, setShowFilters] = useState(false);
  return (
    <article className="mt-[70px] w-full">
      <section className="flex flex-col justify-around items-center">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="bg-blue-500 p-2 rounded text-white w-[95%] flex flex-row gap-2 justify-center items-center"
        >
          Filters
          <KeyboardArrowDownIcon />
        </button>
        <AnimatePresence>
          {showFilters && (
            <Fragment>
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
                exit={{opacity: 0}}
                className="w-[90%] flex flex-row justify-around items-center"
              >
                <label className="font-bold text-sm" htmlFor="pages">
                  Filter for pages
                </label>
                <Slider
                  size="medium"
                  max={1200}
                  style={{width: "50%"}}
                  onChange={handlePage}
                  value={filterPages}
                  valueLabelDisplay="auto"
                  id="pages"
                />
              </motion.div>
              {/*Filter for genres*/}
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
                exit={{opacity: 0}}
                className="w-[90%] flex flex-row justify-around items-center"
              >
                <label htmlFor="genre" className="font-bold text-sm">
                  Filter for genres
                </label>
                <div className="w-[50%]">
                  <TextField
                    fullWidth
                    size="small"
                    id="genre"
                    label="Genre"
                    value={filterGenre}
                    onChange={handleGenre}
                    select
                    InputLabelProps={{shrink: true}}
                  >
                    <MenuItem key="all" value="all">
                      All
                    </MenuItem>
                    {genres.map((genre) => (
                      <MenuItem key={genre} value={genre}>
                        {genre}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </motion.div>
            </Fragment>
          )}
        </AnimatePresence>
      </section>
    </article>
  );
}
