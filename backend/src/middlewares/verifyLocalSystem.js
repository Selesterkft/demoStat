export function verifyLocalSystem(req, res, next) {
  try {
    console.log('+++ req.ip', req.ip)
    if (process.env.LOCAL_SYSTEM_IP && process.env.LOCAL_SYSTEM_IP !== '*') {
      if (process.env.LOCAL_SYSTEM_IP !== req.ip)
        throw new Error('Forbidden', 403);
    }
    next();
  } catch (e) {
    const error = new Error('bábucibá')
    error.status = 403;
    throw(error);
  }
}
