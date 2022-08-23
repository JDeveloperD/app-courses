import { Button, BsBoxArrowUpRight, Small } from '@features/ui';
import { Controlls, ControlBar, ControlRange } from './player.styled';
import {
  IoPlaySkipBackOutline,
  IoPlayOutline,
  IoPlaySkipForwardOutline
} from 'react-icons/io5';
import { useState } from 'react';
import PlayAudio from './PlayAudio';

const PlayControlls = () => {
  const [rangeValue, setRangeValue] = useState('0');
  return (
    <Controlls>
      <ControlBar>
        <ControlRange
          type="range"
          value={rangeValue}
          min={0}
          max={100}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <Button color='light' variant='icon'>
              <IoPlaySkipBackOutline />
            </Button>
            <Button color='light' variant='icon'>
              <IoPlayOutline />
            </Button>
            <Button color='light' variant='icon'>
              <IoPlaySkipForwardOutline />
            </Button>
            <Small>
              20:00
            </Small>
          </div>
          <div>
            <PlayAudio />
            <Button color='light' variant='icon'>
              <BsBoxArrowUpRight />
            </Button>
          </div>
        </div>
      </ControlBar>
    </Controlls>
  );
};

export default PlayControlls;
