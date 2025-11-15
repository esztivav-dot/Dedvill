import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Rolunk from './pages/Rolunk/Rolunk'
import Szolgaltatasok from './pages/Szolgaltatasok/Szolgaltatasok'
import VBF from './pages/VBF/VBF'
import Kapcsolat from './pages/Kapcsolat/Kapcsolat'

export default function App() {
  return (
    <div className="site">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rolunk" element={<Rolunk />} />
          <Route path="/szolgaltatasok" element={<Szolgaltatasok />} />
          <Route path="/vbf" element={<VBF />} />
          <Route path="/kapcsolat" element={<Kapcsolat />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </div>
  )
}
