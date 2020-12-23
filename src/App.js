import React, { useState } from "react";
import "./styles.css";

const boxsData = [
  {
    id: 1,
    order: 1,
    title: "Title 1"
  },
  {
    id: 2,
    order: 2,
    title: "Title 2"
  },
  {
    id: 3,
    order: 3,
    title: "Title 3"
  },
  {
    id: 4,
    order: 4,
    title: "Title 4"
  }
];

function compareFn(box1, box2) {
  if (box1.order < box2.order) {
    return -1;
  } else if (box1.order > box2.order) {
    return 1;
  } else {
    return 0;
  }
}

export default function App() {
  const [boxs, setBoxs] = useState(boxsData);

  const handleSort = (order, id, value) => {
    const currentBoxs = [...boxs];

    if (value === 1) {
      currentBoxs[order - 1].order = currentBoxs[order - 1].order - 1;
      currentBoxs[order - 2].order = currentBoxs[order - 2].order + 1;
    } else {
      currentBoxs[order - 1].order = currentBoxs[order - 1].order + 1;
      currentBoxs[order].order = currentBoxs[order].order - 1;
    }

    currentBoxs.sort(compareFn);

    setBoxs(currentBoxs);
  };

  return (
    <div className="App">
      {boxs.map((box, index, array) => {
        return (
          <div className="box" key={box.id}>
            <div className="buttons">
              <button
                disabled={box.order === 1}
                onClick={() => handleSort(box.order, box.id, 1)}
                className="button"
              >
                up
              </button>
              <button
                disabled={box.order === array.length}
                onClick={() => handleSort(box.order, box.id, -1)}
                className="button"
              >
                down
              </button>
            </div>
            <h3>{box.title}</h3>
          </div>
        );
      })}
    </div>
  );
}
