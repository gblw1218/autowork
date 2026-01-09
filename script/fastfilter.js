let customCharStart = "序号";
let customCharEnd = "";
const filteredTypes = ["trojan", "udp"]; // 要过滤的协议类型
if (filteredTypes.includes($server.type?.toLowerCase())) {
    return false; 
}

const keywordsToNames = {
"台|台湾|台北|高雄|TW|Taiwan|Taipei|Kaohsiung|港|香港|HK|Hong Kong|澳门|澳門|MO|Macao":  {area:"🇭🇰港澳台",flag:"🚀"},
"新加坡|狮城|SG|Singapore": {area:"🇸🇬新加坡",flag:"🚀"},
"日|东京|大阪|名古屋|JP|Tokyo|Japan|Osaka|Nagoya":{area:"🇯🇵日本",flag:"🚀"},
"韩国|首尔|釜山|KR|Korea|Seoul|Busan":{area:"🇰🇷韩国",flag:"🚀"},
"澳|悉尼|墨尔本|布里斯班|AU|Australia|Sydney|Melbourne|Brisbane": {area:"🇦🇺澳大利亚",flag:"🚀"},
"美国|美國|US|洛杉矶|洛杉磯|西雅图|纽约|芝加哥|Atlanta|States|American|Los Angeles|Seattle|New York|Chicago":  {area:"🇺🇸美国",flag:"🚀"},
"加拿大|多伦多|温哥华|蒙特利尔|CA|Canada|Toronto|Vancouver|Montreal":  {area:"🇨🇦加拿大",flag:"🚀"},
"阿联酋|迪拜|阿布扎比|AE|UAE|Dubai|Abu Dhabi":  {area:"🇦🇪阿联酋",flag:"🚀"},
"以色列|Israel|IL|Jerusalem|Tel Aviv|Haifa":  {area:"🇮🇱以色列",flag:"🚀"},
"丹麦|Denmark|DK|Copenhagen|Aarhus|Odense":  {area:"🇩🇰丹麦",flag:"🚀"},
"挪威|奥斯陆|NO|Norway|Oslo":  {area:"🇳🇴挪威",flag:"🚀"},
"芬兰|赫尔辛基|FI|Finland|Helsinki":  {area:"🇫🇮芬兰",flag:"🚀"},
"卡塔尔|多哈|QA|Qatar|Doha":  {area:"🇶🇦卡塔尔",flag:"🚀"},
"卢森堡|Luxembourg|LU|Luxembourg City":  {area:"🇱🇺卢森堡",flag:"🚀"},
"爱沙尼亚|Estonia|EE|Tallinn":  {area:"🇪🇪爱沙尼亚",flag:"🚀"},
"法国|巴黎|里昂|马赛|FR|France|Paris|Lyon|Marseille":  {area:"🇫🇷法国",flag:"🔥"},
"智利|圣地亚哥|CL|Chile|Santiago": {area:"🇨🇱智利",flag:"🔥"},
"爱尔兰|都柏林|IE|Ireland|Dublin": {area:"🇮🇪爱尔兰",flag:"🔥"},
"冰岛|雷克雅未克|IS|Iceland|Reykjavik": {area:"🇮🇸冰岛",flag:"🔥"},
"德国|法兰克福|柏林|慕尼黑|DE|Germany|Frankfurt|Berlin|Munich":  {area:"🇩🇪德国",flag:"🔥"},
"英国|伦敦|曼彻斯特|伯明翰|GB|UK|United Kingdom|London|Manchester|Birmingham":  {area:"🇬🇧英国",flag:"🔥"},
"意大利|罗马|米兰|那不勒斯|IT|Italy|Rome|Milan|Naples":  {area:"🇮🇹意大利",flag:"🔥"},
"荷兰|阿姆斯特丹|鹿特丹|NL|Netherlands|Amsterdam|Rotterdam":{area:"🇳🇱荷兰",flag:"🔥"},
"瑞士|苏黎世|日内瓦|CH|Switzerland|Zurich|Geneva": {area:"🇨🇭瑞士",flag:"🔥"},
"印度|孟买|德里|班加罗尔|IN|India|Mumbai|Delhi|Bangalore": {area:"🇮🇳印度",flag:"🔥"},
"俄罗斯|莫斯科|圣彼得堡|RU|Russia|Moscow|Saint Petersburg": {area:"🇷🇺俄罗斯",flag:"🔥"},
"泰国|曼谷|清迈|TH|Thailand|Bangkok|Chiang Mai": {area:"🇹🇭泰国",flag:"🔥"},
"马来西亚|吉隆坡|槟城|MY|Malaysia|Kuala Lumpur|Penang": {area:"🇲🇾马来西亚",flag:"🔥"},
"比利时|Belgium|BE|Brussels|Antwerp|Ghent":  {area:"🇧🇪比利时",flag:"🔥"},
"奥地利|维也纳|AT|Austria|Vienna": {area:"🇦🇹奥地利",flag:"🔥"},
"新西兰|奥克兰|NZ|New Zealand|Auckland": {area:"🇳🇿新西兰",flag:"🔥"},
"瑞典|斯德哥尔摩|哥德堡|SE|Sweden|Stockholm|Gothenburg":  {area:"🇸🇪瑞典",flag:"🔥"},
"沙特|利雅得|吉达|SA|Saudi Arabia|Riyadh|Jeddah":  {area:"🇸🇦沙特",flag:"🔥"},
"印度尼西亚|雅加达|ID|Indonesia|Jakarta":  {area:"🇮🇩印尼",flag:"🔥"},
"斯洛文尼亚|Slovenia|SI|Ljubljana": {area:"🇸🇮斯洛文尼亚",flag:"🔥"},
"拉脱维亚|Latvia|LV|Riga":  {area:"🇱🇻拉脱维亚",flag:"🔥"},
"克罗地亚|Croatia|HR|Zagreb": {area:"🇭🇷克罗地亚",flag:"🔥"},
"巴林|Bahrain|BH|Manama":  {area:"🇧🇭巴林",flag:"🔥"},
"科威特|Kuwait|KW|Kuwait City":  {area:"🇰🇼科威特",flag:"🔥"},
"越南|河内|胡志明|VN|Vietnam|Hanoi|Ho Chi Minh": {area:"🇻🇳越南",flag:"🔥"},
"尼日利亚|拉各斯|NG|Nigeria|Lagos":  {area:"🇳🇬尼日利亚",flag:"🔥"},
"菲律宾|马尼拉|PH|Philippines|Manila":  {area:"🇵🇭菲律宾",flag:"🔥"},
"南非|约翰内斯堡|开普敦|ZA|South Africa|Johannesburg|Cape Town": {area:"🇿🇦南非",flag:"🔥"}
};

