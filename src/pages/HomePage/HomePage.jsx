import { Element, animateScroll as scroll } from "react-scroll";
import { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Navbar from "../../components/Navbar";
import { BannerContainer, CardContainer } from "./HomePage.styled";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import Card from "../../components/Card";
import ArriumWorks from "../../components/ArriumWorks";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import { cardData } from "./HomePage.data";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Box } from "@mui/material";

const HomePage = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  const handleScroll = (event) => {
    console.log("user scrolled : ", event.target.scrollTop);
  };

  const handleClick = () => {
    scroll.scrollToTop();
  };

  const renderedCards = cardData.map((data, index) => {
    return (
      <Card
        icon={data.icon}
        title={data.title}
        description={data.description}
        key={index}
      />
    );
  });

  return (
    <>
      <Box
        position="fixed"
        bottom="20px"
        right="20px"
        bgcolor="
#3071F2"
        borderRadius="50%"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        onClick={handleClick}
      >
        <IconButton>
          <ArrowUpwardIcon
            sx={{
              color: "white",
            }}
          />
        </IconButton>
      </Box>
      <Navbar
        onScroll={handleScroll}
        style={{ overflowY: "scroll", height: "200px" }}
      />
      <BannerContainer>
        <Banner />
      </BannerContainer>
      <Element name="BenefitSection">
        <Title title="The Amazing Benefits" />
        <CardContainer>{renderedCards}</CardContainer>
      </Element>

      <Element name="HowItWork">
        <Title title="How Arrium Works" />
        <ArriumWorks />
      </Element>
      <Element name="Contact">
        <Contact />
      </Element>
      <Footer />
    </>
  );
};

export default HomePage;
