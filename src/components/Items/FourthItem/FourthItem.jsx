import * as SC from "./FourthItemStyled"

import chart from "../../../assets/images/chart.svg"
const FourthItem = () => {
    return ( 
        <SC.FourthItemStyled>
            <h3>Schedule to social media.</h3>
            <SC.Thumb>
                <img src={chart} alt="chart" />
            </SC.Thumb>
            <p>Optimize post timings to publish content at the perfect time for your audience.</p>
        </SC.FourthItemStyled>
     );
}
 
export default FourthItem;