import { Box, Divider, Grid, Typography, TextField, Button } from '@material-ui/core';
import React from 'react';
import GridBox from '../GridBox';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { updateBusinessCardForm } from '../../actions/actions';
import { useDispatch } from 'react-redux';

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
});

function MyTextField(props) {
  // console.log('props:', props);
  const {errors, name} = props;
  return (
    <GridBox>
      <Field {...props} error={errors[name] ? true : false} helperText={errors[name]} as={TextField} fullWidth={true}/>
    </GridBox>
  )
}

const mandatoryField = [
  { label: "GIVEN NAME", name: "givenName" },
  { label: "SURNAME", name: "surName" },
  { label: "EMAIL", name: "email" },
  { label: "PHONE", name: "phone" }
];

const optionalField = [
  { label: "HOUSE NAME OR #", name: "houseNameOrNum" },
  { label: "STREET", name: "street" },
  { label: "SUBURB", name: "suburb" },
  { label: "STATE", name: "state" },
  { label: "POSTCODE", name: "postcode" },
  { label: "COUNTRY", name: "country" },
]

function BusinessCardForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(updateBusinessCardForm(values));
  }

  console.log('formik rendered');
  return (
    <Box mb={4}>
      <Typography variant="h3">PERSONAL DETAILS</Typography>
      <Divider />
      <br />
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={3}>
              { mandatoryField.map(field =>
                <MyTextField label={field.label} name={field.name} errors={errors}/>
              )}
              <Grid item xs={12}>
                <Divider />
              </Grid>
              { optionalField.map(field =>
                <MyTextField label={field.label} name={field.name} errors={errors}/>
              )}
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