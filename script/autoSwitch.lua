```lua
local http = require("http")
local json = require("json")

-- 配置参数
local test_url = "http://www.gstatic.com/generate_204"
local proxy_group = "AutoSwitch" -- 代理组名称
local latency_threshold = 2000   -- 最大可接受延迟（毫秒）
local test_interval = 300        -- 测试间隔（秒，例如 300 秒 = 5 分钟）
local timeout = 5               -- HTTP 请求超时时间（秒）

-- 测试单个节点的函数
function testNode(node)
    local start_time = os.clock()
    local response, err = http.get(test_url, {
        proxy = node,
        timeout = timeout
    })
    local end_time = os.clock()
    
    if response and response.status == 204 then
        local latency = (end_time - start_time) * 1000 -- 转换为毫秒
        if latency <= latency_threshold then
            return true, latency
        else
            return false, latency
        end
    else
        return false, nil
    end
end

-- 获取代理组中所有节点的函数
function getNodes()
    local config = shadowrocket.getConfig()
    local nodes = {}
    for _, group in ipairs(config.proxy_groups) do
        if group.name == proxy_group then
            for _, node in ipairs(group.proxies) do
                table.insert(nodes, node)
            end
            break
        end
    end
    return nodes
end

-- 更新代理组，只保留可用节点的函数
function updateProxyGroup(valid_nodes)
    local config = shadowrocket.getConfig()
    for _, group in ipairs(config.proxy_groups) do
        if group.name == proxy_group then
            group.proxies = valid_nodes
            break
        end
    end
    shadowrocket.setConfig(config)
end

-- 主函数：测试所有节点并更新代理组
function main()
    local nodes = getNodes()
    local valid_nodes = {}
    
    for _, node in ipairs(nodes) do
        local is_valid, latency = testNode(node)
        if is_valid then
            table.insert(valid_nodes, node)
            print("节点 " .. node .. " 可用，延迟 " .. latency .. " 毫秒")
        else
            print("节点 " .. node .. " 不可用或延迟过高")
        end
    end
    
    if #valid_nodes > 0 then
        updateProxyGroup(valid_nodes)
        print("已更新代理组，包含 " .. #valid_nodes .. " 个可用节点")
    else
        print("未找到可用节点")
    end
end

-- 定时调度脚本
shadowrocket.schedule(main, test_interval)