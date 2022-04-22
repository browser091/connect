import axios from "axios";

const axiosSetting = axios.create({
   withCredentials: true,
   baseURL: "https://social-network.samuraijs.com/api/1.0/",
   headers: {
      "API-KEY": "48d444c7-40e1-4542-8326-711d60f5416b",
   },
});

export const usersAPI = {
   getUsers(count, currentPage) {
      return axiosSetting
         .get(`users?count=${count}&page=${currentPage}`)
         .then((response) => response.data);
   },
};

export const profileAPI = {
   getProfileID(userID) {
      return axiosSetting
         .get(`profile/${userID}`)
         .then((response) => response.data);
   },
   getProfileStatus(userID) {
      return axiosSetting
         .get(`/profile/status/${userID}`)
         .then((response) => response.data);
   },
   updateProfileStatus(status) {
      return axiosSetting
         .put(`/profile/status`, { status: status })
         .then((response) => response.data);
   },
   submitImg(imgFile) {
      const formData = new FormData();
      formData.append("image", imgFile);
      return axiosSetting.put(`/profile/photo`, formData, {
         headers: {
            "Content-Type": "multipart/form-data",
         },
      });
   },
};

export const userFollower = {
   userFollow(userID) {
      return axiosSetting
         .post(`follow/${userID}`, {})
         .then((response) => response.data);
   },
   userUnfollow(userID) {
      return axiosSetting
         .delete(`follow/${userID}`)
         .then((response) => response.data);
   },
};

export const auth = {
   me() {
      return axiosSetting.get(`/auth/me`).then((response) => response.data);
   },
   login(email, password, rememberMe) {
      return axiosSetting
         .post(`/auth/login`, { email, password, rememberMe })
         .then((response) => response.data);
   },
   logout() {
      return axiosSetting
         .delete(`/auth/login`)
         .then((response) => response.data);
   },
};
