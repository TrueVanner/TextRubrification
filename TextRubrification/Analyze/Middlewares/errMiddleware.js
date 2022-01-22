// Middleware that gives info about existing error
// Returns status 500 and gives JSON with text

module.exports = (err, req, res, next) => {
    console.log("Error detected!");
    console.log(err);

    return res.status(500).
        json({message: "Error!"});
}