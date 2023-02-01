import React from 'react';
import WysiwygEditor from "../Components/WysiwygEditor"
export interface WysiwygProps {};

const Wysiwyg: React.FunctionComponent<WysiwygProps> = props => {
    return (
        <>
            <WysiwygEditor/>
        </>
    )
}

export default Wysiwyg;