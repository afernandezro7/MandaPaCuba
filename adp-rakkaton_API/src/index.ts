import { App } from './app';
import dotenv from 'dotenv';
import { enviromentValidator } from './helpers/validate-env';
dotenv.config()

async function main() {
    const app = new App(process.env.PORT)

    const missingEnv = enviromentValidator() // return array of missing enviroment key
    if (missingEnv.missingKeys.length > 0 ) {
        throw new Error(missingEnv.msg);   
    }

    await app.listen()
}

main();