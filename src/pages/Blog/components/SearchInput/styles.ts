import styled from 'styled-components'

export const SearchInputContainer = styled.form`
  margin-top: 4.5rem;
  margin-bottom: 3rem;
  width: 100%;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-size: ${({ theme }) => theme.textSizes['title-title-s']};
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }

    span {
      font-size: ${({ theme }) => theme.textSizes['text-text-s']};
      color: ${({ theme }) => theme.colors['base-span']};
    }
  }

  input {
    margin-top: 0.75rem;
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors['base-input']};
    border: 1px solid ${({ theme }) => theme.colors['base-border']};
    color: ${({ theme }) => theme.colors['base-text']};
    transition: 0.4s;

    &:focus {
      border-color: ${({ theme }) => theme.colors['brand-blue']};
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }
`
