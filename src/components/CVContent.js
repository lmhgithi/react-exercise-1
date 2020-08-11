import React from 'react';
import educationInfo from './EducationInfo';

const CVContent = () => {
  return (
    <section id="CVContent">
      <h3>ABOUT ME</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
        non, dolorem, cumque distictio magni quam expedita velit laborum sunt
        amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum!
        Quasi
      </p>
      <h3>EDUCATION</h3>
      {educationInfo}
    </section>
  );
};

export default CVContent();
