import React from 'react'
import './Services.css'
import ServiceHeading from '../service/components/ServiceHeading'
import ServiceRecords from '../service/components/ServiceRecordSales'

import ServicesFeatures from '../service/components/ServicesFeatures'
import Footer from '../../components/Footer'


const Services = () => {
  return (
    <div>
        <hr></hr>
        <ServiceHeading />
        <ServicesFeatures />
        <ServiceRecords />
        <Footer />
    </div>
  )
}

export default Services