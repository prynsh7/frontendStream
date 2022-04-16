import React, {useState} from 'react'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: var(--green);
  left: calc(50% - 75px);
  position: fixed;
`;

function Loader({ loading }) {

    // let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#000000");

    return (
        <div>
            {loading ?
                <div className='loader'>
                    <ClipLoader color={color} loading={true} css={override} size={150} />
                </div> 
            : null}
        </div>
    )
}

export default Loader