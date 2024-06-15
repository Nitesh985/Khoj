const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next))
    .catch(error=>{
        res
        .status(error.statusCode || 500)
        .json(
            new ApiError(error?.statusCode || 500, error?.message || "Something went wrong, please try again later")
        )
    })
}

export { asyncHandler }