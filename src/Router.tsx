import { Routes, Route, Navigate } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Success } from './pages/Success'

import { useCheckout } from './hooks/useCheckout'

export function Router() {
  const { itemsOnCart } = useCheckout()

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/checkout"
          element={itemsOnCart.length < 1 ? <Navigate to="/" /> : <Checkout />}
        />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
