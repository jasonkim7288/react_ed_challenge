import { Box, Divider, Grid, Typography, TextField, Button } from '@material-ui/core';
import React, { Component, createRef, useCallback } from 'react';
import GridBox from './GridBox';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
  // console.log('values:', values);
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
  const {name, errors} = props;
  console.log('props:', props);
  return (
    <TextField {...props} error={errors[name] ? true : false} helperText={errors[name]?.message} />
  )
}

function BusinessCardForm({ handleSubmitCb }) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema)
  });

  console.log('form rendered');
  return (
    <Box>
      <Typography variant="h3">PERSONAL DETAILS</Typography>
      <Divider />
      <br />
      <form onSubmit={handleSubmit(onSubmitWrapped(handleSubmitCb))}>
        <Grid container spacing={3}>
          <GridBox>
            <MyTextField inputRef={register} label="GIVEN NAME" name="givenName" id="givenName" errors={errors}/>
          </GridBox>
          <GridBox>
            <MyTextField inputRef={register} label="SUR NAME" name="surName" id="surName" errors={errors}/>
          </GridBox>
          <GridBox>
            <MyTextField inputRef={register} label="EMAIL" name="email" id="email" errors={errors}/>
          </GridBox>
          <GridBox>
            <MyTextField inputRef={register} label="PHONE" name="phone" id="phone" errors={errors}/>
          </GridBox>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <GridBox>
            <MyTextField inputRef={register} label="HOUSE NAME OR #" name="houseNameOrNum" id="houseNameOrNum" errors={errors} />
          </GridBox>
          <GridBox>
            <MyTextField inputRef={register} label="STREET" name="street" id="street" errors={errors}/>
          </GridBox>
          <GridBox>
            <MyTextField inputRef={register} label="SUBURB" name="suburb" id="suburb" errors={errors}/>
          </GridBox>
          <GridBox>
            <MyTextField inputRef={register} label="STATE" name="state" id="state" errors={errors}/>
          </GridBox>
          <GridBox>
            <MyTextField inputRef={register} label="POSTCODE" name="postcode" id="postcode" errors={errors}/>
          </GridBox>
          <GridBox>
            <MyTextField inputRef={register} label="COUNTRY" name="country" id="country" errors={errors}/>
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