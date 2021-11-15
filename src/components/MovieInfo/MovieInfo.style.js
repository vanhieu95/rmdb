import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`
  background: ${({ backdrop }) => backdrop
    ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'
  };
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo{
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0,0,0, 0.7);
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    display: block;
    max-width: none;
  }
`

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  .rating-director {
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: var(--white);
    color: #000;
    font-weight: 800;
    border-radius: 50%;
  }

  .director {
    margin-left: 40px;
  }

  p {
    margin-top: 20px;
  }

  h1 {
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig)
    }
  }
`