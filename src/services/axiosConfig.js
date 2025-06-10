import axios from "axios";


const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
});

api.interceptors.request.use(
(config) => {
    const token = localStorage.getItem("accessToken");
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}   
);

api.interceptors.response.use(
    (response) => {
        // Bất kỳ mã trạng thái nào nằm trong phạm vi 2xx đều khiến hàm này được kích hoạt
        return response;
    },
    async (error) => {
        // Bất kỳ mã trạng thái nào nằm ngoài phạm vi 2xx đều khiến hàm này được kích hoạt
        const originalRequest = error.config;
        if(error.response && error.response.status === 401 && !originalRequest._retry){
            originalRequest._retry = true; //Đánh dấu đã thử lại 1 lần để tránh lặp vô hạn
            try {
                // Thực hiện logic refresh token ở đây
                // const newAccessToken = await refreshTokenFunction();
                // localStorage.setItem('accessToken', newAccessToken); // Lưu token mới
                // originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                // return instance(originalRequest); // Thử lại yêu cầu ban đầu với token mới
                console.error('Unauthorized, try to refresh token or redirect to login.');
                // Chuyển hướng người dùng về trang đăng nhập hoặc thông báo lỗi
                // Ví dụ: window.location.href = '/login';
            } catch (error) {
                console.error('Failed to refresh token or redirect to login.', error);
            }
            // Chuyển hướng người dùng về trang đăng nhập
            // window.location.href = '/login';
            return Promise.reject(error);
        }
        return Promise.reject(error);
    }
);
export default api;