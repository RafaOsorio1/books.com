import {Typography} from "@mui/material";
import {motion} from "framer-motion";
import {useState} from "react";

type CardProps = {
  title: string;
  desc: string;
  img: string;
  ISBN: string;
};

export const CardBook = ({title, desc, img, ISBN}: CardProps) => {
  const [showTitle, setShowTitle] = useState(false);
  const [showDesc, setShowDesc] = useState(false);

  return (
    <motion.div
      id={ISBN}
      className="flex flex-row flex-wrap w-44 min-w-[176px] gap-4 snap-center "
      initial={{opacity: 0, scale: 0.5}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.4, delay: 0.5}}
      exit={{opacity: 0, scale: 0.5}}
    >
      <img
        src={img}
        alt={title}
        className="aspect-[9/14] object-cover w-40 h-49 rounded-xl"
      />
      <p
        onClick={() => setShowTitle(!showTitle)}
        className="font-bold text-base"
      >
        {showTitle ? title : `${title.substring(0, 16)}...`}
      </p>
      <Typography onClick={() => setShowDesc(!showDesc)}>
        {showDesc ? desc : `${desc.substring(0, 50)}...`}
      </Typography>
    </motion.div>
  );
};
