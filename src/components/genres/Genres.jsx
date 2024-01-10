import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";

const Genres = ({ data }) => {
  const { genras } = useSelector((state) => state.home);

  return (
    <div className="genres">
      {data?.map((g) => {
        if (!genras[g]?.name) {
          return;
        }
        return (
          <div key={g} className="genre">
            {genras[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
