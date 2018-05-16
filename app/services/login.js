
import api from '../utils/config';

const url = `http://12479-zis-stargate-goda-usercenter.test.za-tech.net/admin/auditCertis`;

export const login = async function (params) {
    return await fetch('/sss/ss', { method: 'POST' });
}

export const g = async function (params) {
    return await fetch(url, { method: 'POST' })
}