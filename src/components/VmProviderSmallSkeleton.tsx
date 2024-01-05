import {
  Skeleton,
  Stack,
} from '@chakra-ui/react'

export default function VmProviderSmallSkeleton() {
  return (
    <Stack>
      <Skeleton height="40px" width="80px" borderRadius="20px"/>
    </Stack>
  )
}
