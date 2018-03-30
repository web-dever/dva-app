const API = '/api/v1';

module.exports = {
    API,
    apiPrefix: API,
    api: {
        login: `${ API }/login`,
        userinfo: `${ API }/userinfo`
    }
};