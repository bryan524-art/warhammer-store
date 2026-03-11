import * as React from 'react'

import { Usestate } from '../hooks/UseState'
import { Useeffect } from '../hooks/Useeffect'
import { Useeffect2 } from '../hooks/Useeffect2'
import { Usecontext } from '../hooks/Usecontext'
import { Useref } from '../hooks/Useref'
import { Usereducer } from '../hooks/Usereducer'
import { Usecallback } from '../hooks/Usecallback'
import { Usememo } from '../hooks/Usememo'

import { Box, Card } from '@mui/material'

export const Offers = () => {
  return (
    <Box sx={{
      marginTop: { xs: "0.5%", sm: "1.5%", md: "2.5%" },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%"
    }}>

      <Card sx={{
        width: { xs: "95%", sm: "80%", md: "60%", lg: "50%" },
        padding: "1rem",
        margin: { xs: "4px", sm: "8px", md: "12px" },
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",
      }}>
        <Usestate />
      </Card>

      <Card sx={{
        width: { xs: "95%", sm: "80%", md: "40%", lg: "30%" },
        minHeight: { xs: "140px", sm: "160px", md: "180px" },
        padding: "1rem",
        margin: { xs: "4px", sm: "8px", md: "12px" },
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",
      }}>
        <Useeffect />
      </Card>

      <Card sx={{
        width: { xs: "95%", sm: "80%", md: "60%" },
        padding: "1rem",
        margin: { xs: "4px", sm: "8px", md: "12px" },
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",
      }}>
        <Useeffect2 />
      </Card>

      <Card sx={{
        width: { xs: "95%", sm: "80%", md: "60%" },
        padding: "1rem",
        margin: { xs: "4px", sm: "8px", md: "12px" },
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",
      }}>
        <Usecontext />
      </Card>

      <Card sx={{
        width: { xs: "95%", sm: "80%", md: "60%" },
        padding: "1rem",
        margin: { xs: "4px", sm: "8px", md: "12px" },
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",
      }}>
        <Useref />
      </Card>

      <Card sx={{
        width: { xs: "95%", sm: "80%", md: "60%" },
        padding: "1rem",
        margin: { xs: "4px", sm: "8px", md: "12px" },
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",
      }}>
        <Usereducer />
      </Card>

      <Card sx={{
        width: { xs: "95%", sm: "80%", md: "60%" },
        padding: "1rem",
        margin: { xs: "4px", sm: "8px", md: "12px" },
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",
      }}>
        <Usecallback />
      </Card>

      <Card sx={{
        width: { xs: "95%", sm: "80%", md: "60%" },
        padding: "1rem",
        margin: { xs: "4px", sm: "8px", md: "12px" },
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",
      }}>
        <Usememo />
      </Card>

    </Box>
  )
}