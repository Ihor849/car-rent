import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: all 1s ease-in-out;
  width: 274px;
  height: 426px;
  margin-top: 50px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
  & > button.learnBtn {
    margin-top: auto;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  border-radius: 14px;
  background-color: #7775;

  display: flex;
  align-items: start;
  justify-content: flex-end;
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
  }
  & > button.likeBtn {
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 0;
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    & > svg {
      fill: var(--white);
    }
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0 4px;
  color: var(--black);
  font-weight: 600;
`;
export const RowWrapper = styled.div`
  display: flex;
  color: var(--semi-black);
  font-size: 12px;

  & > p {
    padding: 2px 4px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > p:not(:last-child) {
    border-right: 2px solid var(--semi-black);
  }
`;
