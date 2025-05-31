import * as SC from "./FifthItemStyled"

import growthChart from "../../../assets/images/growthChart.svg"

const FifthItem = () => {
    return ( 
        <SC.FifthItemStyled>
            <div>
                <img src={growthChart} alt="growthChart" />
            </div>
            <h3>Grow followers with non-stop content.</h3>
        </SC.FifthItemStyled>
     );
}
 
export default FifthItem;