import React from 'react';
import Logo from '../assets/images/car-logo.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderModificada = styled.header`
  padding: 30px 0px;
  max-width: 1300px;
  margin: 0 auto;

  img {
    padding-left: 20px;
  }
`;

export default function Header() {
  return (
    <HeaderModificada>
      <Link to={'/'}>
        <a href="/">
          <img src={Logo} alt="sportscar" />
        </a>
      </Link>
    </HeaderModificada>
  );
}
