import { Card, CardHeader, CardBody, CardFooter, Heading, Text, HStack, Button, Divider, Box, GridItem } from '@chakra-ui/react'




type boxProps = {
  header: string
  body: string
  footer: string

}
export const LotteryComp = (props: boxProps) => {


  const cardProp = {
    minH: '250px',
    fontSize: '16px',
    bg: 'tomato',
    ':hover': {
      color: 'purple.600',
    },
  }

  return (
    <Box bg="grey.50" height="250px">

      {/* <Text>sdsdsds</Text> */}
      <Card sx={cardProp}>
        <CardHeader>{props.header}</CardHeader>
        <Divider />
        <CardBody>
          {props.body}
        </CardBody>
        <CardFooter><Button>{props.footer}</Button></CardFooter>
      </Card>
    </Box >
  )
}
