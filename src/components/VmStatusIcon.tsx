import {VmStatusType} from '../types/VmStatusType.ts'
import {statusColorMap} from '../util'
import {Icon} from '@chakra-ui/icons'
import {MdPlayCircleOutline, MdStopCircle} from 'react-icons/md'
import {CircularProgress} from '@chakra-ui/react'
import {IoMdInformationCircleOutline} from 'react-icons/io'

export const VmStatusIcon = ({status}: { status: VmStatusType }) => {
  const color = statusColorMap[status]
  switch (status) {
  case VmStatusType.STOPPED:
    return <Icon as={MdStopCircle}/>
  case VmStatusType.RUNNING:
    return <Icon as={MdPlayCircleOutline}/>
  case VmStatusType.PROVISIONING:
    return <CircularProgress isIndeterminate size="15px" color={color}/>
  case VmStatusType.PROVISIONING_COMPLETED:
    return <Icon as={IoMdInformationCircleOutline}/>
  case VmStatusType.INITIALIZING:
    return <CircularProgress isIndeterminate size="15px" color={color}/>
  case VmStatusType.DESTROYING:
    return <CircularProgress isIndeterminate size="15px" color={color}/>
  default:
    return <Icon as={IoMdInformationCircleOutline}/>
  }
}
