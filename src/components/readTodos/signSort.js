import React from "react";
import ascendant from "../../icons/ascendant.svg"
import descendant from "../../icons/descendant.svg"
function SignSort(props){
    return<img src={props.orderedBy ==="asc"? ascendant:descendant} alt ="icons"/>
}
export default SignSort