import loading from '../../../assets/loading.svg';
import React from 'react';


let Preloader=(props)=>{
return <div style={{backgroundColor:'white'}}>
            <img alt={"IMG"} src={loading} />
         </div>
}
export default Preloader;