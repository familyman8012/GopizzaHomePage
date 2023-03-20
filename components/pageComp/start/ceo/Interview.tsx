import VideoPlay from "ComponentsFarm/common/VideoPlay";
import React, { useRef, useState } from "react";
import { InterviewWrap } from "../style";

const interviewArr = [
  { videoUrl: "https://youtu.be/e2ly52UQ8Pw", alt: "푸드트럭으로 500억을 벌 수 있다고?" },
  { videoUrl: "https://youtu.be/ipp9cr59Zgw", alt: "나는 될 때까지 하는 사람입니다" },
  { videoUrl: "https://youtu.be/q5lobKW0Lv4", alt: "그 푸드트럭은 맥도날드도 풀지 못한 문제를 풀었다" },
  { videoUrl: "https://youtu.be/LpMU8jbRtks", alt: "20대, 다른 애들 놀때 저는 피자를 만들었어요" },
  { videoUrl: "https://youtu.be/beFt1dw3qpA", alt: "300만원으로 시작해 1년에 100억 버는 30대 피자집 사장님" },
  { videoUrl: "https://youtu.be/jILvmgSqu2Y", alt: "도우는 끈기, 토핑은 기술! K-피자의 혁신" },
];

function Interview() {
  return (
    <InterviewWrap>
      <h4>INTERVIEW</h4>
      <ul className="list_interview">
        {interviewArr.map((el, i) => (
          <li key={i}>
            <VideoPlay
              videoUrl={el.videoUrl}
              imgUrl={`https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/media/img_interview${i + 1}x2.webp`}
              txt1={el.alt}
            />
          </li>
        ))}
      </ul>
    </InterviewWrap>
  );
}

export default Interview;
