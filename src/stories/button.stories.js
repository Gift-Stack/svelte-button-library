import Button from '../components/buttons/Button.svelte'

export default {
  title: 'Button',
  component: Button
}

export const Default = () => ({
  Component: Button,
  props: {
    value: 'Button'
  }
})

export const Success = () => ({
  Component: Button,
  props: {
    value: 'Button',
    type: 'success'
  }
})
