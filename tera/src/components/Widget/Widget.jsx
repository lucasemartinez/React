import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Stack from 'react-bootstrap/esm/Stack'

export default function Widget() {
  return  (
    <>
      <Stack direction="horizontal" gap={2}>
        <FontAwesomeIcon icon={faCartShopping} size="xl" />
      </Stack>
    </>
  )
}
