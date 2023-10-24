import { Form, redirect } from 'react-router-dom'
import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Button,
  Checkbox
} from '@chakra-ui/react'

export default function Create() {
  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Item name:</FormLabel>
          <Input type="text" name="title"/>
          <FormHelperText>Enter a descriptive item name.</FormHelperText>
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Item description:</FormLabel>
          <Textarea
            placeholder="Enter a detailed description ..."
            name="description"
          />
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox
            name="isPriority"
            colorScheme="purple"
            size="lg"
          />
          <FormLabel mb="0" ml="10px">Make a priority item</FormLabel>
        </FormControl>

        <Button type="submit">submit</Button>
      </Form>
    </Box>
  )
}

export const createAction = async ({ request } ) => {
  const data = await request.formData()

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === '',
  }

  console.log(task)

  return redirect('/')
}