import styled from "@emotion/styled";

export const FourthItemStyled = styled.li`
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 16px;
  padding-right: 16px;

  background-color: rgba(117, 81, 220, 0.5);
  color: #000;

  border-radius: 10px;

  @media (min-width: 768px) {
    grid-column: 1/-1;

    padding-left: 0;
    padding-right: 0;
  }

  & > h3 {
    margin-bottom: 24px;

    font-size: 26px;
    font-weight: 500;
    line-height: 0.9;
    letter-spacing: -6%;

    @media (min-width: 768px) {
      font-size: 28px;
    }
  }

  & > p {
    font-size: 18px;
    font-weight: 400;

    @media (min-width: 768px) {
      width: 360px;

      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const Thumb = styled.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
  }
`;
