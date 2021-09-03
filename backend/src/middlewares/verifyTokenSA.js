export function verifyTokenSA(req, res, next) {
  if (req.verified.userLevel !== "OWNER_SA") {
    const error = new Error("invalid token");
    error.status = 403;
    throw error;
  }
  next();
}
