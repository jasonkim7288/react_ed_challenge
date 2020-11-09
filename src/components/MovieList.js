import React, { Component, createRef } from 'react';
import { Button, Box, TextField, Typography, Chip} from '@material-ui/core';
import AWS from 'aws-sdk';

// AWS.config.update({region: 'ap-southeast-2'});

export default class MovieList extends Component {
  constructor(props) {
    super(props);

    this.movieInput = createRef();

    this.state = {
      movieList: []
    }

    this.s3 = new AWS.S3({
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
    });

    this.params = {
      Bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
      Key: process.env.REACT_APP_AWS_FILE_NAME_MOVIE_LIST
    };

    console.log('this.params:', this.params)

    this.s3.getObject(this.params, (err, data) => {
      if (err) {
        console.log('err:', err);
        this.uploadString(JSON.stringify([]), process.env.REACT_APP_AWS_FILE_NAME_MOVIE_LIST);
      } else {
        console.log('succeed',JSON.parse(data.Body.toString('ascii')));
        this.setState({movieList: JSON.parse(data.Body.toString('ascii'))});
      }
    });
  }

  uploadString(str, fileName) {
    const params = {
      Bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
      Key: fileName,
      Body: str
    };

    this.s3.upload(params, (err, data) => {
      if (err) {
        console.log('err:', err);
      } else {
        console.log(`File uploaded successfully. ${data.Location}`);
      }
    });
  }

  handleClick() {
    if (this.movieInput.value) {
      this.setState({ movieList: [...this.state.movieList, this.movieInput.value]});
      this.movieInput.value = "";
    }
  }

  componentDidUpdate(prevProps, prevStates) {
    if (prevStates.movieList.length !== this.state.movieList.length) {
      this.uploadString(JSON.stringify(this.state.movieList), process.env.REACT_APP_AWS_FILE_NAME);
    }
  }

  handleDelete(movie) {
    this.setState({ movieList: this.state.movieList.filter(m => m !== movie)});
  }

  render() {

    return (
      <Box mt={5}>
        <Box mb={5}>
          <TextField inputRef={ ref => {this.movieInput = ref;} } label="Input movie title" type="string" InputLabelProps={{shrink: true}} />
          <Box component="span" ml={5}>
            <Button variant="contained" color="primary" onClick={() => this.handleClick()}>Create</Button>
          </Box>
        </Box>
        <Box mb={2}>
          <Typography variant="h2" component="h2">
            Movie List
          </Typography>
        </Box>
        { this.state.movieList.map((movie, index) => (
            <Box m={2}>
              <Chip
                  variant="outlined"
                  color="primary"
                  onDelete={(e) => this.handleDelete(movie)}
                  label={movie}
                  inputProps={{
                    index: index
                  }}
              />
            </Box>
          )
        )}
      </Box>
    );
  }
}
