import React from 'react';
import WeddingTopItem from './WeddingTopItem';

interface Props {
  convention: ConventionType;
}

function WeddingTopConvention({ convention }: Props) {
  return (
    <>
      <WeddingTopItem
        title="웨딩홀 사용료"
        husband={convention.rental_husband}
        bride={convention.rental_bride}
        sum={convention.rental_husband + convention.rental_bride}
      />
      <WeddingTopItem
        title="예도칼"
        husband={convention.sword_husband}
        bride={convention.sword_bride}
        sum={convention.sword_husband + convention.sword_bride}
      />
      <WeddingTopItem
        title="장 갑"
        husband={convention.glove_husband}
        bride={convention.glove_bride}
        sum={convention.glove_husband + convention.glove_bride}
      />
      <WeddingTopItem
        title="부 케"
        husband={convention.bouquet_husband}
        bride={convention.bouquet_bride}
        sum={convention.bouquet_husband + convention.bouquet_bride}
      />
      <WeddingTopItem
        title="폐 백"
        husband={convention.ceremony_husband}
        bride={convention.ceremony_bride}
        sum={convention.ceremony_husband + convention.ceremony_bride}
      />
    </>
  );
}

export default WeddingTopConvention;
