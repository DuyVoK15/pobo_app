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
  getAllPhotographer() {
    const params = {
      hl: "en",
      select: '["$all"]',
      where: "{}",
      limit: "unlimited",
      page: 1,
      order: "[]",
    };
    return axios.get(`http://${IPv4}:8448/api/v1/photographer`, {
      params,
    });
  }
  getAllPhotographerByName(name) {
    const params = {
      hl: "en",
      select: '["$all"]',
      where: `{"name":{"contains":"${name}"}}`,
      limit: "unlimited",
      page: 1,
      order: "[]",
    };
    return axios.get(`http://${IPv4}:8448/api/v1/photographer`, {
      params,
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
    };
    return axios.get(`http://${IPv4}:8448/api/v1/package-shooting`, { params });
  }
  getAllListPackageShootingByPhotographerId(photographerId) {
    const params = {
      hl: "en",
      select: '["$all"]',
      where: `{"photographerId": "${photographerId}"}`,
      limit: "unlimited",
      page: 1,
      order: "[]",
    };
    return axios.get(`http://${IPv4}:8448/api/v1/package-shooting`, { params });
  }
  getPackageShootingById(id) {
    const params = {
      hl: "en",
      select:
        '["$all", {"packageShootingCategory":["$all",{"category":["$all"]}]}]',
      where: "{}",
      limit: "unlimited",
      page: 1,
      order: "[]",
    };
    return axios.get(`http://${IPv4}:8448/api/v1/package-shooting/${id}`, {
      params,
    });
  }
  buyCoinRequest(amount, platform, accessToken) {
    return axios.post(
      `http://${IPv4}:8448/api/v1/deposit/user`,
      {
        amount,
        platform,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  }
  updateBookingStatus(id, bookingStatus, accessToken) {
    return axios.patch(
      `http://${IPv4}:8448/api/v1/booking/${id}`,
      { bookingStatus },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  }
  getUserVoucher(accessToken) {
    const params = {
      hl: "en",
      select: '["$all", {"voucher": ["$all"]}]',
      where: "{}",
      limit: "unlimited",
      page: 1,
      order: "[]",
    };
    return axios.get(`http://${IPv4}:8448/api/v1/user-voucher`, {
      params,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
  getAllListPackageShootingByTitle(title) {
    const params = {
      hl: "en",
      select: '["$all"]',
      where: `{"title":{"contains": "${title}"}}`,
      limit: "unlimited",
      page: 1,
      order: "[]",
    };
    return axios.get(`http://${IPv4}:8448/api/v1/package-shooting`, { params });
  }
}
export default new ApiService();
