import styled from "styled-components";

export const Container = styled.div`
  margin: auto;

  width: 80%;
  box-sizing: border-box;
  padding: 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  margin: 8px 0;
`;

export const Subtitle = styled.h4`
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  margin: 8px 0;
`;

export const StyledUl = styled.ul`
  max-width: 80%;
  align-self: center;
`;

export const StyledLi = styled.li`
  font-size: 18px;
  margin: 6px 0;
`;

export const Text = styled.p`
  font-size: 18px;
  margin: 6px 0;
`;
