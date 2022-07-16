import React from 'react';
import WeddingTopItem from './WeddingTopItem';

interface Props {
  hanbok: HanbokType;
}

function WeddingTopHanbok({ hanbok }: Props) {
  return (
    <>
      <WeddingTopItem
        title="한복(선불)"
        husband={hanbok.hanbok_pre_husband}
        bride={hanbok.hanbok_pre_bride}
        sum={hanbok.hanbok_pre_husband + hanbok.hanbok_pre_bride}
      />
      <WeddingTopItem
        title="한복(후불)"
        husband={hanbok.hanbok_post_husband}
        bride={hanbok.hanbok_post_bride}
        sum={hanbok.hanbok_post_husband + hanbok.hanbok_post_bride}
      />
    </>
  );
}

export default WeddingTopHanbok;
