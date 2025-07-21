async function main(config) {
    let nodes = config['server'] || [];
    let availableNodes = [];

    // 并发测试节点
    async function testNode(node) {
        try {
            let response = await $http.get({
                url: 'http://www.gstatic.com/generate_204',
                proxy: node, // 使用当前节点作为代理
                timeout: 5000 // 5秒超时
            });
            return response.status === 204 && response.latency < 5000;
        } catch (e) {
            return false; // 连接失败
        }
    }

    // 过滤可用节点
    for (let node of nodes) {
        if (await testNode(node)) {
            availableNodes.push(node);
        }
    }

    // 更新节点列表
    config['server'] = availableNodes;
    return config;
}

main($config);