import React, { useEffect, useState } from 'react';
import { fetchInstruments } from '../services/api';
import InstrumentList from './InstrumentList';

const Dashboard = () => {
  const [instruments, setInstruments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInstruments = async () => {
      try {
        const data = await fetchInstruments();
        setInstruments(data);
      } catch (error) {
        // Handled in fetchInstruments
      } finally {
        setLoading(false);
      }
    };
    loadInstruments();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Instrument Qualification Dashboard</h2>
      <InstrumentList instruments={instruments} />
    </div>
  );
};

export default Dashboard;
