import './Faqs.css';
import React from 'react';
import FaqHeader from './components/FaqHeader';
import FaqBody from './components/FaqBody';
import Footer from '../../components/Footer';

const Faqs = () => {
  return (
    <div>
        <FaqHeader />
        <FaqBody />
        <Footer />
    </div>
  )
}

export default Faqs