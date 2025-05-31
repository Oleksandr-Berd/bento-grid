import styled from "@emotion/styled";

export const FirstItemStyled = styled.li`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 32px;
  padding-right: 32px;

  background-color: #7551dc;

  border-radius: 10px;

  & h3 {
    margin-bottom: 24px;

    font-size: 46px;
    font-weight: 500;
    line-height: 0.9;
    letter-spacing: -4%;

    color: #ffffff;

    & > span:first-of-type {
      color: #ffcc6a;
    }

    & > :last-of-type {
      font-style: italic;
    }
  }

  & ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-bottom: 8px;

    & > *:not(:last-of-type) {
      margin-right: 8px;
    }
  }

  & > p {
    font-size: 18px;
    line-height: 1.1;
    font-weight: 400;

    color: #ffffff;
  }
`;
