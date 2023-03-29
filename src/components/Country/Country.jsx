import React from 'react';

// const Country = ({ name, languages }) => {
const Country = ({ country }) => {
  const { name, languages } = country;
  const len = [];
  for (const language in languages) {
    len.push(languages[language]);
  }
  console.log(len);
  console.log(languages);
  return (
    <div className="border p-2 rounded-md">
      <h5>Name : {name.common}</h5>
      <h6>Language : {len.join(', ')}</h6>
    </div>
  );
};

export default Country;
