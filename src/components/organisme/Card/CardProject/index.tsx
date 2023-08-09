import React, { useState } from "react";
type CardProjectProps = {
  title: string | undefined;
  description?: string | null;
  img: string;
};

const CardProject = (props: CardProjectProps) => {
  const { title, description, img } = props;
  const [showAll, setShowAll] = useState(false);

  const getDescriptionPreview = () => {
    if (description && description.split(" ").length > 25) {
      const words = description.split(" ");
      return showAll ? description : words.slice(0, 25).join(" ") + "...";
    }
    return description;
  };

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <div className=" flex flex-col-reverse w-80 min-h-[524px] h-auto md:min-w-[992px] md:w-auto bg-white shadow-2xl rounded-3xl md:flex-row animate__backInLeft">
      <div className="flex flex-1 bg-white rounded-b-lg md:rounded-l-3xl justify-center items-center overflow-hidden">
        <div className="w-96 px-5 py-3">
          <h1 className="font-bold text-2xl my-2 md:text-4xl md:mb-5">
            {title}
          </h1>
          <div className={`h-auto ${showAll ? "" : "overflow-hidden"}`}>
            <p className="text-justify">{getDescriptionPreview()}</p>
          </div>
          {description && description.split(" ").length > 25 && (
            <button
              onClick={handleToggleShowAll}
              className="mt-2 underline text-blue-600"
            >
              {showAll ? "Tampilkan Sedikit" : "Tampilkan Semua"}
            </button>
          )}
        </div>
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat md:flex-1 h-96 md:h-auto rounded-t-lg md:rounded-r-3xl md:rounded-l-none"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </div>
  );
};

export default CardProject;
