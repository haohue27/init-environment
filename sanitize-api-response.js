// Làm sạch dữ liệu trả về từ API
function sanitize(response) {
  delete response.internal;
  return response;
}
