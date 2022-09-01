// eslint-disable-next-line import/no-unresolved
import styled from "styled-components";
import Star from "./Star.png";
// eslint-disable-next-line import/no-cycle
export default function Header() {
  return (
    <Container>
      <div className="block">
        <img src={Star} alt="logo" />
        <span>Striming-App</span>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .block {
    display:flex;
    flex-flow:row wrap
    top: 35px;
    padding: 10px;
  }
  span {
    font-size: 25px;
    color: #ffffff;
  }
`;
