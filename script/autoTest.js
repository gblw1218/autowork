// Shadowrocket 脚本：过滤超时或不可用节点
// 适用于 Shadowrocket 的 [Script] 部分

function main(params) {
    // 获取传入的节点列表
    var proxies = params.proxies || [];
    var timeoutThreshold = 1000; // 延迟阈值，单位毫秒

    // 返回一个 Promise，异步处理节点测试
    return new Promise((resolve, reject) => {
        // 用于存储可用节点
        var availableProxies = [];
        
        // 遍历所有节点
        Promise.all(proxies.map(proxy => {
            // 测试节点延迟
            return testProxyDelay(proxy)
                .then(delay => {
                    // 如果延迟小于阈值，保留该节点
                    if (delay >= 0 && delay <= timeoutThreshold) {
                        availableProxies.push(proxy);
                    }
                })
                .catch(() => {
                    // 如果测试失败（超时或不可用），忽略该节点
                });
        }))
        .then(() => {
            // 返回过滤后的节点列表
            resolve({
                proxies: availableProxies
            });
        })
        .catch(err => {
            reject(err);
        });
    });
}

// 测试单个节点延迟的函数
function testProxyDelay(proxy) {
    return new Promise((resolve, reject) => {
        // 使用 Shadowrocket 内置的 $httpClient 进行延迟测试
        $httpClient.get({
            url: 'https://www.google.com', // 测试目标 URL
            timeout: 5, // 超时时间 5 秒
            proxy: proxy // 使用当前节点进行测试
        }, (error, response) => {
            if (error) {
                // 如果请求失败，节点不可用
                reject(error);
            } else {
                // 返回延迟（假设 response 包含 delay 字段，单位毫秒）
                resolve(response.delay || 0);
            }
        });
    });
}

// 脚本入口
main($script.params);