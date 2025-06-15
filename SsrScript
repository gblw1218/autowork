// 清除不可用节点
const nodes = $configuration.getNodes();
nodes.forEach(node => {
    $httpClient.get(`ping://${node.host}`, function(error, response) {
        if (error || response.status !== 200) {
            $configuration.removeNode(node.name);
            $notify("Removed Node", node.name, "Node is unavailable");
        }
    });
});