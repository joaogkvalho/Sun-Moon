import 'styled-components'

export module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            secundary: string,
            terciary: string,

            background: string,
            text: string
            buttonText: string,
        },
    }
}