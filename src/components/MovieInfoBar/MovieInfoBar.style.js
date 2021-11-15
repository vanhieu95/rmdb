import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100px;
  background: var(--darkGrey);
  padding: 20px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: var(--maxWidth);
  width: 100%;
  margin: auto;

  .column {
    background: var(--medGrey);
    border-radius: 20px;
    margin: 0 20px;
    flex: 1;
    text-align: center;
    padding: 20px;
    transition: all 0.3;

    :hover {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
    
    .column {
      margin: 20px 0;
    }
  }
`