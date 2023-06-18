import httpClient from './httpClient'

const getTicketStatus = () => httpClient.get('/tickets/status')
const getTicketList = params => httpClient.get('/tickets'+params)
const updateTicket = params => httpClient.patch('/tickets', params)
const createTicket = params => httpClient.post('/tickets', params)

export default {
  getTicketStatus,
  getTicketList,
  updateTicket,
  createTicket
};
