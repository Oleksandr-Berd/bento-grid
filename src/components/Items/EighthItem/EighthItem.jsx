import * as SC from "./EighthItemStyled"

import chat from "../../../assets/images/chat.svg"

const EighthItem = () => {
  return (
    <SC.EighthItemStyled>
      <h3>Write your content using AI.</h3>
      <div>
        <img src={chat} alt="chat" />
      </div>
    </SC.EighthItemStyled>
  );
};

export default EighthItem;
