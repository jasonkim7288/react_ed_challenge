import React from 'react'
import { Box } from '@material-ui/core';
import BusinessCardForm from './BusinessCardForm';
import BusinessCardCard from './BusinessCardCard';
import { useSelector } from 'react-redux';

function BusinessCardMaker() {
  const businessCardFormData = useSelector(state => state.businessCardFormData);
  return (
    <Box>
      <BusinessCardForm />
      { businessCardFormData &&
        (
          <BusinessCardCard />
        )
      }
      <br />
    </Box>
  )
}

export default BusinessCardMaker
