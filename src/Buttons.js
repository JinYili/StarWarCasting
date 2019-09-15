import React from "react";
import PageNavi from "./PageNavi";

function Buttons(props) {
  const {
    getPerviousUrl,
    getNextUrl,
    listLength,
    pageHandler,
    currentPage
  } = props;
  const onClickButton = url => {
    //console.log(url);pageHandler
    pageHandler(url);
  };

  const buttonsPrev =
    getPerviousUrl !== null ? (
      <button
        className="btn-primary px-md-5 btn-lg float-left"
        onClick={() => onClickButton(getPerviousUrl)}
      >
        previous
      </button>
    ) : (
      ""
    );

  const navi = (
    <PageNavi
      currentPage={currentPage}
      onClickButton={onClickButton}
    ></PageNavi>
  );
  let classString = "btn-primary px-md-5 btn-lg";
  classString += listLength === 0 ? "" : " float-right ";
  const buttonsNext =
    getNextUrl !== null ? (
      <button className={classString} onClick={() => onClickButton(getNextUrl)}>
        {listLength === 0 ? "Load" : "Next"}{" "}
      </button>
    ) : (
      ""
    );

  return (
    <div>
      {buttonsPrev}
      {currentPage === 0 ? "" : navi}
      {buttonsNext}
    </div>
  );
}

export default Buttons;
