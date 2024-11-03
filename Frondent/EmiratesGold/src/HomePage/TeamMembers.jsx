// eslint-disable-next-line no-unused-vars
import React from 'react';
import pic from '../assets/Images/profile.png'

const teamMembers = [
  {
    name: 'Flora Nyra',
    title: 'Product Manager',
    imgSrc: `${pic}`,
  },
  {
    name: 'Evander Mac',
    title: 'Art Director',
    imgSrc: `${pic}`,
  },
  {
    name: 'Taytum Elia',
    title: 'Investment Planner',
    imgSrc: `${pic}`,
  },
  {
    name: 'Wylder Elio',
    title: 'Financial Analyst',
    imgSrc: `${pic}`,
  },
];

const TeamMembers = () => {
  return (
    <section className="bg-gray-300 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-4">Our Team</h2>
        <p className="text-lg text-gray-600 mb-8">
          We are a group of innovative, experienced, and proficient teams. You will love to collaborate with us.
        </p>
        <hr className="w-1/4 mx-auto mb-10 border-gray-300" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
            >
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-full h-48 sm:h-64 object-cover" 
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-gray-500">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
