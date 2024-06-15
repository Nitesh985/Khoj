class ApiResponse{
    constructor(statusCode, message="Success", data=null){
        this.statusCode = statusCode;
        this.message = message;
        this.success = this.statusCode < 400;
        this.data = data
    }
}

export { ApiResponse }