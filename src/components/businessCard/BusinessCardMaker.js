import React, { useState } from 'react'
import { Box } from '@material-ui/core';
import BusinessCardForm from './BusinessCardForm';
import BusinessCardCard from './BusinessCardCard';

function BusinessCardMaker() {
  const [submittedForm, setSubmittedForm] = useState(null);

  const handleSubmitCb = (values) => {
    setSubmittedForm(values)
  }

  return (
    <Box>
      <BusinessCardForm handleSubmitCb={handleSubmitCb}/>
      { submittedForm &&
        (
          <BusinessCardCard submittedForm={submittedForm}/>
        )
      }
      <br />
    </Box>
  )
}

export default BusinessCardMaker
