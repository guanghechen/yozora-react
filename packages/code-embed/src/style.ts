import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  border: none;
  padding: 0;
  background: transparent;

  .yozora-code-embed__error-wrapper {
    display: block;
    width: 100%;
    height: 100%;
    color: red;
    border: 1px solid red;
  }

  .yozora-code-embed__error {
    display: block;
    width: 100%;
    min-height: 100%;
    padding: 0.5rem;
    background: transparent;
    white-space: pre-wrap;
    text-align: left;
  }
`
