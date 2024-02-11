import styled from 'styled-components'

export const SearchForm = styled.form`
  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  & > input {
    width: 100%;
    background-color: ${(props) => props.theme['base-input']};
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    padding: 12px 16px;
  }

  & > input:focus {
    border-color: ${(props) => props.theme.blue};
  }

  & > input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const Publications = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  margin-top: 48px;
  margin-bottom: 234px;
`
