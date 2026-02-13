// writing a helper function that will help secure our access code. 

function setSecureCookie(res, token){
    res.cookie('access_token', token, {
        httpOnly: true,
        maxAge: 60 * 1000,
    })
    return res; 
}

module.exports = { setSecureCookie }; 