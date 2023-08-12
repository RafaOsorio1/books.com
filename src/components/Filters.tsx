import {useContext} from "react";
import {FilterContext} from "../Context";
import {MenuItem, Slider, TextField} from "@mui/material";

export function Filters() {
  const {genres, handleGenre, filterGenre, handlePage, filterPages} =
    useContext(FilterContext);
  return (
    <article>
      <section>
        <h1>Filters</h1>
        <div className="w-96 flex flex-row">
          <label htmlFor="pages">Filter for pages: </label>
          <Slider
            size="medium"
            onChange={handlePage}
            value={filterPages}
            id="pages"
          />
        </div>
        {/*Filter for genres*/}
        <div className="w-96 flex flex-row">
          <label htmlFor="genre">Filter for genres</label>
          <TextField
            fullWidth
            size="small"
            id="genre"
            classes={{root: "W-[50%]"}}
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
      </section>
    </article>
  );
}
