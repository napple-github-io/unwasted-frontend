import { request } from './request';

export const sendEmail = email => {
  return request('/listings/email', 'POST', email);
};
