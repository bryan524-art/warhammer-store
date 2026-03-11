import { HashRouter, Routes, Route } from "react-router-dom"
import { Header } from './features/layout/components/Header'
import { Content } from './features/layout/components/Content'
import { Footer } from './features/layout/components/Footer'
import { Toolbar, Box } from "@mui/material"

//components Auth
import { Myaccount } from './features/auth/components/Myaccount'
import { Mybusy } from './features/auth/components/Mybusy'
import { Myfavoritie } from './features/auth/components/Myfavoritie'

//components View
import { Article } from './features/view/components/Article'
import { Offers } from './features/view/components/Offers'
import { Car } from './features/view/components/Car'


function App() {
  return (
    <HashRouter>
      <Box sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
      }}>

        <Header />
        <Toolbar />

        <Box sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/articles" element={<Article />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/myaccount" element={<Myaccount />} />
            <Route path="/mybusy" element={<Mybusy />} />
            <Route path="/myfavoritie" element={<Myfavoritie />} />
            <Route path="/car" element={<Car />} />
          </Routes>
        </Box>

        <Footer />

      </Box>
    </HashRouter>
  )
}

export default App