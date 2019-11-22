import styled from "styled-components";
import defaultImg from "../images/room-5.jpeg";

const styledHero = styled.header`
  min-height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${props => (props.img ? props.img : defaultImg)}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default styledHero;
