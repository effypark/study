import React, { useEffect, useMemo, useState } from 'react';
import { useRouteError } from "react-router-dom";

export interface ErrorPageProps {};

const ErrorPage: React.FunctionComponent<ErrorPageProps> = props => {
    const error:any = useRouteError();
    console.error(error.statusText);

    return (
        <div id="error-page" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <h1><i>{error.statusText || error.message}</i></h1>
            <h3>이런!</h3>
            <p>죄송합니다. 예상치 못한 오류가 뭉탱이로 발생하였습니다.</p>
            <img src="https://w.namu.la/s/fe0fd08bb52927a696844658524b0f99e83f846bfa91b431a4aa7951ea05b5345ec9911ff96d37e142d0d34bca47a6bf50e8aa0c2bbbd6407055637218680baadf03b8614a3cca4e11e815d162e7a25352de796944077b236d872489ef284361"
             alt="죄송합니다" />
        </div>
    )
}

export default ErrorPage;