import React from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
export interface TestComponentProps {};

const TestComponent: React.FunctionComponent<TestComponentProps> = props => {
    return (
        <div>
            <ClassComponent message={'ClassComponent'} />
            <FunctionalComponent name={'FunctionalComponent'} />
        </div>
    )
}

export default TestComponent;