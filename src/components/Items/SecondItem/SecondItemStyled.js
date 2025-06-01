import styled from "@emotion/styled";

export const SecondItemStyled = styled.li`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;

  text-align: left;

  background-color: #e0e0e0;

  border-radius: 10px;

  @media (min-width: 768px) {
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    padding-right: 0px;

    overflow: hidden;
  }

  & > h3 {
    font-size: 26px;
    line-height: 0.9;
    font-weight: 500;
    letter-spacing: -6%;

    color: #000;

    @media (min-width: 768px) {
      font-size: 28px;
    }
  }
`;

export const SocNetCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 56px;
  }
`;

export const Thumb = styled.div`
  width: 42px;
  height: 42px;

  margin-right: 8px;
  padding: 8px;

  background-color: #ffcc6a;

  border-radius: 50%;
`;

export const SocNetItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 24px;

  background-color: #fff;

  border-radius: 42px;

  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const ContentCon = styled.div`
  text-align: left;

  & > p:first-of-type {
    font-size: 16px;
    line-height: 0.9;
    letter-spacing: -6%;
    font-weight: 500;

    color: #000;
  }

  & > p:last-of-type {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -3%;

    color: #9e9e9e;
  }
`;
