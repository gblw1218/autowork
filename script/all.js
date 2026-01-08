let customCharStart = "LW-";
let customCharEnd = "";
const outputLanguage = "CN";
const filteredTypes = ["trojan", "udp"]; // 要过滤的协议类型
if (filteredTypes.includes($server.type?.toLowerCase())) {
    return false; 
}

const keywordsToNames = {
    "新加坡|狮城|SG|Singapore": outputLanguage === "EN" ? "🇸🇬SG" : "🇸🇬新加坡🚀",
    "台|台湾|台北|高雄|TW|Taiwan|Taipei|Kaohsiung|港|香港|HK|Hong Kong|澳门|澳門|MO|Macao": outputLanguage === "EN" ? "twHMT" : "🇭🇰港澳台🚀",
    "日|东京|大阪|名古屋|JP|Tokyo|Japan|Osaka|Nagoya": outputLanguage === "EN" ? "🇯🇵JP" : "🇯🇵日本🚀",
    "韩国|首尔|釜山|KR|Korea|Seoul|Busan": outputLanguage === "EN" ? "🇰🇷KR" : "🇰🇷韩国🚀",
    "阿联酋|迪拜|阿布扎比|AE|UAE|Dubai|Abu Dhabi": outputLanguage === "EN" ? "🇦🇪AE" : "🇦🇪阿联酋🚀",
    "以色列|Israel|IL|Jerusalem|Tel Aviv|Haifa": outputLanguage === "EN" ? "🇮🇱IL" : "🇮🇱以色列🚀",
    "丹麦|Denmark|DK|Copenhagen|Aarhus|Odense": outputLanguage === "EN" ? "🇩🇰DK" : "🇩🇰丹麦🚀",
    "挪威|奥斯陆|NO|Norway|Oslo": outputLanguage === "EN" ? "🇳🇴NO" : "🇳🇴挪威🚀",
    "芬兰|赫尔辛基|FI|Finland|Helsinki": outputLanguage === "EN" ? "🇫🇮FI" : "🇫🇮芬兰🚀",
    "卡塔尔|多哈|QA|Qatar|Doha": outputLanguage === "EN" ? "🇶🇦QA" : "🇶🇦卡塔尔🚀",
    "卢森堡|Luxembourg|LU|Luxembourg City": outputLanguage === "EN" ? "🇱🇺LU" : "🇱🇺卢森堡🚀",
    "爱沙尼亚|Estonia|EE|Tallinn": outputLanguage === "EN" ? "🇪🇪EE" : "🇪🇪爱沙尼亚🚀",
    "澳|悉尼|墨尔本|布里斯班|AU|Australia|Sydney|Melbourne|Brisbane": outputLanguage === "EN" ? "🇦🇺AU" : "🇦🇺澳大利亚🔥",
    "美国|美國|US|洛杉矶|洛杉磯|西雅图|纽约|芝加哥|Atlanta|States|American|Los Angeles|Seattle|New York|Chicago": outputLanguage === "EN" ? "🇺🇸US" : "🇺🇸美国🔥",
    "加拿大|多伦多|温哥华|蒙特利尔|CA|Canada|Toronto|Vancouver|Montreal": outputLanguage === "EN" ? "🇨🇦CA" : "🇨🇦加拿大🔥",
    "法国|巴黎|里昂|马赛|FR|France|Paris|Lyon|Marseille": outputLanguage === "EN" ? "🇫🇷FRA" : "🇫🇷法国🔥",
    "智利|圣地亚哥|CL|Chile|Santiago": outputLanguage === "EN" ? "🇨🇱CL" : "🇨🇱智利🔥",
    "爱尔兰|都柏林|IE|Ireland|Dublin": outputLanguage === "EN" ? "🇮🇪IRL" : "🇮🇪爱尔兰🔥",
    "冰岛|雷克雅未克|IS|Iceland|Reykjavik": outputLanguage === "EN" ? "🇮🇸IS" : "🇮🇸冰岛🔥",
    "德国|法兰克福|柏林|慕尼黑|DE|Germany|Frankfurt|Berlin|Munich": outputLanguage === "EN" ? "🇩🇪DE" : "🇩🇪德国🔥",
    "英国|伦敦|曼彻斯特|伯明翰|GB|UK|United Kingdom|London|Manchester|Birmingham": outputLanguage === "EN" ? "🇬🇧GB" : "🇬🇧英国🔥",
    "意大利|罗马|米兰|那不勒斯|IT|Italy|Rome|Milan|Naples": outputLanguage === "EN" ? "🇮🇹IT" : "🇮🇹意大利🔥",
    "荷兰|阿姆斯特丹|鹿特丹|NL|Netherlands|Amsterdam|Rotterdam": outputLanguage === "EN" ? "🇳🇱NL" : "🇳🇱荷兰🔥",
    "瑞士|苏黎世|日内瓦|CH|Switzerland|Zurich|Geneva": outputLanguage === "EN" ? "🇨🇭CH" : "🇨🇭瑞士🔥",
    "印度|孟买|德里|班加罗尔|IN|India|Mumbai|Delhi|Bangalore": outputLanguage === "EN" ? "🇮🇳IN" : "🇮🇳印度🔥",
    "俄罗斯|莫斯科|圣彼得堡|RU|Russia|Moscow|Saint Petersburg": outputLanguage === "EN" ? "🇷🇺RU" : "🇷🇺俄罗斯🔥",
    "泰国|曼谷|清迈|TH|Thailand|Bangkok|Chiang Mai": outputLanguage === "EN" ? "🇹🇭TH" : "🇹🇭泰国🔥",
    "马来西亚|吉隆坡|槟城|MY|Malaysia|Kuala Lumpur|Penang": outputLanguage === "EN" ? "🇲🇾MY" : "🇲🇾马来西亚🔥",
    "比利时|Belgium|BE|Brussels|Antwerp|Ghent": outputLanguage === "EN" ? "🇧🇪BE" : "🇧🇪比利时🔥",
    "奥地利|维也纳|AT|Austria|Vienna": outputLanguage === "EN" ? "🇦🇹AT" : "🇦🇹奥地利🔥",
    "新西兰|奥克兰|NZ|New Zealand|Auckland": outputLanguage === "EN" ? "🇳🇿NZ" : "🇳🇿新西兰🔥",
    "瑞典|斯德哥尔摩|哥德堡|SE|Sweden|Stockholm|Gothenburg": outputLanguage === "EN" ? "🇸🇪SE" : "🇸🇪瑞典🔥",
    "沙特|利雅得|吉达|SA|Saudi Arabia|Riyadh|Jeddah": outputLanguage === "EN" ? "🇸🇦SA" : "🇸🇦沙特🔥",
    "印度尼西亚|雅加达|ID|Indonesia|Jakarta": outputLanguage === "EN" ? "🇮🇩ID" : "🇮🇩印尼🔥",
    "斯洛文尼亚|Slovenia|SI|Ljubljana": outputLanguage === "EN" ? "🇸🇮SI" : "🇸🇮斯洛文尼亚🔥",
    "拉脱维亚|Latvia|LV|Riga": outputLanguage === "EN" ? "🇱🇻LV" : "🇱🇻拉脱维亚🔥",
    "克罗地亚|Croatia|HR|Zagreb": outputLanguage === "EN" ? "🇭🇷HR" : "🇭🇷克罗地亚🔥",
    "巴林|Bahrain|BH|Manama": outputLanguage === "EN" ? "🇧🇭BH" : "🇧🇭巴林🔥",
    "科威特|Kuwait|KW|Kuwait City": outputLanguage === "EN" ? "🇰🇼KW" : "🇰🇼科威特🔥",
	"越南|河内|胡志明|VN|Vietnam|Hanoi|Ho Chi Minh": outputLanguage === "EN" ? "🇻🇳VN" : "🇻🇳越南🔥",
	    "尼日利亚|拉各斯|NG|Nigeria|Lagos": outputLanguage === "EN" ? "🇳🇬NG" : "🇳🇬尼日利亚🔥",
    "土耳其|伊斯坦布尔|安卡拉|TR|Turkey|Istanbul|Ankara": outputLanguage === "EN" ? "🇹🇷TR" : "🇹🇷土耳其💎",
    "西班牙|马德里|巴塞罗那|ES|Spain|Madrid|Barcelona": outputLanguage === "EN" ? "🇪🇸ES" : "🇪🇸西班牙💎",
    "巴西|圣保罗|里约热内卢|BR|Brazil|São Paulo|Rio de Janeiro": outputLanguage === "EN" ? "🇧🇷BR" : "🇧🇷巴西💎",
    "南非|约翰内斯堡|开普敦|ZA|South Africa|Johannesburg|Cape Town": outputLanguage === "EN" ? "🇿🇦ZA" : "🇿🇦南非💎",
    "墨西哥|墨西哥城|瓜达拉哈拉|MX|Mexico|Mexico City|Guadalajara": outputLanguage === "EN" ? "🇲🇽MX" : "🇲🇽墨西哥💎",
    "阿根廷|布宜诺斯艾利斯|AR|Argentina|Buenos Aires": outputLanguage === "EN" ? "🇦🇷AR" : "🇦🇷阿根廷💎",
    "波兰|华沙|克拉科夫|PL|Poland|Warsaw|Krakow": outputLanguage === "EN" ? "🇵🇱PL" : "🇵🇱波兰💎",
    "菲律宾|马尼拉|PH|Philippines|Manila": outputLanguage === "EN" ? "🇵🇭PH" : "🇵🇭菲律宾💎",
    "埃及|开罗|EG|Egypt|Cairo": outputLanguage === "EN" ? "🇪🇬EG" : "🇪🇬埃及💎",
    "希腊|雅典|GR|Greece|Athens": outputLanguage === "EN" ? "🇬🇷GR" : "🇬🇷希腊💎",
    "匈牙利|布达佩斯|HU|Hungary|Budapest": outputLanguage === "EN" ? "🇭🇺HU" : "🇭🇺匈牙利💎",
    "捷克|布拉格|CZ|Czech|Prague": outputLanguage === "EN" ? "🇨🇿CZ" : "🇨🇿捷克💎",
    "尼泊尔|加德满都|NP|Nepal|Kathmandu": outputLanguage === "EN" ? "🇳🇵NP" : "🇳🇵尼泊尔💎",
    "葡萄牙|里斯本|PT|Portugal|Lisbon": outputLanguage === "EN" ? "🇵🇹PT" : "🇵🇹葡萄牙💎",
    "巴基斯坦|伊斯兰堡|PK|Pakistan|Islamabad": outputLanguage === "EN" ? "🇵🇰PK" : "🇵🇰巴基斯坦💎",
    "伊朗|德黑兰|IR|Iran|Tehran": outputLanguage === "EN" ? "🇮🇷IR" : "🇮🇷伊朗💎",
    "伊拉克|巴格达|IQ|Iraq|Baghdad": outputLanguage === "EN" ? "🇮🇶IQ" : "🇮🇶伊拉克💎",
    "阿尔及利亚|阿尔及尔|DZ|Algeria|Algiers": outputLanguage === "EN" ? "🇩🇿DZ" : "🇩🇿阿尔及利亚💎",
    "摩洛哥|拉巴特|MA|Morocco|Rabat": outputLanguage === "EN" ? "🇲🇦MA" : "🇲🇦摩洛哥💎",
    "秘鲁|利马|PE|Peru|Lima": outputLanguage === "EN" ? "🇵🇪PE" : "🇵🇪秘鲁💎",
    "哥伦比亚|波哥大|CO|Colombia|Bogotá": outputLanguage === "EN" ? "🇨🇴CO" : "🇨🇴哥伦比亚💎",
    "罗马尼亚|Romania|RO|Bucharest|Cluj-Napoca|Timișoara": outputLanguage === "EN" ? "🇷🇴RO" : "🇷🇴罗马尼亚💎",
    "塞尔维亚|Serbia|RS|Belgrade|Novi Sad|Niš": outputLanguage === "EN" ? "🇷🇸RS" : "🇷🇸塞尔维亚💎",
    "立陶宛|Lithuania|LT|Vilnius|Kaunas|Klaipėda": outputLanguage === "EN" ? "🇱🇹LT" : "🇱🇹立陶宛💎",
    "危地马拉|Guatemala|GT|Guatemala City|Antigua Guatemala|Quetzaltenango": outputLanguage === "EN" ? "🇬🇹GT" : "🇬🇹危地马拉💎",
    "乌克兰|Ukraine|UA|Kyiv|Lviv|Odesa": outputLanguage === "EN" ? "🇺🇦UA" : "🇺🇦乌克兰💎",
    "厄瓜多尔|Ecuador|EC|Quito|Guayaquil|Cuenca": outputLanguage === "EN" ? "🇪🇨EC" : "🇪🇨厄瓜多尔💎",
    "哥斯达黎加|Costa Rica|CR|San José|Alajuela|Cartago": outputLanguage === "EN" ? "🇨🇷CR" : "🇨🇷哥斯达黎加💎",
    "塞浦路斯|Cyprus|CY|Nicosia|Limassol|Larnaca": outputLanguage === "EN" ? "🇨🇾CY" : "🇨🇾塞浦路斯💎",
    "玻利维亚|Bolivia|BO|Sucre|La Paz|Santa Cruz": outputLanguage === "EN" ? "🇧🇴BO" : "🇧🇴玻利维亚💎",
    "乌拉圭|蒙得维的亚|UY|Uruguay|Montevideo": outputLanguage === "EN" ? "🇺🇾UY" : "🇺🇾乌拉圭💎",
    "委内瑞拉|加拉加斯|VE|Venezuela|Caracas": outputLanguage === "EN" ? "🇻🇪VE" : "🇻🇪委内瑞拉💎",
    "突尼斯|Tunisia|TN|Tunis": outputLanguage === "EN" ? "🇹🇳TN" : "🇹🇳突尼斯💎",
    "加纳|阿克拉|GH|Ghana|Accra": outputLanguage === "EN" ? "🇬🇭GH" : "🇬🇭加纳💎",
    "肯尼亚|内罗毕|KE|Kenya|Nairobi": outputLanguage === "EN" ? "🇰🇪KE" : "🇰🇪肯尼亚💎",
    "斯里兰卡|科伦坡|LK|Sri Lanka|Colombo": outputLanguage === "EN" ? "🇱🇰LK" : "🇱🇰斯里兰卡💎",
    "孟加拉国|达卡|BD|Bangladesh|Dhaka": outputLanguage === "EN" ? "🇧🇩BD" : "🇧🇩孟加拉国💎",

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

// 定义保留的关键词及其替换词
const keywordsMap = {
    "ChatGPT": "GPT",
    "t.me": "",
    "ccbaohe.com": "LW"
};

// 检查是否包含过滤关键词
if (filterKeywords.some(kw => new RegExp(kw, 'i').test($server.title))) return false;

// 保留跳过的关键词部分
let preservedParts = [], newTitle = $server.title;

// 提取并移除跳过的关键词部分
for (const kw in keywordsMap) {
    let match = newTitle.match(new RegExp(kw, 'i'));
    if (match) {
        preservedParts.push(keywordsMap[kw]);
        newTitle = newTitle.replace(match[0], '');
    }
}

let titleFlag = false;
for (const keyword in keywordsToNames) {
    if (new RegExp(keyword, 'i').test(newTitle)) {
        newTitle = keywordsToNames[keyword];
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
    newTitle = `${customCharStart}${++map["totalNode"]}${newTitle}-1`;
} else {
    newTitle = `${customCharStart}${++map["totalNode"]}${newTitle}-${++map[newTitle]}`;
}

newTitle += customCharEnd;

if (preservedParts.length) newTitle += ' ' + preservedParts.join(' ');

$server.title = newTitle;
return true;
