const hankoApiUrl = process.env.HANKO_API_URL || '';

async function validateToken(req, res, next) {
    let token = null;
    if ( req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer"){
        token = req.headers.authorization.split('')[1];
    }
    else if(req.cookies && req.cookies.hanko){
        token = req.cookies.hanko;
    }

    if(token === null || token.lenth === 0){
        res.status(401).send('Unauthorized');
        console.log('could not find a token to validate');
        return;
    }

    let authError = false; 

    const validationOptions = { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"session_token":"${token}"}`
    }

    const validationResponse = await fetch(hankoApiUrl + '/sessions/validate', validationOptions); 

    if(!validationResponse.ok){
        authError = true;
    }
    else{
        const validationData = await validationResponse.json();
        if(!validationData.is_valid){
            authError = true;
        }
    }

    if(authError){
        res.status(401).send('Unauthorized');
        console.log('your token was not valid');
        return;
    }

    console.log('validated');

    next();
}

module.exports = validateToken;