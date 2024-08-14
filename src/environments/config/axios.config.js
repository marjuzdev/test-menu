const apiIdentifiers = {
  elasticemail: 'ELASTICEMAIL',
};

const apiCredentials = {
  [apiIdentifiers.elasticemail]: {
    baseURL: 'https://api.elasticemail.com',
    headers: {
      'Content-Type': 'application/json',
      'X-ElasticEmail-ApiKey': '7A1B9A60E017C98D38E4F2FD2541A49D7D222ECE9FA52BB725EC958AA802A3473ACFCDF808B32720908F8C72EF36C99A',
    },
  },
};

 export {
  apiIdentifiers,
  apiCredentials
 }