import React from 'react';
// import kLogo from './images/kLogo.png'
import horizon_full from './images/horizon_full.png'


export default (props)=>{
    console.log('inside splash BoxClass', props.boxClass)
    return(
        <div id='splashBody' className={props.divClass.join(' ')}>
            <div id='splashText'>
                <h1 className={props.textClass.join(' ')}>Your Brand Has a Story To Tell...</h1>
                <div id='splashLogo' className={props.logoClass.join(' ')}>
                    <img src={horizon_full}   />
                    <h2 className={props.logoClass.join(' ')} style={{"font-size":"25px"}}>N E W T E C H &nbsp; &nbsp; H O R I Z O N S</h2>
                </div>
            </div>
        </div>
    )
}