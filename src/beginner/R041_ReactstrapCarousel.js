import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
const items = [
  {
    src: "/images/1bg.jpg",
    altText: "슬라이드1 이미지 대체 문구",
    caption: "슬라이드1 설명",
    header: "슬라이드1 제목",
  },
  {
    src: "/images/2bg.jpg",
    altText: "슬라이드2 이미지 대체 문구",
    caption: "슬라이드2 설명",
    header: "슬라이드2 제목",
  },
  {
    src: "/images/3bg.jpg",
    altText: "슬라이드3 이미지 대체 문구",
    caption: "슬라이드3 설명",
    header: "슬라이드3 제목",
  },
];

class R041_ReactstrapCarousel extends Component {
    render() {
        return (
            <div>
                <UncontrolledCarousel items={items}/>
            </div>
        )}
}

export default R041_ReactstrapCarousel;