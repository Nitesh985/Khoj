import { ApiError } from "./ApiError.js"

const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next))
    .catch(error=>{
        res.status(error.statusCode || 500).send({
          message: error?.message || "Something went wrong, try again later",
          status: error?.statusCode || 500
        });
    })
}

export { asyncHandler }