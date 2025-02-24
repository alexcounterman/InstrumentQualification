import React, { useState } from 'react';
import { Button } from '@mui/material';
import ReauthDialog from './ReauthDialog';
import { signDocument } from '../services/api';
import { handleError } from '../utils/errorHandler';

const ReviewPanel = ({ documentId }) => {
  const [open, setOpen] = useState(false);

  const handleSign = async (password) => {
    try {
      await signDocument(documentId, password);
      alert('Document signed successfully');
    } catch (error) {
      handleError(error, 'signDocument');
    } finally {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)} variant="contained" color="secondary">
        Sign Document
      </Button>
      <ReauthDialog open={open} onClose={() => setOpen(false)} onConfirm={handleSign} />
    </div>
  );
};

export default ReviewPanel;
