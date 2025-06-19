export const environment = process.env.NODE_ENV;
export const timezone = process.env.TZ;

export const isDev = environment === 'development';

export const logging = {
    file: process.end.FILE_LOG_ENABLED === 'true',
};

export const operation = {
    wakeUpTimeMs : parseInt(process.env.WAKE_UP_TIME_MILLIS  || '0'),
    workTimeMs : parseInt(process.env.WORK_TIME_MILLIS  || '0'),
    workWaitMs : parseInt(process.env.WAKE_WAIT_MILLIS  || '0'),
};

