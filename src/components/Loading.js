import { CircularProgress } from '@mui/material'

export const Loading = () => {
  return (
    <div className="h-[70vh] flex items-center">
      <CircularProgress sx={{ 'svg circle': { stroke: '#E07A5F' } }} />
    </div>
  )
}
