function Fresh() {
  return (
    <div className="box_how_make2">
      <div className="box_txt">
        <h4>
          <span className="titleNo">02</span>
          <span className="tit">
            FRESH
            <br />
            INGREDIENTS
          </span>
        </h4>
        <p className="txt1">
          최상급의 재료를 사용하여 맛있는 피자를 만듭니다.
          <br />
          <br />
          고피자에서 엄선한 재료를 사용하여 만든 빠삭도우에
          <br />
          신선한 토마토소스와 <br />
          자연산 100% 치즈를 기본으로 <br />
          고피자만의 다양하고 신선한 토핑 식재료들을
          <br />
          사용하고 있습니다.
          <br />
          <br />
          남녀노소 모두 걱정없이 <br />
          건강하고 맛있는 피자를 즐겨보세요!
        </p>
      </div>
      <div className="box_desc_img">
        <picture>
          <source media="(max-width: 767px)" srcSet="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/howwemake/mobile/img_make2.webp" />
          <source media="(min-width: 768px)" srcSet="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/howwemake/img_make2.webp" />
          <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/howwemake/img_make2.webp" alt="FRESH INGREDIENTS" />
        </picture>
      </div>
    </div>
  );
}

export default Fresh;
