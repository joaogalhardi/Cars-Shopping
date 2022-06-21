import React from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../../utils/car';
import styled from 'styled-components';

const HomeBg = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 20px;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  padding: 10px;
  gap: 10px;
  flex: 1;
  border: 1px solid rgba(0, 0, 0, 0.25);

  h1 {
    font-weight: 600;
    font-size: 2rem;
  }
`;

const Imagem = styled.img`
  max-width: 400px;
  height: 267px;
  position: relative;
  transition: 0.3s ease-out;
  &:hover {
    transform: scale3d(1.02, 1.02, 1.02);
  }
`;

const HomeTexto = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  font-size: 0.85rem;
  color: #ed751c;

  span {
    color: #000;
    font-weight: 400;
  }
`;

const Button = styled.button`
  font-size: 1.2rem;
  background-color: #ed751c;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #fc8830;
  }
`;

function Home() {
  return (
    <HomeBg>
      {cars.map((item) => {
        return (
          <HomeContainer>
            <Imagem src={item.photo} alt={item.name} />
            <h1>{item.name}</h1>
            <HomeTexto>
              <h2>
                <span>Valor: </span>
                {item.price}
              </h2>
              <Link to={item.path}>
                <Button>Saiba mais</Button>
              </Link>
            </HomeTexto>
          </HomeContainer>
        );
      })}
    </HomeBg>
  );
}

export default Home;
