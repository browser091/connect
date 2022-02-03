import axios from "axios";

const axiosSetting = axios.create({
   // withCredentials: true,
   baseURL: "https://social-network.samuraijs.com/api/1.0/",
   headers: {
      "API-KEY": "ba77029e-63c1-4214-a13e-ef17a4a80f99",
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
};
