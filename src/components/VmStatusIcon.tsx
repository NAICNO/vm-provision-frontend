import { VmStatusType } from '../types/VmStatusType.ts'
import { statusColorMap } from '../util'
import { MdPlayCircleOutline, MdStopCircle } from 'react-icons/md'
import { ProgressCircle, Icon } from '@chakra-ui/react'
import { IoMdInformationCircleOutline } from 'react-icons/io'

export const VmStatusIcon = ({status}: { status: VmStatusType }) => {
  const color = statusColorMap[status]
  switch (status) {
  case VmStatusType.STOPPED:
    return <Icon>
      <MdStopCircle/>
    </Icon>
  case VmStatusType.RUNNING:
    return <Icon size="lg">
      <MdPlayCircleOutline/>
    </Icon>
  case VmStatusType.PROVISIONING:
    return <ProgressCircle.Root value={null} size="xs" colorPalette={color}>
      <ProgressCircle.Circle>
        <ProgressCircle.Track/>
        <ProgressCircle.Range/>
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
  case VmStatusType.PROVISIONING_COMPLETED:
    return <Icon>
      <IoMdInformationCircleOutline/>
    </Icon>
  case VmStatusType.INITIALIZING:
    return <ProgressCircle.Root value={null} size="xs" colorPalette={color}>
      <ProgressCircle.Circle>
        <ProgressCircle.Track/>
        <ProgressCircle.Range/>
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
  case VmStatusType.DESTROYING:
    return <ProgressCircle.Root value={null} size="xs" colorPalette={color}>
      <ProgressCircle.Circle>
        <ProgressCircle.Track/>
        <ProgressCircle.Range/>
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
  default:
    return <Icon>
      <IoMdInformationCircleOutline/>
    </Icon>
  }
}
