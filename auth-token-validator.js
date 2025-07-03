// Hàm xác thực token đăng nhập
function isValidToken(token) {
  return typeof token === "string" && token.length > 20;
}
