const errorHandler = (err, req, res, next) => {
    console.log(err, "{}{}{}{}{}{}{}{}");
    let statusCode = 500
    let message = "Internal Server Error"

    switch (err.name) {
        case "SequelizeValidationError":
        case "SequelizeUniqueConstraintError":
            statusCode = 400
            message = err.errors.map(el => el.message)
            break;
        case "REQUIRED":
            statusCode = 400
            message = "Email or Password is REQUIRED"
            break;
        case "FAILED":
            statusCode = 400
            message = "Failed to post the product"
            break;
        case "ALREADY_PREMIUM":
            statusCode = 400
            message = "You are already a premium member"
            break;
        case "BUY_PREMIUM":
            statusCode = 400
            message = "You have to buy premium"
            break;
        case "INVALID":
            statusCode = 401
            message = "Email or Password is INVALID"
            break;
        case "JsonWebTokenError":
            statusCode = 401
            message = "Invalid Token"
            break;
        case "UNAUTHORIZED":
            statusCode = 401
            message = "Login First"
            break;
        case "FORBIDDEN":
            statusCode = 403
            message = "You don't have permission to access"
            break;
        case "NOT_FOUND":
        case "SequelizeForeignKeyConstraintError":
            statusCode = 404
            message = "Product Not Found"
            break;
        default:
            statusCode = 500
            message = "Internal Server Error"
            break;
    }

    res.status(statusCode).json({message})
}

module.exports = {errorHandler}