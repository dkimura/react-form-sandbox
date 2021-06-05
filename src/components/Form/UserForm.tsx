import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'

export const UserForm: React.VFC = () => (
  <form>
    <FormControl>
      <FormLabel>名前</FormLabel>
      <Input type="name" />
    </FormControl>

    <Button type="submit">保存</Button>
  </form>
)
