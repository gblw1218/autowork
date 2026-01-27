let customCharStart = "序号";
const filteredTypes = ["trojan"]; // 要过滤的协议类型
if (filteredTypes.includes($server.type?.toLowerCase())) {
    return false;
}

const filterArea = "老挝|万象|LA|Laos|Vientiane|伊朗|委内瑞拉|加拉加斯|VE|Venezuela|Caracas|塞浦路斯|Cyprus|CY|Nicosia|Limassol|Larnaca|危地马拉|Guatemala|GT|Guatemala City|Antigua Guatemala|Quetzaltenango|孟加拉国|达卡|BD|Bangladesh|Dhaka|俄罗斯|俄羅斯|Russia|RU";

// 检查是否包含过滤地区
if (new RegExp(filterArea, 'i').test($server.title)) return false;


const filterKeywords = [
    "广告", "过期", "无效", "测试", "备用", "账号", "有效期",
    "到期", "刷新", "剩余", "会员", "流量", "超时","建议",
    "佣金", "免翻", "下载", "更新", "点外", "重置", "推荐",
    "套餐", "关注", "有效", "版本", "已用", "过期", "失联",
    "TEST", "客服", "网站", "获取", "下次", "官址", "联系", "邮箱",
    "127.0.0.1", "Days", "Date", "Expire", "Premium",
    "USE", "USED", "TOTAL", "EXPIRE", "EMAIL"
];

// 检查是否包含过滤关键词
if (filterKeywords.some(kw => new RegExp(kw, 'i').test($server.title))) return false;

const keywordsToNames = {
"港|香港|HK|Hong Kong|HKSAR|澳门|澳門|MO|Macao|Macau|台|台湾|台北|高雄|TW|Taiwan|Taipei|Kaohsiung|亚洲":  {area:"🇭🇰港澳台",flag:"🚀"},
"新加坡|狮城|SG|Singapore": {area:"🇸🇬新加坡",flag:"🚀"},
"日|日本|东京|大阪|名古屋|JP|Tokyo|Japan|Osaka|Nagoya":{area:"🇯🇵日本",flag:"🚀"},
"韩国|首尔|釜山|KR|Korea|South Korea|Seoul|Busan":{area:"🇰🇷韩国",flag:"🚀"},
"阿联酋|阿拉伯联合酋长国|United Arab Emirates|UAE|AE|迪拜|Dubai|阿布扎比|Abu Dhabi":  {area:"🇦🇪阿联酋",flag:"🚀"},
"以色列|Israel|IL|耶路撒冷|Jerusalem|特拉维夫|Tel Aviv":  {area:"🇮🇱以色列",flag:"🚀"},
"卡塔尔|卡達|Qatar|QA|多哈|Doha":  {area:"🇶🇦卡塔尔",flag:"🚀"},
"荷兰|阿姆斯特丹|鹿特丹|NL|Netherlands|Amsterdam|Rotterdam":{area:"🇳🇱荷兰",flag:"🚀"},
"卢森堡|Luxembourg|LU|Luxembourg City":  {area:"🇱🇺卢森堡",flag:"🚀"},
"澳大利亚|澳洲|悉尼|墨尔本|布里斯班|AU|Australia|Sydney|Melbourne|Brisbane|欧美": {area:"🇦🇺澳大利亚",flag:"🌃"},
"美国|美國|US|USA|洛杉矶|洛杉磯|西雅图|纽约|芝加哥|Atlanta|States|American|Los Angeles|Seattle|New York|Chicago":  {area:"🇺🇸美国",flag:"🌃"},
"加拿大|多伦多|温哥华|蒙特利尔|CA|Canada|Toronto|Vancouver|Montreal":  {area:"🇨🇦加拿大",flag:"🌃"},
"法国|巴黎|里昂|马赛|FR|France|Paris|Lyon|Marseille":  {area:"🇫🇷法国",flag:"🌃"},
"瑞士|苏黎世|日内瓦|CH|Switzerland|Zurich|Geneva": {area:"🇨🇭瑞士",flag:"🌃"},
"德国|柏林|慕尼黑|汉堡|汉诺威|杜塞尔多夫|法兰克福|Dusseldorf|Frankfurt|Germany|DE|Berlin|Munich|Hamburg|Hanover":{area:"🇩🇪德国",flag:"🌃"},
"英国|伦敦|曼彻斯特|伯明翰|GB|UK|United Kingdom|London|Manchester|Birmingham":  {area:"🇬🇧英国",flag:"🌃"},
"芬兰|赫尔辛基|FI|Finland|Helsinki":  {area:"🇫🇮芬兰",flag:"🌃"},
"爱沙尼亚|Estonia|EE|Tallinn":  {area:"🇪🇪爱沙尼亚",flag:"🌃"},
"泰国|曼谷|清迈|TH|Thailand|Bangkok|Chiang Mai": {area:"🇹🇭泰国",flag:"🌃"},
"越南|河内|胡志明|VN|Vietnam|Hanoi|Ho Chi Minh": {area:"🇻🇳越南",flag:"🌃"},
"冰岛|雷克雅未克|IS|Iceland|Reykjavik": {area:"🇮🇸冰岛",flag:"🌃"}
};



let newTitle = $server.title;
let titleFlag = false;
let flagIcon = '';
for (const keyword in keywordsToNames) {
    if (new RegExp(keyword, 'i').test(newTitle)) {
        newTitle = keywordsToNames[keyword].area;
        flagIcon = keywordsToNames[keyword].flag;
        titleFlag = true;
        break;
    }
}

if (!titleFlag) {
    return false;
}


const map = globalThis.map || (globalThis.map = {});
if (!map["totalNode"]) {
    map["totalNode"] = 0;
}
if (!map[newTitle]) {
    map[newTitle] = 1;
    newTitle = `${flagIcon}${customCharStart}${++map["totalNode"]}${newTitle}-1`;
} else {
    newTitle = `${flagIcon}${customCharStart}${++map["totalNode"]}${newTitle}-${++map[newTitle]}`;
}

$server.title = newTitle;
return true;
