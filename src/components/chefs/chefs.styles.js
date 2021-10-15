import styled from "styled-components";
import { Container } from "../../Globalstyles";
import chef1Img from "../../images/chef1.jpeg";
import chef2Img from "../../images/chef2.png";
import chef3Img from "../../images/chef3.jpg";
import chef4Img from "../../images/chef4.jpeg";
import chef5Img from "../../images/chef5.jpg";
import chef6Img from "../../images/chef6.jpg";
import chef7Img from "../../images/chef7.jpeg";
import chef8Img from "../../images/chef8.jpeg";

export const WorksContent = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

export const WorksContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 8rem;
  color: #333333;
  ${Container};
`;

export const WorksTitle = styled.h2`
  font-size: clamp(2rem, 8.5vw, 5rem);
  font-weight: bold;
`;

export const WorksCardContent = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;

  @media (min-width: 370px) and (max-width: 499px) {
    width: 35rem;
  }
  @media (min-width: 500px) {
    width: 45rem;
  }
  @media (min-width: 600px) {
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(2, 1fr);
    width: 60rem;
  }
  @media (min-width: 650px) {
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(2, 1fr);
    width: 66rem;
  }
  @media (min-width: 830px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    width: 88rem;
  }
  @media (min-width: 1000px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
    width: 120rem;
  }
`;

export const WorksCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 30rem;
  height: 30rem;
  background-color: #fff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  transition: all 0.5s ease;

  @media (min-width: 370px) and (max-width: 499px) {
    width: 35rem;
  }
  @media (min-width: 500px) {
    width: 45rem;
  }
  @media (min-width: 600px) {
    width: 29rem;
  }
  @media (min-width: 650px) {
    width: 32rem;
  }
  @media (min-width: 830px) {
    width: 28rem;
  }
  @media (min-width: 1000px) {
    width: 28rem;
  }
  &:hover {
    box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.21);
    transform: scale(1.05);
    background-color: #e38b06;
    color: #fff;
    cursor: pointer;
  }
`;

export const WorksIconContainer = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  transition: all 0.3s ease-out;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100% 100%;
  background-position: center;

  &:nth-of-type(1) {
    background-image: url(${chef1Img});
  }
  &:nth-of-type(2) {
    background-image: url(${chef2Img});
  }
  &:nth-of-type(3) {
    background-image: url(${chef3Img});
  }
  &:nth-of-type(4) {
    background-image: url(${chef4Img});
  }
  &:nth-of-type(5) {
    background-image: url(${chef5Img});
  }
  &:nth-of-type(6) {
    background-image: url(${chef6Img});
  }
  &:nth-of-type(7) {
    background-image: url(${chef7Img});
  }
  &:nth-of-type(8) {
    background-image: url(${chef8Img});
  }
`;

export const WorksCardTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: bold;
  padding-top: 1rem;
`;

export const WorksCardText = styled.p`
  font-size: 1.8rem;
  padding: 1rem 2rem;
`;
