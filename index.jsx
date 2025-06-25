import React, { useEffect, useRef, useState } from
  'react';

  Counter.protypes = {};

function Counter(props) {
// 1
const [count, setCount] = useState(0);
constprevCount = useRef(count);

// 3
useEffect(() => {
  prevCount.current = count;
  }, [count]);

  const handleIncreaseClick = () => {
    setCount(x => x + 1);
  }
}
// 2
return (
  <div>
  <p>Previous: {prevCount.Current}</p>
  <p>Current: {count}</p>

  <div>
  <button onClick={handleIncreaseClick}>Increase</
  button>
  </div>
  </div>
  );
  }
