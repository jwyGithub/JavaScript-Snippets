const axiosSnippets = [
    {
        key: 'axios.create()',
        prefix: 'axios.create',
        body: `const axiosInstance = axios.create({
            // 'baseURL' 将自动加在 'url' 前面，除非 'url' 是一个绝对 URL。
            // 它可以通过设置一个 'baseURL' 便于为 axios 实例的方法传递相对 URL
            baseURL: '',
            method: 'GET',
            // 'transformRequest' 允许在向服务器发送前，修改请求数据
            transformRequest: [
                function (data, headers) {
                    // 对发送的 data 进行任意转换处理
                    return data;
                }
            ],
            // 'transformResponse' 在传递给 then/catch 前，允许修改响应数据
            transformResponse: [
                function (data) {
                    // 对接收的 data 进行任意转换处理
                    return data;
                }
            ],
            // 自定义请求头
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            // 'params' 是与请求一起发送的 URL 参数
            // 必须是一个简单对象或 URLSearchParams 对象
            params: {
                ID: 12345
            },
            // 'paramsSerializer'是可选方法，主要用于序列化'params'
            // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
            paramsSerializer: function (params) {
                return Qs.stringify(params, { arrayFormat: 'brackets' });
            },
            // / 'data' 是作为请求体被发送的数据
            data: {
                firstName: 'Fred'
            },
            // 'timeout' 指定请求超时的毫秒数。
            // 如果请求时间超过 'timeout' 的值，则请求会被中断
            timeout: 1000, // 默认值是 '0' (永不超时)
            // 'withCredentials' 表示跨域请求时是否需要使用凭证
            withCredentials: false // default
        });`,
        specification: '',
        description: '创建一个新的 axios 实例'
    },
    {
        key: 'axios.get()',
        prefix: 'axios.get',
        body: `axios
        .get('/', {
            params: {},
            data: {},
            headers: {},
            responseType: 'json'
        })
        .then(res => {})
        .catch(err => {})
        .finally(() => {});`,
        specification: '',
        description: 'GET 请求'
    },
    {
        key: 'axios.post()',
        prefix: 'axios.post',
        body: `axios
        .post('/', {
            params: {},
            data: {},
            headers: {},
            responseType: 'json'
        })
        .then(res => {})
        .catch(err => {})
        .finally(() => {});`,
        specification: '',
        description: '取消请求'
    },
    {
        key: 'controller.abort()',
        prefix: 'controller.abort',
        body: `const controller = new AbortController();
        axios.get('/', {
            signal: controller.signal
        });
        controller.abort();`,
        specification: '',
        description: '取消请求'
    }
];

module.exports = {
    type: 'axios',
    snippets: axiosSnippets,
    columns: ['Snippet prefix', 'Code', 'Description']
};

