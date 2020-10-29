import { Box, Divider, Grid, Typography, TextField, Button } from '@material-ui/core';
import React, { Component, createRef } from 'react';
import GridBox from './GridBox';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  givenName: '',
  surName: '',
  email: '',
  phone: '',
  houseNameOrNum: '',
  street: '',
  suburb: '',
  state: '',
  postcode: '',
  country: ''
};

const onSubmitWrapped = handleSubmitCb => values => {
  handleSubmitCb({...values});
};

const validationSchema = Yup.object().shape({
  givenName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  surName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  phone: Yup.string()
    .required('Required')
})

function MyTextField({formik, label, name}) {
  return (
    <TextField label={label} name={name} {...formik.getFieldProps(name)} error={formik.errors[name]} helperText={formik.errors[name]} />
  )
}

function BusinessCardForm({ handleSubmitCb }) {
  const formik = useFormik({
    initialValues,
    onSubmit: onSubmitWrapped(handleSubmitCb),
    validationSchema
  })
  return (
    <Box>
      <Typography variant="h3">PERSONAL DETAILS</Typography>
      <Divider />
      <br />
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <GridBox>
            <MyTextField formik={formik} label="GIVEN NAME" name="givenName"/>
          </GridBox>
          <GridBox>
            <MyTextField formik={formik} label="SUR NAME" name="surName"/>
          </GridBox>
          <GridBox>
            <MyTextField formik={formik} label="EMAIL" name="email"/>
          </GridBox>
          <GridBox>
            <MyTextField formik={formik} label="PHONE" name="phone"/>
          </GridBox>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <GridBox>
            <MyTextField formik={formik} label="HOUSE NAME OR #" name="houseNameOrNum" />
          </GridBox>
          <GridBox>
            <MyTextField formik={formik} label="STREET" name="street"/>
          </GridBox>
          <GridBox>
            <MyTextField formik={formik} label="SUBURB" name="suburb"/>
          </GridBox>
          <GridBox>
            <MyTextField formik={formik} label="STATE" name="state"/>
          </GridBox>
          <GridBox>
            <MyTextField formik={formik} label="POSTCODE" name="postcode"/>
          </GridBox>
          <GridBox>
            <MyTextField formik={formik} label="COUNTRY" name="country"/>
          </GridBox>
          <GridBox>
            <Button variant="contained" color="primary" type="submit">Submit</Button>
          </GridBox>
        </Grid>
      </form>
    </Box>
  )
}

export default BusinessCardForm;