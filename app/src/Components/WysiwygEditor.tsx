import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export interface WysiwygEditorProps {};

const WysiwygEditor: React.FunctionComponent<WysiwygEditorProps> = props => {
    return (
        <div className="App">
            <h2>Using CKEditor 5 build in React</h2>
            <CKEditor
                editor={ ClassicEditor }
                data="<p>Hello from CKEditor 5!</p>"
                onReady={ (editor: any) => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event: any, editor: { getData: () => any; } ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                } }
                onBlur={ ( event: any, editor: any ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event: any, editor: any ) => {
                    console.log( 'Focus.', editor );
                } }
            />
        </div>
    )
}

export default WysiwygEditor;