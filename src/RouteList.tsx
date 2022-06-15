import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../src/page/Home';
import { Header } from './components/Header';

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
