import React from 'react';

const EducationInfo = () => {
  const year = [1990, 2005, 2009, 2012];
  const contentTitle = [
    'oneoneoneone',
    'twotwotwotwo',
    'threethreethree',
    'fourfourfourfour',
  ];
  const content = [
    'one one one one one one one one one one one one one one one one one one one one one one one ' +
      'one one one one one one one one one one one one one one one one one one one ',
    'two two two two two two two two two two two two two two two two two two two two two two two ',
    'three three three three three three three three three three three three three three three three three ',
    'four four four four four four four four four four four four four four four ',
  ];
  return (
    <ul>
      <li>
        <h4>{year[0]}</h4>
        <div>
          <h4>{contentTitle[0]}</h4>
          <p>{content[0]}</p>
        </div>
      </li>
      <li>
        <h4>{year[1]}</h4>
        <div>
          <h4>{contentTitle[1]}</h4>
          <p>{content[1]}</p>
        </div>
      </li>
      <li>
        <h4>{year[2]}</h4>
        <div>
          <h4>{contentTitle[2]}</h4>
          <p>{content[2]}</p>
        </div>
      </li>
      <li>
        <h4>{year[3]}</h4>
        <div>
          <h4>{contentTitle[3]}</h4>
          <p>{content[3]}</p>
        </div>
      </li>
    </ul>
  );
};

export default EducationInfo();
