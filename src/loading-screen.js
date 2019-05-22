import React from 'react';
import './loading-screen.css'

function LoadingScreen (props) {

    return(
        <div class="lds">
            <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default LoadingScreen