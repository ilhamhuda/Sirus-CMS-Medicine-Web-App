import axios from 'axios'

export const HTTP = axios.create({
  baseURL: `http://sirus.libertaapparel.com/`,
  headers: {
    'Content-Type': 'application/json'
  },
  auth: {
    username: 'admin',
    password: '1234'
  }
})
