// eslint-disable-next-line import/no-unresolved
import styled from "styled-components";
import Star from "./Star.png";
// eslint-disable-next-line import/no-cycle
import handleClick from "./Login";

export default function Header() {
  return (
    <Container>
      <nav>
        <ul>
          <li className="Accueil">Accueil</li>
          <li>
            <button type="button" onClick={handleClick}>
              Je me connecte
            </button>
          </li>
        </ul>
      </nav>
      <div className="block">
        <img src={Star} alt="logo" />
        <span>OPEN-SPOTIFY</span>
      </div>
    </Container>
  );
}
const Container = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    flex-flow:"row-wrap"
    margin-rigth: 25px;
  }
  ul li {
    font-size: 1.4rem;
    color: #ffffff;
    cursor: pointer;
    padding: 2rem 5rem;
  }
  .block {
    position: absolute;
    top: 25px;
    padding: 10px;
  }
  span {
    font-size: 25px;
    color: #ffffff;
  }
  button {
    padding: 1rem 2rem;
    border-radius: 5rem;
    background-color: #5931ba;
    color: #fff;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
  @media screen (and max-width: 700px) {
    .block{
        display:none;
    }
  }
`;
