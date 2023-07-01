import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

export async function hashPassword(password: string){
    const scrypt = promisify(_scrypt);
    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    const hashedPassword = salt + '.' + hash.toString('hex');
    return hashedPassword
}
