import { Box, Divider, Grid, Typography, TextField, Button } from '@material-ui/core';
import React from 'react';
import GridBox from './GridBox';
import { Formik, Form, Field } from 'formik';
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
    .min(2)
    .max(50)
    .required(),
  surName: Yup.string()
    .min(2)
    .max(50)
    .required(),
  email: Yup.string()
    .email()
    .required(),
  phone: Yup.number()
    .required()
})

function MyTextField(props) {
  console.log('props:', props);
  const {errors, name} = props;
  return (
    <Field {...props} error={errors[name] ? true : false} helperText={errors[name]} as={TextField}/>
  )
}

function BusinessCardForm({ handleSubmitCb }) {
  console.log('formik rendered');
  return (
    <Box>
      <Typography variant="h3">PERSONAL DETAILS</Typography>
      <Divider />
      <br />
      <Formik initialValues={initialValues} onSubmit={onSubmitWrapped(handleSubmitCb)} validationSchema={validationSchema}>
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={3}>
              <GridBox>
                <MyTextField label="GIVEN NAME" name="givenName" errors={errors}/>
              </GridBox>
              <GridBox>
                <MyTextField label="SURNAME" name="surName" errors={errors}/>
              </GridBox>
              <GridBox>
                <MyTextField label="EMAIL" name="email" errors={errors}/>
              </GridBox>
              <GridBox>
                <MyTextField label="PHONE" name="phone" errors={errors}/>
              </GridBox>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <GridBox>
                <MyTextField label="HOUSE NAME OR #" name="houseNameOrNum" errors={errors}/>
              </GridBox>
              <GridBox>
                <MyTextField label="STREET" name="street" errors={errors}/>
              </GridBox>
              <GridBox>
                <MyTextField label="SUBURB" name="suburb" errors={errors}/>
              </GridBox>
              <GridBox>
                <MyTextField label="STATE" name="state" errors={errors}/>
              </GridBox>
              <GridBox>
                <MyTextField label="POSTCODE" name="postcode" errors={errors}/>
              </GridBox>
              <GridBox>
                <MyTextField label="COUNTRY" name="country" errors={errors}/>
              </GridBox>
              <GridBox>
                <Button variant="contained" color="primary" type="submit">Submit</Button>
              </GridBox>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  )
}


export default BusinessCardForm;