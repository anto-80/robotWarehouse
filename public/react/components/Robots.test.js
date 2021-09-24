import React from 'react';
import renderer from 'react-test-renderer';

import  Robots  from './Robots';

describe("Robots component", () => {

  

  test("renders Robots component as expected", () => {
    const robots = ['R2D2', 'T-800'];


    const component = renderer.create(<Robots robots={robots} />)

    const snapshot = component.toJSON();

    console.log("What does our snapshot look like?  ", snapshot)

    expect(snapshot).toMatchSnapshot();
  })

  

  test("Contains items passed down as props", () => {
    const robots = ['R2D2', 'T-800'];
    
    const component = renderer.create(<Robots robots={robots}/>);
    const treeEl = component.toTree()

    

    expect(treeEl.props.robots.length).toBe(2)
  })

})