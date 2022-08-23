import { useRef, useState } from 'react';

const usePlayer = (ref) => {
  const el = ref.current;
  const [state, setState] = useState({
    buffered: [
      {
        start: 0,
        end: 30.999
      }
    ],
    time: 15.870739,
    duration: 0,
    paused: true,
    muted: false,
    volume: 1,
    playing: false
  });

  return {
    video
  };
};

export default usePlayer;
