[![npm version](https://img.shields.io/npm/v/@yozora/react-strong.svg)](https://www.npmjs.com/package/@yozora/react-strong)
[![npm download](https://img.shields.io/npm/dm/@yozora/react-strong.svg)](https://www.npmjs.com/package/@yozora/react-strong)
[![npm license](https://img.shields.io/npm/l/@yozora/react-strong.svg)](https://www.npmjs.com/package/@yozora/react-strong)


This package is designed to render [mdast strong][] type data


# Install

  ```shell
  yarn add @yozora/react-strong
  ```

# Usage
  * Use in React project

    - Pure

      ```tsx
      import React from 'react'
      import Strong from '@yozora/react-strong'

      const wrapper = (
        <Strong style={{ color: 'orange', fontSize: '16px' }}>
          some text1
          <span>some text2</span>
        </Strong>
      )
      ```

    - With theme

      ```tsx
      import React from 'react'
      import { DefaultTheme, ThemeProvider } from 'styled-components'
      import Strong from '@yozora/react-strong'

      const theme: DefaultTheme = {
        yozora: {
          strong: {
            color: 'red',
            fontSize: 18,
            // fontWeight: 'bold',
            fontStyle: 'oblique',
          }
        }
      }

      const wrapper = (
        <ThemeProvider theme={ theme }>
          <Strong>
            some text1
            <span>some text2</span>
          </Strong>
        </ThemeProvider>
      )
      ```

  * Props

     Name       | Type                                | Required  | Default | Description
    :----------:|:-----------------------------------:|:---------:|:-------:|:-------------
     `ref`      | `React.RefObject<HTMLSpanElement>`  | `false`   | -       | Forwarded ref callback
     `children` | `React.ReactNode`                   | `true`    | -       | strong content

    StrongProps inherited all attributes of `HTMLSpanElement` (`React.HTMLAttributes<HTMLSpanElement>`)

  * Theme

     Prop Name    | Default
    :------------:|:--------------
     color        | `inherit`
     fontSize     | `inherit`
     fontWeight   | `600`
     fontStyle    | `inherit`

    See [YozoraStrongTheme][] for details.


# References

  - [mdast strong][]


[mdast strong]: https://github.com/syntax-tree/mdast#strong
[YozoraStrongTheme]: https://github.com/guanghechen/yozora-react/blob/master/packages/strong/src/theme.ts