// 过滤关键词，防止无效或广告节点
const filterKeywords = [
    "广告", "过期", "无效", "测试", "备用", "账号", "有效期",
    "到期", "刷新", "剩余", "会员", "流量", "超时",
    "佣金", "免翻", "下载", "更新", "点外", "重置",
    "Days", "Date", "Expire", "Premium", "建议",
    "套餐", "到期", "有效", "剩余", "版本", "已用", "过期", "失联",
    "测试", "备用", "TEST", "客服", "网站",
    "获取", "流量", "下次", "官址", "联系", "邮箱","127.0.0.1",
    "工单", "中国", "USE", "USED", "TOTAL", "EXPIRE", "EMAIL"
];



// 检查是否包含过滤关键词
if (filterKeywords.some(kw => new RegExp(kw, 'i').test($server.title))) return false;

let preservedParts = [], newTitle = $server.title;

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

if (!titleFlag) return false;

const map = globalThis.map || (globalThis.map = {});
if(!map["totalNode"]){
    map["totalNode"] = 0;
}
if (!map[newTitle]) {
    map[newTitle] = 1;
    newTitle = `${flagIcon}${customCharStart}${++map["totalNode"]}${newTitle}-1`;
} else {
    newTitle = `${flagIcon}${customCharStart}${++map["totalNode"]}${newTitle}-${++map[newTitle]}`;
}

newTitle += customCharEnd;

if (preservedParts.length) newTitle += ' ' + preservedParts.join(' ');

$server.title = newTitle;
return true;
