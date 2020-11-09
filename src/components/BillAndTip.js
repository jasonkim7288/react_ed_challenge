import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Box, Typography, TextField, Button } from '@material-ui/core';

const initialValues = {
  billAmount: 0,
  tipPercentage: 0
};

const validationSchema = Yup.object().shape({
  billAmount: Yup.number()
    .required(),
  tipPercentage: Yup.number()
    .required()
})

function MyTextField(props) {
  const {errors, name} = props;
  return (
    <Field {...props} error={errors[name] ? true : false} helperText={errors[name]} as={TextField}/>
  )
}

function BillAndTip() {
  const [bill, setBill] = useState(null);
  const [tip, setTip] = useState(null);

  const handleSubmit = (values) => {
    const newBill = parseInt(values.billAmount);
    const newTip = parseInt(values.tipPercentage)
    const realTip = Math.ceil(newBill * newTip / 100);
    setBill(newBill + realTip);
    setTip(realTip);
  }

  return (
    <Box mb={4}>
      <Box mb={4}>
        <Typography variant="h3">Calculate your bill and tip</Typography>
      </Box>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {({ errors, touched }) => (
          <Form>
            <Box component="span" mr={5}>
              <MyTextField label="BILL AMOUNT" name="billAmount" errors={errors}/>
            </Box>
            <Box component="span" mr={5}>
              <MyTextField label="TIP PERCENTAGE" name="tipPercentage" errors={errors}/>
            </Box>
            <Button variant="contained" color="primary" type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
      { bill && (
        <Box mt={4}>
          <Typography variant="h4">
            You need to pay ${bill} including tips of ${tip}
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default BillAndTip
