import React from "react";
import notFoundImage from '../assests/notFoundImage.png';

function NotFoundPage(){
    return(
        <div>
            <h1>Not Found</h1>
            <img src = {notFoundImage}/>
        </div>
    )
}

export default NotFoundPage;