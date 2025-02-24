import React from 'react';

const InstrumentList = ({ instruments }) => (
  <ul>
    {instruments.map((inst) => (
      <li key={inst.id}>{inst.name} - {inst.status}</li>
    ))}
  </ul>
);

export default InstrumentList;
