import {Box,useTheme} from "@mui/material"
import { tokens } from "../theme"



const ProgressCircle = ({progress = "0.75", size="40"}) => {
    const Theme =useTheme();
    const colors = tokens(Theme.palette.mode);
    const angle= progress*360;

  return (
    <Box
    sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%), conic-gradient(from 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle} 360deg),
            ${colors.greenAccent[500]}`,
       borderRadius:"50px",
       width:"${size}px",
       height:"${size}px"
    }}
    />
      
   
  )
}

export default ProgressCircle
