import styled from 'styled-components';

export const Wrapper = styled.div`
  color: var(--white);
  background: var(--darkGrey);
  border-radius: 20px;
  padding: 5px;
  text-align: center;
  transition: all 0.3;

  h3 {
    margin-right: 10px;
  }

  p {
    margin: 5px 0;
  }

  :hover {
    opacity: 0.8;
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
`