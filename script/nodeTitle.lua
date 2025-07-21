local customCharStart = "王大大-" -- Prefix (remove content in quotes to disable)
local customCharEnd = "" -- Suffix (remove content in quotes to disable)
local outputLanguage = "CN" -- "CN" for Chinese, "EN" for English

local keywordsToNames = {
    ["新加坡|狮城|SG|Singapore"] = outputLanguage == "EN" and "🇸🇬SG" or "🇸🇬新加坡🔥",
    ["台|台湾|台北|高雄|TW|Taiwan|Taipei|Kaohsiung|港|香港|HK|Hong Kong|澳门|澳門|MO|Macao"] = outputLanguage == "EN" and "twHMT" or "🇭🇰港澳台🔥",
    ["日|东京|大阪|名古屋|JP|Tokyo|Japan|Osaka|Nagoya"] = outputLanguage == "EN" and "🇯🇵JP" or "🇯🇵日本🔥",
    ["韩国|首尔|釜山|KR|Korea|Seoul|Busan"] = outputLanguage == "EN" and "🇰🇷KR" or "🇰🇷韩国🔥",
    ["阿联酋|迪拜|阿布扎比|AE|UAE|Dubai|Abu Dhabi"] = outputLanguage == "EN" and "🇦🇪AE" or "🇦🇪阿联酋🔥",
    ["以色列|Israel|IL|Jerusalem|Tel Aviv|Haifa"] = outputLanguage == "EN" and "🇮🇱IL" or "🇮🇱以色列🔥",
    ["澳|悉尼|墨尔本|布里斯班|AU|Australia|Sydney|Melbourne|Brisbane"] = outputLanguage == "EN" and "🇦🇺AU" or "🇦🇺澳大利亚🌐",
    ["美国|美國|US|洛杉矶|洛杉磯|西雅图|纽约|芝加哥|Atlanta|States|American|Los Angeles|Seattle|New York|Chicago"] = outputLanguage == "EN" and "🇺🇸US" or "🇺🇸美国🌐",
    ["加拿大|多伦多|温哥华|蒙特利尔|CA|Canada|Toronto|Vancouver|Montreal"] = outputLanguage == "EN" and "🇨🇦CA" or "🇨🇦加拿大🌐",
    ["法国|巴黎|里昂|马赛|FR|France|Paris|Lyon|Marseille"] = outputLanguage == "EN" and "🇫🇷FRA" or "🇫🇷法国🌐",
    ["智利|圣地亚哥|CL|Chile|Santiago"] = outputLanguage == "EN" and "🇨🇱CL" or "🇨🇱智利🌐",
    ["爱尔兰|都柏林|IE|Ireland|Dublin"] = outputLanguage == "EN" and "🇮🇪IRL" or "🇮🇪爱尔兰🌐",
    ["冰岛|雷克雅未克|IS|Iceland|Reykjavik"] = outputLanguage == "EN" and "🇮🇸IS" or "🇮🇸冰岛🌐",
    ["德国|法兰克福|柏林|慕尼黑|DE|Germany|Frankfurt|Berlin|Munich"] = outputLanguage == "EN" and "🇩🇪DE" or "🇩🇪德国🌐",
    ["英国|伦敦|曼彻斯特|伯明翰|GB|UK|United Kingdom|London|Manchester|Birmingham"] = outputLanguage == "EN" and "🇬🇧GB" or "🇬🇧英国🌐",
    ["意大利|罗马|米兰|那不勒斯|IT|Italy|Rome|Milan|Naples"] = outputLanguage == "EN" and "🇮🇹IT" or "🇮🇹意大利🌐",
    ["荷兰|阿姆斯特丹|鹿特丹|NL|Netherlands|Amsterdam|Rotterdam"] = outputLanguage == "EN" and "🇳🇱NL" or "🇳🇱荷兰🌐",
    ["瑞士|苏黎世|日内瓦|CH|Switzerland|Zurich|Geneva"] = outputLanguage == "EN" and "🇨🇭CH" or "🇨🇭瑞士🌐",
    ["印度|孟买|德里|班加罗尔|IN|India|Mumbai|Delhi|Bangalore"] = outputLanguage == "EN" and "🇮🇳IN" or "🇮🇳印度🌐",
    ["俄罗斯|莫斯科|圣彼得堡|RU|Russia|Moscow|Saint Petersburg"] = outputLanguage == "EN" and "🇷🇺RU" or "🇷🇺俄罗斯🌐",
    ["土耳其|伊斯坦布尔|安卡拉|TR|Turkey|Istanbul|Ankara"] = outputLanguage == "EN" and "🇹🇷TR" or "🇹🇷土耳其",
    ["西班牙|马德里|巴塞罗那|ES|Spain|Madrid|Barcelona"] = outputLanguage == "EN" and "🇪🇸ES" or "🇪🇸西班牙",
    ["瑞典|斯德哥尔摩|哥德堡|SE|Sweden|Stockholm|Gothenburg"] = outputLanguage == "EN" and "🇸🇪SE" or "🇸🇪瑞典",
    ["巴西|圣保罗|里约热内卢|BR|Brazil|São Paulo|Rio de Janeiro"] = outputLanguage == "EN" and "🇧🇷BR" or "🇧🇷巴西",
    ["南非|约翰内斯堡|开普敦|ZA|South Africa|Johannesburg|Cape Town"] = outputLanguage == "EN" and "🇿🇦ZA" or "🇿🇦南非",
    ["墨西哥|墨西哥城|瓜达拉哈拉|MX|Mexico|Mexico City|Guadalajara"] = outputLanguage == "EN" and "🇲🇽MX" or "🇲🇽墨西哥",
    ["阿根廷|布宜诺斯艾利斯|AR|Argentina|Buenos Aires"] = outputLanguage == "EN" and "🇦🇷AR" or "🇦🇷阿根廷",
    ["波兰|华沙|克拉科夫|PL|Poland|Warsaw|Krakow"] = outputLanguage == "EN" and "🇵🇱PL" or "🇵🇱波兰",
    ["泰国|曼谷|清迈|TH|Thailand|Bangkok|Chiang Mai"] = outputLanguage == "EN" and "🇹🇭TH" or "🇹🇭泰国",
    ["马来西亚|吉隆坡|槟城|MY|Malaysia|Kuala Lumpur|Penang"] = outputLanguage == "EN" and "🇲🇾MY" or "🇲🇾马来西亚",
    ["越南|河内|胡志明|VN|Vietnam|Hanoi|Ho Chi Minh"] = outputLanguage == "EN" and "🇻🇳VN" or "🇻🇳越南",
    ["菲律宾|马尼拉|PH|Philippines|Manila"] = outputLanguage == "EN" and "🇵🇭PH" or "🇵🇭菲律宾",
    ["埃及|开罗|EG|Egypt|Cairo"] = outputLanguage == "EN" and "🇪🇬EG" or "🇪🇬埃及",
    ["沙特|利雅得|吉达|SA|Saudi Arabia|Riyadh|Jeddah"] = outputLanguage == "EN" and "🇸🇦SA" or "🇸🇦沙特阿拉伯",
    ["挪威|奥斯陆|NO|Norway|Oslo"] = outputLanguage == "EN" and "🇳🇴NO" or "🇳🇴挪威",
    ["芬兰|赫尔辛基|FI|Finland|Helsinki"] = outputLanguage == "EN" and "🇫🇮FI" or "🇫🇮芬兰",
    ["奥地利|维也纳|AT|Austria|Vienna"] = outputLanguage == "EN" and "🇦🇹AT" or "🇦🇹奥地利",
    ["希腊|雅典|GR|Greece|Athens"] = outputLanguage == "EN" and "🇬🇷GR" or "🇬🇷希腊",
    ["匈牙利|布达佩斯|HU|Hungary|Budapest"] = outputLanguage == "EN" and "🇭🇺HU" or "🇭🇺匈牙利",
    ["捷克|布拉格|CZ|Czech|Prague"] = outputLanguage == "EN" and "🇨🇿CZ" or "🇨🇿捷克",
    ["新西兰|奥克兰|NZ|New Zealand|Auckland"] = outputLanguage == "EN" and "🇳🇿NZ" or "🇳🇿新西兰",
    ["尼泊尔|加德满都|NP|Nepal|Kathmandu"] = outputLanguage == "EN" and "🇳🇵NP" or "🇳🇵尼泊尔",
    ["葡萄牙|里斯本|PT|Portugal|Lisbon"] = outputLanguage == "EN" and "🇵🇹PT" or "🇵🇹葡萄牙",
    ["巴基斯坦|伊斯兰堡|PK|Pakistan|Islamabad"] = outputLanguage == "EN" and "🇵🇰PK" or "🇵🇰巴基斯坦",
    ["伊朗|德黑兰|IR|Iran|Tehran"] = outputLanguage == "EN" and "🇮🇷IR" or "🇮🇷伊朗",
    ["伊拉克|巴格达|IQ|Iraq|Baghdad"] = outputLanguage == "EN" and "🇮🇶IQ" or "🇮🇶伊拉克",
    ["阿尔及利亚|阿尔及尔|DZ|Algeria|Algiers"] = outputLanguage == "EN" and "🇩🇿DZ" or "🇩🇿阿尔及利亚",
    ["摩洛哥|拉巴特|MA|Morocco|Rabat"] = outputLanguage == "EN" and "🇲🇦MA" or "🇲🇦摩洛哥",
    ["尼日利亚|拉各斯|NG|Nigeria|Lagos"] = outputLanguage == "EN" and "🇳🇬NG" or "🇳🇬尼日利亚",
    ["秘鲁|利马|PE|Peru|Lima"] = outputLanguage == "EN" and "🇵🇪PE" or "🇵🇪秘鲁",
    ["哥伦比亚|波哥大|CO|Colombia|Bogotá"] = outputLanguage == "EN" and "🇨🇴CO" or "🇨🇴哥伦比亚",
    ["罗马尼亚|Romania|RO|Bucharest|Cluj-Napoca|Timișoara"] = outputLanguage == "EN" and "🇷🇴RO" or "🇷🇴罗马尼亚",
    ["塞尔维亚|Serbia|RS|Belgrade|Novi Sad|Niš"] = outputLanguage == "EN" and "🇷🇸RS" or "🇷🇸塞尔维亚",
    ["立陶宛|Lithuania|LT|Vilnius|Kaunas|Klaipėda"] = outputLanguage == "EN" and "🇱🇹LT" or "🇱🇹立陶宛",
    ["危地马拉|Guatemala|GT|Guatemala City|Antigua Guatemala|Quetzaltenango"] = outputLanguage == "EN" and "🇬🇹GT" or "🇬🇹危地马拉",
    ["丹麦|Denmark|DK|Copenhagen|Aarhus|Odense"] = outputLanguage == "EN" and "🇩🇰DK" or "� dk丹麦",
    ["乌克兰|Ukraine|UA|Kyiv|Lviv|Odesa"] = outputLanguage == "EN" and "🇺🇦UA" or "🇺🇦乌克兰",
    ["厄瓜多尔|Ecuador|EC|Quito|Guayaquil|Cuenca"] = outputLanguage == "EN" and "🇪🇨EC" or "🇪🇨厄瓜多尔",
    ["哥斯达黎加|Costa Rica|CR|San José|Alajuela|Cartago"] = outputLanguage == "EN" and "🇨🇷CR" or "🇨🇷哥斯达黎加",
    ["塞浦路斯|Cyprus|CY|Nicosia|Limassol|Larnaca"] = outputLanguage == "EN" and "🇨🇾CY" or "🇨🇾塞浦路斯",
    ["比利时|Belgium|BE|Brussels|Antwerp|Ghent"] = outputLanguage == "EN" and "🇧🇪BE" or "🇧🇪比利时",
    ["玻利维亚|Bolivia|BO|Sucre|La Paz|Santa Cruz"] = outputLanguage == "EN" and "🇧🇴BO" or "🇧🇴玻利维亚"
}

