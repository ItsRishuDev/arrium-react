import {
  ArriumWorksContainer,
  ArriumWorksMiddleContainer,
} from "./ArriumWorks.styled";

import ArriumWorksVerticleCard from "./ArriumWorksVerticleCard";
import ArriumWorksHorizontalCard from "./ArriumWorksHorizontalCard";

import Frame24 from "../../assets/Logo/Frame24.svg";
import Frame02 from "../../assets/Logo/Frame02.svg";
import Frame3 from "../../assets/Logo/Frame3.svg";
import Frame4 from "../../assets/Logo/Frame4.svg";

const ArriumWorks = () => {
  return (
    <ArriumWorksContainer>
      <ArriumWorksVerticleCard
        cardNumber="01"
        cardTitle="Enter your preferences"
        cardDescription="Enter your preferences for the days, times and locations that you
            want to work"
        cardImage={Frame24}
        textColor="#B6DDE5"
        cardColor="#E6F3F9"
      />
      <ArriumWorksMiddleContainer>
        <ArriumWorksHorizontalCard
          cardNumber="02"
          cardTitle="Press the start button"
          cardDescription="When you press the Start button, Arrium will immediately
      begin prowling your Offers page
      for blocks that meet your availability."
          cardImage={Frame02}
          imagePadding="3.8rem"
          textColor="#AFE5C4"
          cardColor="#E6F9EF"
        />
        <ArriumWorksHorizontalCard
          cardNumber="03"
          cardTitle="Arrium will check for offers that match"
          cardImage={Frame3}
          imagePadding="2rem"
          textColor="#CEBFFC"
          cardColor="#EFEAFE"
        />
      </ArriumWorksMiddleContainer>
      <ArriumWorksVerticleCard
        cardNumber="04"
        cardTitle="You will receive a notification when a block has been accepted"
        cardDescription="When Arrium see’s these blocks, in your Offers page, it’ll
        auto-accept the blocks, and send you an email and SMS notification."
        cardImage={Frame4}
        textColor="#B1C9FB"
        cardColor="#E8EFFF"
      />
    </ArriumWorksContainer>
  );
};

export default ArriumWorks;
