// Shadowrocket 脚本：过滤超时或不可用节点
// 适用于 Shadowrocket 的 [Script] 部分
// 类型：Filter 或 Rewrite


function main(proxy) {
    // 定义延迟阈值，单位毫秒 (例如，1000ms = 1秒)
    var timeoutThreshold = 1000; 

    // 使用 Promise 异步测试节点延迟
    return new Promise(resolve => {
        // 确保 proxy 对象存在且有 test 方法 (或 delay 方法)
        if (!proxy || typeof proxy.test !== 'function') {
            // 如果 proxy 不符合预期，直接丢弃
            console.log('无效的代理对象或不支持测试方法:', proxy); // 可以在控制台输出调试信息
            resolve(false); 
            return;
        }

        // 调用 Shadowrocket 代理对象的内置 test 方法来获取延迟
        // test() 方法通常返回 Promise，解析后得到延迟值 (毫秒)
        proxy.test()
            .then(delay => {
                // 如果延迟有效且在阈值内，则保留该节点
                if (delay >= 0 && delay <= timeoutThreshold) {
                    resolve(true); // 保留节点
                } else {
                    // 延迟过高或无效，丢弃节点
                    console.log(`节点 ${proxy.name} 延迟 ${delay}ms，超过阈值 ${timeoutThreshold}ms，丢弃。`);
                    resolve(false); // 丢弃节点
                }
            })
            .catch(error => {
                // 测试失败（例如超时或节点不可达），丢弃该节点
                console.log(`节点 ${proxy.name} 测试失败: ${error}，丢弃。`);
                resolve(false); // 丢弃节点
            });
    });
}