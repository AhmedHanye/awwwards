import { lazy, Suspense } from 'react';
import Loading from './components/loading';

const Navbar = lazy(() => import('./components/navbar'));
const Hero = lazy(() => import('./pages/hero'));
const About = lazy(() => import('./pages/about'));
const Features = lazy(() => import('./pages/features'));
const Story = lazy(() => import('./pages/story'));
const Contact = lazy(() => import('./pages/contact'));

const App = () => {
  return (
    <main className="bg-blue-75 ">
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Story />
        <Contact />
      </Suspense>
    </main>
  );
};

export default App;
