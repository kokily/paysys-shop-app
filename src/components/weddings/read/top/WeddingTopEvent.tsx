import React from 'react';
import WeddingTopItem from './WeddingTopItem';

interface Props {
  event: EventType;
}

function WeddingTopEvent({ event }: Props) {
  return (
    <>
      <WeddingTopItem
        title="연 주"
        husband={event.play_husband}
        bride={event.play_bride}
        sum={event.play_husband + event.play_bride}
      />
      <WeddingTopItem
        title="축 가"
        husband={event.anthem_husband}
        bride={event.anthem_bride}
        sum={event.anthem_husband + event.anthem_bride}
      />
      <WeddingTopItem
        title="사회자"
        husband={event.moderator_husband}
        bride={event.moderator_bride}
        sum={event.moderator_husband + event.moderator_bride}
      />
      <WeddingTopItem
        title="주 례"
        husband={event.officiate_husband}
        bride={event.officiate_bride}
        sum={event.officiate_husband + event.officiate_bride}
      />
    </>
  );
}

export default WeddingTopEvent;
