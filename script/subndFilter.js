function filterNodes(nodes) {
    // 用于存储已见过的 IP:Port 组合
    const seen = new Set();
    // 过滤后的节点列表
    const filteredNodes = [];

    // 遍历节点列表
    for (const node of nodes) {
        // 提取 IP 和端口
        const ipPort = `${node.host}:${node.port}`;
        
        // 如果 IP:Port 组合未见过，添加到结果并记录
        if (!seen.has(ipPort)) {
            seen.add(ipPort);
            filteredNodes.push(node);
        }
    }

    return filteredNodes;
}

// Shadowrocket 脚本入口
function main(nodes) {
    return filterNodes(nodes);
}