-- Filter keywords to exclude invalid or promotional nodes
local filterKeywords = {
    "广告", "过期", "无效", "测试", "备用", "官网", "账号", "有效期", 
    "到期", "刷新", "剩余", "会员", "流量", "超时", "佣金", "免翻", 
    "下载", "更新", "点外", "重置", "Days", "Date", "Expire", "Premium", 
    "建议", "套餐", "有效", "剩余", "版本", "已用", "过期", "失联", 
    "测试", "官方", "网址", "备用", "TEST", "客服", "网站", "获取", 
    "流量", "机场", "下次", "官址", "联系", "邮箱", "工单", "学术", 
    "USE", "USED", "TOTAL", "EXPIRE", "EMAIL"
}

local keywordsMap = {
    ["ChatGPT"] = "GPT",
    ["解锁"] = "解",
    ["中转"] = "中转",
    ["t.me"] = ""
}

for _, kw in ipairs(filterKeywords) do
    if string.find(string.lower($server.title), string.lower(kw)) then
        return false
    end
end

local preservedParts = {}
local newTitle = $server.title

for kw, replacement in pairs(keywordsMap) do
    if string.find(string.lower(newTitle), string.lower(kw)) then
        table.insert(preservedParts, replacement)
        newTitle = string.gsub(newTitle, kw, "")
    end
end

local titleFlag = false
for keyword, name in pairs(keywordsToNames) do
    if string.find(string.lower(newTitle), string.lower(keyword)) then
        newTitle = name
        titleFlag = true
        break
    end
end

if not titleFlag then
    return false
end

newTitle = customCharStart .. newTitle

local map = globalThis.map or {}
globalThis.map = map
if not map[newTitle] then
    map[newTitle] = 1
else
    newTitle = newTitle .. "-" .. (map[newTitle] + 1)
    map[newTitle] = (map[newTitle] or 0) + 1
end

newTitle = newTitle .. customCharEnd

if #preservedParts > 0 then
    newTitle = newTitle .. " " .. table.concat(preservedParts, " ")
end

$server.title = newTitle

return true