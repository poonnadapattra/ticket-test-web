import httpClient from './httpClient'

const getContacts = () => httpClient.get('/contacts')

export default {
  getContacts,
};
