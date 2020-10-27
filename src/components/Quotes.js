import React, { useState, useEffect } from 'react';
import { Button, Box, CircularProgress } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import axios from 'axios';

function Quotes() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);

  const getQuote = () => {
    setQuote(null);
    setAuthor(null);
    axios.get('https://quote-garden.herokuapp.com/api/v2/quotes/random')
      .then(res => {
        console.log('res:', res)
        setQuote(res.data.quote.quoteText);
        setAuthor(res.data.quote.quoteAuthor);
    });
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(quote);
  }

  useEffect(() => {
    getQuote();
  }, [])

  return (
    <Box mt={8}>
      <Button variant="contained" color="primary" onClick={getQuote} startIcon={<FormatQuoteIcon/>}>
        Get a quote!
      </Button>
      {quote ? (
        <div>
          <p>
            {quote}
          </p>
          <Box textAlign='right'>
            <Button variant="contained" color="secondary" onClick={copyToClipboard} startIcon={<FileCopyIcon />}>
              Copy this!
            </Button>
          </Box>
          <p><strong>by {author}</strong></p>
        </div>
      ) : (
        <Box m={4}>
          <CircularProgress color="primary" />
        </Box>
      )
      }
    </Box>
  )
}

export default Quotes
