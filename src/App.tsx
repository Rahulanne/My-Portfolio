import React from 'react';
import { MainLayout } from './layouts/MainLayout';
import { Hero } from './sections/Hero';
import { About } from './sections/About';

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
    </MainLayout>
  );
}

export default App;
