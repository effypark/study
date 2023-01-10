import React, { useEffect } from 'react';

const AddScriptTag = () => {

    useEffect(() => {
        const data1: string = "230109";

        const script = document.createElement("script"); // tag Element를 만듭니다.
        script.innerHTML = "document.getElementById('outsideJs').addEventListener('click', test); function test (){ alert(" + data1 + "); }";
        document.body.appendChild(script); // 생성된 태그를 body에 붙여줍니다.

        const script2 = document.createElement("script"); // tag Element를 만듭니다.
        script2.src = "./example.js";
        script2.type = "text/jsx";
        document.body.appendChild(script2); // 생성된 태그를 body에 붙여줍니다.
    })

    return (
        <div>
            <button id="outsideJs" type="button" >AddScriptTag</button>
        </div>
    )
}

export default AddScriptTag;
