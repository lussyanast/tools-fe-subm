import axios from 'axios';
import ApiEndpoint from './api-endpoint';

class Auth {
  static async login({ email, password }) {
    try {
      const response = await axios.post(ApiEndpoint.LOGIN, { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async register({ name, email, password }) {
    try {
      const response = await axios.post(ApiEndpoint.REGISTER, { name, email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default Auth;
