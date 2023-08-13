import {useState} from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {motion} from "framer-motion";

export const Favorite = () => {
  const [favorite, setFavorite] = useState(false);
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
      {favorite ? (
        <FavoriteIcon
          color="error"
          fontSize="large"
          onClick={() => setFavorite(!favorite)}
        />
      ) : (
        <FavoriteBorderIcon
          fontSize="large"
          color="error"
          onClick={() => setFavorite(!favorite)}
        />
      )}
    </motion.div>
  );
};
