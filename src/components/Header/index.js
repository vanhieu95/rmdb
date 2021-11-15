import React from 'react';
import { Link } from 'react-router-dom';

import RMDBLOGO from '../../images/react-movie-logo.svg';
import TMDBLOGO from '../../images/tmdb_logo.svg'

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.style';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <LogoImg src={RMDBLOGO} alt='rmdb-logo' />
      </Link>
      <TMDBLogoImg src={TMDBLOGO} alt='tmdb-logo' />
    </Content>
  </Wrapper>
)

export default Header
