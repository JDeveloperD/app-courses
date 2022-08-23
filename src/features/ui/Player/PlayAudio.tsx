import { Button } from '@features/ui';
import { useState } from 'react';
import {
  IoVolumeLowOutline,
  IoVolumeMediumOutline,
  IoVolumeHighOutline,
  IoVolumeMuteOutline
} from 'react-icons/io5';
import { useToggle } from 'react-use';

const PlayAudio = () => {
  const [muted, toggleMuted] = useToggle(true);
  const [volumeLevel, setVolumeLevel] = useState(100);

  return (
    <>
      <Button
        color='light'
        variant='icon'
        onClick={toggleMuted}>
          {muted ? (<IoVolumeMuteOutline />) : (<IoVolumeLowOutline />)}
      </Button>
    </>
  );
};

export default PlayAudio;
