import React from 'react';
import Tour from './Tour';
const Tours = ({ tours }) => {
  return (
    <section className='title'>
      <h2>Tours</h2>
      <div className='underline'></div>
      <div>
        {tours.map((tour) => {
          // using spread operator to get all properties from api
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
