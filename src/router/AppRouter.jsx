import { Route, Routes } from 'react-router-dom'
import { JournalRoutes } from '../Journal/routes/JournalRoutes'
import { AuthRoutes } from '../auth/routes/AuthRoutes'


export const AppRouter = () => {
  return (
    <Routes>

        {/* Login y register */}
        <Route path="/auth/*" element={<AuthRoutes />}/>
    
        {/* JournalApp */}
        <Route path="/*" element={<JournalRoutes />}/>

    </Routes>
  )
}
