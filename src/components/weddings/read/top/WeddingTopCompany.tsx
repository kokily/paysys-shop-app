import React from 'react';
import WeddingTopItem from './WeddingTopItem';

interface Props {
  company: CompanyType;
}

function WeddingTopCompany({ company }: Props) {
  return (
    <>
      <WeddingTopItem
        title="웨딩업체"
        husband={company.company_husband}
        bride={company.company_bride}
        sum={company.company_husband + company.company_bride}
      />
      <WeddingTopItem
        title="야간옥상전구"
        husband={company.rooftop_husband}
        bride={company.rooftop_bride}
        sum={company.rooftop_husband + company.rooftop_bride}
      />
      <WeddingTopItem
        title="메이크업(여)"
        husband={company.owner_woman_husband}
        bride={company.owner_woman_bride}
        sum={company.owner_woman_husband + company.owner_woman_bride}
      />
      <WeddingTopItem
        title="메이크업(남)"
        husband={company.owner_man_husband}
        bride={company.owner_man_bride}
        sum={company.owner_man_husband + company.owner_man_bride}
      />
      <WeddingTopItem
        title="셀 렉"
        husband={company.select_husband}
        bride={company.select_bride}
        sum={company.select_husband + company.select_bride}
      />
      <WeddingTopItem
        title="액 자"
        husband={company.frame_husband}
        bride={company.frame_bride}
        sum={company.frame_husband + company.frame_bride}
      />
      <WeddingTopItem
        title="드레스"
        husband={company.dress_husband}
        bride={company.dress_bride}
        sum={company.dress_husband + company.dress_bride}
      />
      <WeddingTopItem
        title="헤어피스"
        husband={company.hairpin_husband}
        bride={company.hairpin_bride}
        sum={company.hairpin_husband + company.hairpin_bride}
      />
      <WeddingTopItem
        title="가 발"
        husband={company.wig_husband}
        bride={company.wig_bride}
        sum={company.wig_husband + company.wig_bride}
      />
      <WeddingTopItem
        title="비디오촬영"
        husband={company.video_husband}
        bride={company.video_bride}
        sum={company.video_husband + company.video_bride}
      />
      <WeddingTopItem
        title="기 타"
        husband={company.etc_husband}
        bride={company.etc_bride}
        sum={company.etc_husband + company.etc_bride}
      />
    </>
  );
}

export default WeddingTopCompany;
