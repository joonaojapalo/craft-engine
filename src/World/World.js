import React from 'react';
import seq from './Sequence';

import './World.scss';

const getPosition = (x,y,z,rotY=0) => ({
  transform: `translate3d(${x}px,${y}px,${z}px) rotateY(${rotY}deg)`,
});

const CraftObject = ({children, number, x, y, z}) => {
  return (
    <div key={`object-${number}`}
      className={`object`}
      style={getPosition(x, y, z || 0)
      }>
      {children}
    </div>
  );
};

const Cube = ({x,y,z,number}) => (
  <CraftObject number={number} x={x} y={y} z={z}>
    <div className="cube">
      <div className="face face-1"></div>
      <div className="face face-2"></div>
      <div className="face face-3"></div>
      <div className="face face-4"></div>
      <div className="face face-5"></div>
      <div className="face face-6"></div>
    </div>
  </CraftObject>
);


function *genGrid(w,h) {
  for (let i=0; i<w; i++) {
    for (let j=0; j<h; j++) {
      yield [i, j];
    }
  }
}

const CubesGrid = ({w, numX, numY}) => {
  let cubes = [];

  for (let xy of genGrid(numX, numY)) {
    cubes.push(<Cube key={`${xy[0]},${xy[1]}`} number={seq.next()} x={xy[0]*w} y={200} z={xy[1]*w}/>);
  }

  return cubes;
};

const World = ({posX, posY, posZ}) => {
  const w=50;
 
  return (
    <div className="world" style={getPosition(posX * w, posY * w, posZ * w, 0)}>
      <CubesGrid w={w} numX={10} numY={10}/>
    </div>
  );
}

export default World;
