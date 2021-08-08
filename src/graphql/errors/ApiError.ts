class AppError extends Error {
  statusCode
  status
  timestamp
  constructor(message, statusCode, status, timestamp) {
    super(message);
    this.statusCode = statusCode;
    this.status= status;
    this.timestamp= timestamp;
  }
}
export default AppError; 