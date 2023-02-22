import React from 'react';
import '../assets/css/testgraph.css'
export interface TestGraphProps {};

const TestGraph: React.FunctionComponent<TestGraphProps> = props => {
    return (
      <>
        <div className="x-box"></div>
        <div className="x-box-cont">
          <h1>Seasons of the year</h1>
          <strong>Summer 35%</strong>
          <strong>Monsoon 35%</strong>
          <strong>Winter 30%</strong>
        </div>
      </>
    )
}

export default TestGraph;