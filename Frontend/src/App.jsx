
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './pages/Home';
import Add from './pages/Add';
import Admin from './pages/Admin';
import NoPage from './pages/NoPage';
import Detail from './pages/Detail';
import { HelmetProvider } from 'react-helmet-async';
import MainProvider from './context/MainProvider';
import Basket from './pages/Basket';
import Uptade from './pages/Uptade';
import WishList from './context/WishList';
import WishListPage from './pages/WishListPage';
function App() {

  return (
    <>
    <MainProvider>
      <WishList>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path="/Add" element={<Add />} />
              <Route path="/Detail/:id" element={<Detail />} />
              <Route path="/Basket" element={<Basket />} />
              <Route path="/Uptade/:id" element={<Uptade />} />
              <Route path="/Wishlist" element={<WishListPage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
      </WishList>
      </MainProvider>
    </>
  )
}

export default App
