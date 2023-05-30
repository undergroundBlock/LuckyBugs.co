import React, { useState } from 'react'
import styles from './EmailSubscriptionForm.module.css'
import { Box, Button, FormControl, FormHelperText, FormLabel, Heading, Input, Text } from '@chakra-ui/react'

// import PropTypes from 'prop-types'


interface EmailSubscriptionFormProps {
  onSubmit: (email: string) => void;
}

export const EmailSubscriptionForm: React.FC<EmailSubscriptionFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onSubmit(email)
    setEmail('')
  }

  const boxStyles = {
    p: '12px',
    bg: 'black.50',
    color: 'blackAlfa.800',
    textAlign: 'center',
    // filter: 'blur(1px)',
    // ':hover': {
    //   bg: 'green.300',
    //   color: 'black.400',
    // },
  }

  return (
    <Box sx={boxStyles}>
      <Heading as="h3" fontWeight="extrabold" mb={10}>Subscribe!</Heading>

      <FormControl colorScheme="blackAlpha" onSubmit={handleSubmit}>
        <FormLabel fontWeight="extrabold" my="2">Subscribe to get news before everyone else</FormLabel>
        <Input my="2" type="email" placeholder="Enter your email"
          value={email}
          onChange={handleChange}
          colorScheme="purple" />
        <FormHelperText marginY={2}>We'll never share your email address.</FormHelperText>
        <Button my="2" colorScheme="purple" type="submit" onSubmit={handleSubmit}>Subscribe</Button>
      </FormControl>

    </Box >

  )
}

