import React from 'react'
import HeroSection from './components/HeroSection'
interface Service {
  title: string
  description: string
  image: string
}

const services: Service[] = [
  {
    title: 'Web Development',
    description:
      'We build fast, responsive, and SEO-friendly websites using modern technologies like React, Next.js, and Tailwind CSS. Our team delivers scalable solutions tailored to your business needs.',
    image:
      'https://static.vecteezy.com/system/resources/previews/001/879/576/original/designing-program-web-apps-on-monitor-screen-or-desktop-teamwork-in-developing-programming-debugging-development-process-illustration-for-website-homepage-header-landing-web-page-template-free-vector.jpg',
  },
  {
    title: 'AI Agents',
    description:
      'Empower your business with intelligent AI agents. From chatbots to workflow automation, we build smart assistants that enhance productivity and user experience using advanced machine learning models.',
    image:
      'https://techcrunch.com/wp-content/uploads/2024/07/GettyImages-1497617145-1.jpg',
  },
]

const Services = () => {
  return (
    <>
    <HeroSection/>
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-12">
      
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our Services
      </h1>

      <div className="grid gap-10 md:grid-cols-1 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white md:flex  rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-96 w-full object-fill sm:object-cover"
            />
            <div className="p-20 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Services
