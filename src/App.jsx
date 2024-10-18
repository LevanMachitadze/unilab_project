import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Banner from './components/Banner';
import PetsSection from './components/PetsSection';
import PetListPage from './components/PetListPage';
import Comertial from './components/Comertial';
import ProductsSection from './components/ProductsSection';
import AdoptionSection from './components/AdoptionSection';
import Footer from './components/Footer';
import SliderSection from './components/SliderSection';
import CountdownTimer from './components/CoutDownTimer';
import PetDetailPage from './components/PetDetailPage';

function Layout() {
  const location = useLocation();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios
      .get('/db.json')
      .then((response) => {
        setPets(response.data.pets);
      })
      .catch((error) => console.error('Error fetching pet data: ', error));
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <div>
      <Header />
      {isHomePage && (
        <>
          <Banner />
          <PetsSection />
          <Comertial />
          <ProductsSection />
          <AdoptionSection />
          <SliderSection />
          <CountdownTimer />
        </>
      )}
      <Routes>
        <Route path='/pets' element={<PetListPage pets={pets} />} />
        <Route path='/pets/:id' element={<PetDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
