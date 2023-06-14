import axios from "axios";
import { IPv4 } from "../utils/config";
class ApiService {
  sendOtp(username) {
    return axios.post(`http://${IPv4}:8448/api/v1/auth/forgot_password`, {
      username,
    });
  }
  verifyOtp(username, otp, newPassword) {
    return axios.post(`http://${IPv4}:8448/api/v1/auth/otp_reset_password`, {
      username,
      otp,
      newPassword,
    });
  }
  getAllListPackageShooting() {
    const params = {
      hl: "en",
      select: '["$all"]',
      where: "{}",
      limit: "unlimited",
      page: 1,
      order: "[]",
    }
    return axios.get(`http://${IPv4}:8448/api/v1/package-shooting`, {params})
  }
}
export default new ApiService();