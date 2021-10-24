import './App.scss';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import NewsLetterPage from './pages/NewsLetterPage';
import NutritionPage from './pages/NutritionPage';
import PricingPage from './pages/PricingPage';
import ProgramPage from './pages/ProgramPage';

function App() {
  return (
    <Layout>
      <HomePage />
      <ProgramPage />
      <NutritionPage />
      <PricingPage />
      <AboutPage />
      <NewsLetterPage />
    </Layout>
  );
}

export default App;
