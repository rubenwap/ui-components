import React from 'react';

interface Person {
  name:string
}

const HelloPerson = ({name}:Person) => <p>Hello {name}</p>;

export default HelloPerson