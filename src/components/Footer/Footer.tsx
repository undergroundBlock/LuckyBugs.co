import { useMetaMask } from '~/hooks/useMetaMask'
import styles from './Footer.module.css'
import { Box } from '@chakra-ui/react'

export const Footer = () => {
  const { error } = useMetaMask()
  return (
    <Box as="footer">
      <div className={styles.footer} style={
        error ? { backgroundColor: 'red' } : {}
      }>
        <div>
          <strong>copyright@2023</strong>
        </div>
      </div>
    </Box>
  )
}

