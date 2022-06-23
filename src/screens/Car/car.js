import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  max-width: 1300px;
  margin: 0 auto;
`;

const CarBg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  gap: 60px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ImgCar = styled.img`
  max-width: 100%;
  object-fit: cover;
`;

const CarText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    color: #ed751c;
  }
`;

const Button = styled.button`
  align-self: center;
  width: 100%;
  padding: 15px 0px;
  border: none;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #ed751c;
    color: #fff;
  }
`;

const TextoCarro = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;

export default function Car({ nome, preco, ano, foto, descricao }) {
  return (
    <Section>
      <CarBg>
        <CarText>
          <ImgCar src={foto} alt="carro" />
          <div>
            <h1>{nome}</h1>
            <p>Ano: {ano}</p>
          </div>
          <h2>{preco}</h2>
          <Button>Entre em contato conosco</Button>
        </CarText>
        <TextoCarro>{descricao}</TextoCarro>
      </CarBg>
    </Section>
  );
}
