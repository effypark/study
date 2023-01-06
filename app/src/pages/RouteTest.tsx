import React, { useEffect, useMemo, useState } from 'react';

export interface RouteTestProps {};

const RouteTest: React.FunctionComponent<RouteTestProps> = props => {
    
    useEffect(()=>{
      console.log(Math.random());
    },[])
  
    return (
        <div>
            <p>RouteTest</p>
        </div>
    )
}

export default RouteTest;