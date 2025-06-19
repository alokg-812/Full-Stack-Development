import moment from 'moment';
import { logging } from '../config.js';
import path from 'path';
import fs from 'fs';

const __root = path.resolve();
const logDir = path.join(__root, 'logs');
if(fs.existsSync(logDir)) fs.mkdirSync(logDir);

export default async function filelog(...message){
    try{
        if(!logging.file) return;
        if(message.length === 0) return;
        message.unshift(moment().format());
        message.push('\n');

        const filename = `${moment().format('YYYY-MM-DD')}.log`;
        const file = path.join(logDir, filename);
        fs.appendFileSync(file, message.join(' -- '));
    }
    catch(e){
        console.error(e);
    }
}