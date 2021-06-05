const ChakraProvider = require('@chakra-ui/react').ChakraProvider

const emotionDecorator = (Story, context) => (
  <ChakraProvider>
    <Story {...context} />
  </ChakraProvider>
)

export const decorators: DecoratorFn[] = [emotionDecorator]

/** @type {import('@storybook/react').Parameters} */
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
