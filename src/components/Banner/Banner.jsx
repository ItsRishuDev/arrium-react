import {
  BannerOuterContainer,
  BannerTopText,
  BannerMiddleText,
  BannerLowerText,
  BannerStartButton,
  BannerImage,
} from "./Banner.styled";

import SearchRunning from "../../assets/images/SearchRunning.png";

const Banner = () => {
  return (
    <BannerOuterContainer>
      <BannerTopText>
        No refreshing. Auto accepting. Instant notifications.
      </BannerTopText>
      <BannerMiddleText>
        The freedom and flexibility to earn maximum <br />
        amount, according to your schedule.
      </BannerMiddleText>
      <BannerLowerText>
        Arrium allows you to set your preferences for the blocks that you want
        to work,
        <br /> and then it accepts the blocks as soon as they appear.
      </BannerLowerText>
      <BannerStartButton variant="contained">
        Start Free Trial
      </BannerStartButton>
      <BannerImage>
        <img
          src={SearchRunning}
          alt="Search Running"
          style={{
            width: "936.8px",
          }}
        />
      </BannerImage>
    </BannerOuterContainer>
  );
};

export default Banner;
