interface MissingEnv {
    msg:            string;
    missingKeys:    string[]
}

const enviromentValidator = ():MissingEnv => {
    let missingEnv:string[]=[]

    if (!process.env.RAKK_URL) {       
        missingEnv.push('RAKK_URL')
    }
    if (!process.env.RAKK_AUTH_URL) {       
        missingEnv.push('RAKK_AUTH_URL')
    }
    if (!process.env.RAKK_AUTH_CLIENTID) {       
        missingEnv.push('RAKK_AUTH_CLIENTID')
    }
    if (!process.env.RAKK_AUTH_POOLID) {       
        missingEnv.push('RAKK_AUTH_POOLID')
    }
    if (!process.env.RAKK_USER) {       
        missingEnv.push('RAKK_USER')
    }
    if (!process.env.RAKK_PASS) {       
        missingEnv.push('RAKK_PASS')
    }

    const msg = missingEnv.length > 0 ? `${missingEnv.join(', ')} must be defined` : ""

    return {
        msg,
        missingKeys: missingEnv
    }
}

export {enviromentValidator}
