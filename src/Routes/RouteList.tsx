import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@views/Home';
import { Header } from '../components/forms/Header';

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
