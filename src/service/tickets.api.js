import httpClient from './httpClient'

const getTicketStatus = () => httpClient.get('/ticket/status')
const getTicketList = params => httpClient.get('/ticket'+params)
const updateTicket = params => httpClient.patch('/ticket', params)
const createTicket = params => httpClient.post('/ticket', params)

export default {
  getTicketStatus,
  getTicketList,
  updateTicket,
  createTicket
};
