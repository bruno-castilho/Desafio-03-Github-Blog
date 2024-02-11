import styled from 'styled-components'

export const PublicationContainer = styled.div`
  width: 416px;
  height: 260px;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  border: 2px solid transparent;
  padding: 32px;
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  & > div {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }

  & > div > h3 {
    font-size: 20px;
    line-height: 160%;
    color: ${(props) => props.theme['base-title']};
  }

  & > div > span {
    white-space: nowrap;
    font-size: 14px;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }

  & > p {
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    margin-top: 20px;
  }
`
