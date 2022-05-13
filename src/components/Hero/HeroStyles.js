import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }

  #cursor {
    transform: translateY(0px) translateX(0px);
    display: inline-block;
    height: 36px;
    width: 10px;
    background-color: #eee;
    animation: flash 1.5s ease-out infinite;
  }
`;
