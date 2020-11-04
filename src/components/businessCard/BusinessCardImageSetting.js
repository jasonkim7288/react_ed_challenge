import React, { useEffect, useState } from 'react'
// import AWS from 'aws-sdk';
import { Box, Paper } from '@material-ui/core';
import '../../styles/businessCard/businessCardImageSetting.css';

function BusinessCardImageSetting({ settings, updateSettingCb }) {
  const [imgURLs, setImgURLs] = useState([]);

  useEffect(() => {
    // S3 bucket didn't work when converting into PNG
    //
    // const s3 = new AWS.S3({
    //   accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    //   secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
    // });
    // const params = {
    //   Bucket: process.env.REACT_APP_AWS_BUSINESS_CARD_BUCKET_NAME,
    //   Delimiter: '',
    //   Prefix: ''
    // };

    // s3.listObjectsV2(params, (err, data) => {
    //   if (err) {
    //     console.log('err:', err.message);
    //   } else {
    //     console.log('data.CommonPrefixes:', data.CommonPrefixes)
    //     console.log('data.Contents:', data.Contents);
    //     const requests = data.Contents.map(content =>
    //       s3.getSignedUrlPromise ('getObject', {
    //           Bucket: process.env.REACT_APP_AWS_BUSINESS_CARD_BUCKET_NAME,
    //           Key: content.Key,
    //       })
    //     );
    //     Promise.all(requests).then(resURLS => setImgURLs([...resURLS]));
    //   }
    // });
    const imgList = [
      'canStar.png',
      'clipChamp.png',
      'coderAcademy.png',
      'coreLogic.png',
      'jumboInteractive.png'
    ]
    setImgURLs(imgList.map(img => `${process.env.PUBLIC_URL}/${img}`))
  }, [])

  const handleClick = (e) => {
    // console.log('e.target.src:', e.target.querySelector('img'));
    const { name, src } = e.target.querySelector('img');
    updateSettingCb(name, src);
  }

  return (
    <div>
      { imgURLs &&
        (
          <Box display="flex" alignItems="center" p={1} m={1}>
            {imgURLs.map((imgURL, index) => (
              <Box m={3} key={index} onClick={handleClick} >
                <Paper elevation={3} className="paper-logo">
                  <Box p={3} style={{backgroundColor:'#e0e0e0'}}>
                    <img src={imgURL} alt="logo"width="100" key={imgURL} name="imgURL"/>
                  </Box>
                </Paper>
              </Box>
            ))}
          </Box>
        )
      }
    </div>
  )
}

export default BusinessCardImageSetting
