import * as SC from "./SixthItemStyled"

import avatars from "../../../assets/images/avatars.svg"

const SixthItem = () => {

const content = ">56%"

    return ( 
        <SC.SixthItemStyled>
            <div>
            <h3>{content}</h3>
            <p>faster audience growth</p>
            </div>
            <div>
                <img src={avatars} alt="avatars" />
            </div>
        </SC.SixthItemStyled>
     );
}
 
export default SixthItem;