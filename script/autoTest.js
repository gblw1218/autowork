async function main(config) {
    // 检查配置和节点列表
    if (!config || !config.server) {
        console.log('错误：无效配置或无节点列表');
		console.log(config);
        return config; // 返回原始配置以防出错
    }

    let nodes = config.server;
    let availableNodes = [];

    // 测试节点可用性
    async function testNode(node) {
        try {
            let response = await $http.get({
                url: 'http://www.gstatic.com/generate_204',
                proxy: node, // 使用当前节点作为代理
                timeout: 5000 // 5秒超时
            });
            // 检查 HTTP 204 状态和延迟
            if (response.status === 204 && response.latency < 5000) {
                console.log(`节点 ${node.name || node.host} 可用，延迟: ${response.latency}ms`);
                return true;
            } else {
                console.log(`节点 ${node.name || node.host} 不可用：状态=${response.status}, 延迟=${response.latency}ms`);
                return false;
            }
        } catch (e) {
            console.log(`节点 ${node.name || node.host} 失败：${e.message}`);
            return false; // 连接失败
        }
    }

    // 分批并发测试节点
    const batchSize = 20; // 每批测试20个节点，可调整
    for (let i = 0; i < nodes.length; i += batchSize) {
        const batch = nodes.slice(i, i + batchSize);
        const results = await Promise.all(batch.map(node => testNode(node)));
        results.forEach((isAvailable, index) => {
            if (isAvailable) {
                availableNodes.push(batch[index]);
            }
        });
    }

    // 更新节点列表
    config.server = availableNodes;
    console.log(`过滤后剩余 ${availableNodes.length} 个可用节点，共 ${nodes.length} 个`);
    return config;
}

// 脚本入口
main($script.config);