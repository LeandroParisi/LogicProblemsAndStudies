import moment from 'moment'

export const extractDateHour = (date) => moment(date).format('h:mm')

export const formatDate = (date) => moment(date).format('DD/MM/YYYY')
