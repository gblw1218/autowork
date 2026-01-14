let customCharStart = "序号";
const filteredTypes = ["trojan", "udp"]; // 要过滤的协议类型
if (filteredTypes.includes($server.type?.toLowerCase())) {
    return false; 
}

const keywordsToNames = {
"港|香港|HK|Hong Kong|HKSAR|澳门|澳門|MO|Macao|Macau":  {area:"🇭🇰港澳",flag:"🚀"},
"台|台湾|台北|高雄|TW|Taiwan|Taipei|Kaohsiung":  {area:"🇹🇼台湾",flag:"🚀"},
"新加坡|狮城|SG|Singapore": {area:"🇸🇬新加坡",flag:"🚀"},
"日|日本|东京|大阪|名古屋|JP|Tokyo|Japan|Osaka|Nagoya":{area:"🇯🇵日本",flag:"🚀"},
"韩国|首尔|釜山|KR|Korea|South Korea|Seoul|Busan":{area:"🇰🇷韩国",flag:"🚀"},
"泰国|曼谷|清迈|TH|Thailand|Bangkok|Chiang Mai": {area:"🇹🇭泰国",flag:"🚀"},
"越南|河内|胡志明|VN|Vietnam|Hanoi|Ho Chi Minh": {area:"🇻🇳越南",flag:"🚀"},
"澳大利亚|澳洲|悉尼|墨尔本|布里斯班|AU|Australia|Sydney|Melbourne|Brisbane": {area:"🇦🇺澳大利亚",flag:"🌃"},
"美国|美國|US|USA|洛杉矶|洛杉磯|西雅图|纽约|芝加哥|Atlanta|States|American|Los Angeles|Seattle|New York|Chicago":  {area:"🇺🇸美国",flag:"🌃"},
"加拿大|多伦多|温哥华|蒙特利尔|CA|Canada|Toronto|Vancouver|Montreal":  {area:"🇨🇦加拿大",flag:"🌃"},
"法国|巴黎|里昂|马赛|FR|France|Paris|Lyon|Marseille":  {area:"🇫🇷法国",flag:"🌃"},
"德国|柏林|慕尼黑|汉堡|汉诺威|杜塞尔多夫|法兰克福|Dusseldorf|Frankfurt|Germany|DE|Berlin|Munich|Hamburg|Hanover":{area:"🇩🇪德国",flag:"🌃"},
"英国|伦敦|曼彻斯特|伯明翰|GB|UK|United Kingdom|London|Manchester|Birmingham":  {area:"🇬🇧英国",flag:"🌃"},
"阿联酋|迪拜|阿布扎比|AE|UAE|Dubai|Abu Dhabi":  {area:"🇦🇪阿联酋",flag:"🌃"},
"以色列|Israel|IL|Jerusalem|Tel Aviv|Haifa":  {area:"🇮🇱以色列",flag:"🌃"},
"芬兰|赫尔辛基|FI|Finland|Helsinki":  {area:"🇫🇮芬兰",flag:"🌃"},
"爱沙尼亚|Estonia|EE|Tallinn":  {area:"🇪🇪爱沙尼亚",flag:"🌃"},
"卡塔尔|多哈|QA|Qatar|Doha":  {area:"🇶🇦卡塔尔",flag:"🔥"},
"丹麦|Denmark|DK|Copenhagen|Aarhus|Odense":  {area:"🇩🇰丹麦",flag:"🔥"},
"卢森堡|Luxembourg|LU|Luxembourg City":  {area:"🇱🇺卢森堡",flag:"🔥"},
"挪威|奥斯陆|NO|Norway|Oslo":  {area:"🇳🇴挪威",flag:"🔥"},
"智利|圣地亚哥|CL|Chile|Santiago": {area:"🇨🇱智利",flag:"🔥"},
"爱尔兰|都柏林|IE|Ireland|Dublin": {area:"🇮🇪爱尔兰",flag:"🔥"},
"冰岛|雷克雅未克|IS|Iceland|Reykjavik": {area:"🇮🇸冰岛",flag:"🔥"},
"意大利|罗马|米兰|那不勒斯|IT|Italy|Rome|Milan|Naples":  {area:"🇮🇹意大利",flag:"🔥"},
"荷兰|阿姆斯特丹|鹿特丹|NL|Netherlands|Amsterdam|Rotterdam":{area:"🇳🇱荷兰",flag:"🔥"},
"瑞士|苏黎世|日内瓦|CH|Switzerland|Zurich|Geneva": {area:"🇨🇭瑞士",flag:"🔥"},
"印度|孟买|德里|班加罗尔|IN|India|Mumbai|Delhi|Bangalore": {area:"🇮🇳印度",flag:"🔥"},
"俄罗斯|莫斯科|圣彼得堡|RU|Russia|Moscow|Saint Petersburg": {area:"🇷🇺俄罗斯",flag:"🔥"},
"马来西亚|吉隆坡|槟城|MY|Malaysia|Kuala Lumpur|Penang": {area:"🇲🇾马来西亚",flag:"🔥"},
"比利时|Belgium|BE|Brussels|Antwerp|Ghent":  {area:"🇧🇪比利时",flag:"🔥"},
"奥地利|维也纳|AT|Austria|Vienna": {area:"🇦🇹奥地利",flag:"🔥"},
"新西兰|奥克兰|NZ|New Zealand|Auckland": {area:"🇳🇿新西兰",flag:"🔥"},
"瑞典|斯德哥尔摩|哥德堡|SE|Sweden|Stockholm|Gothenburg":  {area:"🇸🇪瑞典",flag:"🔥"},
"沙特|利雅得|吉达|SA|Saudi Arabia|Riyadh|Jeddah":  {area:"🇸🇦沙特",flag:"🔥"},
"印度尼西亚|雅加达|ID|Indonesia|Jakarta|印尼":  {area:"🇮🇩印尼",flag:"🔥"},
"斯洛文尼亚|Slovenia|SI|Ljubljana": {area:"🇸🇮斯洛文尼亚",flag:"🔥"},
"拉脱维亚|Latvia|LV|Riga":  {area:"🇱🇻拉脱维亚",flag:"🔥"},
"克罗地亚|Croatia|HR|Zagreb": {area:"🇭🇷克罗地亚",flag:"🔥"},
"巴林|Bahrain|BH|Manama":  {area:"🇧🇭巴林",flag:"🔥"},
"科威特|Kuwait|KW|Kuwait City":  {area:"🇰🇼科威特",flag:"🔥"},
"尼日利亚|拉各斯|NG|Nigeria|Lagos":  {area:"🇳🇬尼日利亚",flag:"🔥"},
"菲律宾|马尼拉|PH|Philippines|Manila":  {area:"🇵🇭菲律宾",flag:"🔥"},
"南非|约翰内斯堡|开普敦|ZA|South Africa|Johannesburg|Cape Town": {area:"🇿🇦南非",flag:"🔥"},
"波兰|华沙|克拉科夫|PL|Poland|Warsaw|Krakow": {area:"🇵🇱波兰",flag:"🔥"},
"土耳其|伊斯坦布尔|安卡拉|TR|Turkey|Istanbul|Ankara":  {area:"🇹🇷土耳其",flag:"💎"},
"西班牙|马德里|巴塞罗那|ES|Spain|Madrid|Barcelona": {area:"🇪🇸西班牙",flag:"💎"},
"巴西|圣保罗|里约热内卢|BR|Brazil|São Paulo|Rio de Janeiro": {area:"🇧🇷巴西",flag:"💎"},
"墨西哥|墨西哥城|瓜达拉哈拉|MX|Mexico|Mexico City|Guadalajara":  {area:"🇲🇽墨西哥",flag:"💎"},
"阿根廷|布宜诺斯艾利斯|AR|Argentina|Buenos Aires":  {area:"🇦🇷阿根廷",flag:"💎"},
"埃及|开罗|EG|Egypt|Cairo":  {area:"🇪🇬埃及",flag:"💎"},
"希腊|雅典|GR|Greece|Athens": {area:"🇬🇷希腊",flag:"💎"},
"匈牙利|布达佩斯|HU|Hungary|Budapest":  {area:"🇭🇺匈牙利",flag:"💎"},
"捷克|布拉格|CZ|Czech|Prague":  {area:"🇨🇿捷克",flag:"💎"},
"尼泊尔|加德满都|NP|Nepal|Kathmandu":{area:"🇳🇵尼泊尔",flag:"💎"},
"葡萄牙|里斯本|PT|Portugal|Lisbon": {area:"🇵🇹葡萄牙",flag:"💎"},
"巴基斯坦|伊斯兰堡|PK|Pakistan|Islamabad":  {area:"🇵🇰巴基斯坦",flag:"💎"},
"伊拉克|巴格达|IQ|Iraq|Baghdad":  {area:"🇮🇶伊拉克",flag:"💎"},
"阿尔及利亚|阿尔及尔|DZ|Algeria|Algiers":  {area:"🇩🇿阿尔及利亚",flag:"💎"},
"摩洛哥|拉巴特|MA|Morocco|Rabat": {area:"🇲🇦摩洛哥",flag:"💎"},
"秘鲁|利马|PE|Peru|Lima":{area:"🇵🇪秘鲁",flag:"💎"},
"哥伦比亚|波哥大|CO|Colombia|Bogotá": {area:"🇨🇴哥伦比亚",flag:"💎"},
"罗马尼亚|Romania|RO|Bucharest|Cluj-Napoca|Timișoara": {area:"🇷🇴罗马尼亚",flag:"💎"},
"塞尔维亚|Serbia|RS|Belgrade|Novi Sad|Niš": {area:"🇷🇸塞尔维亚",flag:"💎"},
"立陶宛|Lithuania|LT|Vilnius|Kaunas|Klaipėda":  {area:"🇱🇹立陶宛",flag:"💎"},
"危地马拉|Guatemala|GT|Guatemala City|Antigua Guatemala|Quetzaltenango":  {area:"🇬🇹危地马拉",flag:"💎"},
"乌克兰|Ukraine|UA|Kyiv|Lviv|Odesa": {area:"🇺🇦乌克兰",flag:"💎"},
"厄瓜多尔|Ecuador|EC|Quito|Guayaquil|Cuenca": {area:"🇪🇨厄瓜多尔",flag:"💎"},
"哥斯达黎加|Costa Rica|CR|San José|Alajuela|Cartago":  {area:"🇨🇷哥斯达黎加",flag:"💎"},
"塞浦路斯|Cyprus|CY|Nicosia|Limassol|Larnaca":  {area:"🇨🇾塞浦路斯",flag:"💎"},
"玻利维亚|Bolivia|BO|Sucre|La Paz|Santa Cruz": {area:"🇧🇴玻利维亚",flag:"💎"},
"乌拉圭|蒙得维的亚|UY|Uruguay|Montevideo": {area:"🇺🇾乌拉圭",flag:"💎"},
"委内瑞拉|加拉加斯|VE|Venezuela|Caracas": {area:"🇻🇪委内瑞拉",flag:"💎"},
"突尼斯|Tunisia|TN|Tunis": {area:"🇹🇳突尼斯",flag:"💎"},
"加纳|阿克拉|GH|Ghana|Accra": {area:"🇬🇭加纳",flag:"💎"},
"肯尼亚|内罗毕|KE|Kenya|Nairobi": {area:"🇰🇪肯尼亚",flag:"💎"},
"斯里兰卡|科伦坡|LK|Sri Lanka|Colombo": {area:"🇱🇰斯里兰卡",flag:"💎"},
"柬埔寨|金边|KH|Cambodia|Phnom Penh": {area:"🇰🇭柬埔寨",flag:"💎"},
"老挝|万象|LA|Laos|Vientiane": {area:"🇱🇦老挝",flag:"💎"},
"缅甸|内比都|仰光|MM|Myanmar|Burma|Naypyidaw|Yangon": {area:"🇲🇲缅甸",flag:"💎"},
"哈萨克斯坦|阿斯塔纳|阿拉木图|KZ|Kazakhstan|Astana|Almaty": {area:"🇰🇿哈萨克斯坦",flag:"💎"},
"乌兹别克斯坦|塔什干|UZ|Uzbekistan|Tashkent": {area:"🇺🇿乌兹别克斯坦",flag:"💎"},
"格鲁吉亚|第比利斯|GE|Georgia|Tbilisi": {area:"🇬🇪格鲁吉亚",flag:"💎"},
"保加利亚|索非亚|BG|Bulgaria|Sofia": {area:"🇧🇬保加利亚",flag:"💎"},
"斯洛伐克|布拉提斯拉瓦|SK|Slovakia|Bratislava": {area:"🇸🇰斯洛伐克",flag:"💎"},
"巴拿马|Panama|PA|Panama City": {area:"🇵🇦巴拿马",flag:"💎"},
"埃塞俄比亚|亚的斯亚贝巴|ET|Ethiopia|Addis Ababa": {area:"🇪🇹埃塞俄比亚",flag:"💎"}
};

const filterArea = "老挝|万象|LA|Laos|Vientiane|伊朗|委内瑞拉|加拉加斯|VE|Venezuela|Caracas|塞浦路斯|Cyprus|CY|Nicosia|Limassol|Larnaca|危地马拉|Guatemala|GT|Guatemala City|Antigua Guatemala|Quetzaltenango|孟加拉国|达卡|BD|Bangladesh|Dhaka";


// 过滤关键词，防止无效或广告节点
const filterKeywords = [
    "广告", "过期", "无效", "测试", "备用", "账号", "有效期",
    "到期", "刷新", "剩余", "会员", "流量", "超时",
    "佣金", "免翻", "下载", "更新", "点外", "重置",
    "Days", "Date", "Expire", "Premium", "建议",
    "套餐", "到期", "有效", "剩余", "版本", "已用", "过期", "失联",
    "测试", "备用", "TEST", "客服", "网站",
    "获取", "流量", "下次", "官址", "联系", "邮箱","127.0.0.1",
    "工单",  "USE", "USED", "TOTAL", "EXPIRE", "EMAIL"
];



// 检查是否包含过滤关键词
if (filterKeywords.some(kw => new RegExp(kw, 'i').test($server.title))) return false;

// 保留跳过的关键词部分
let  newTitle = $server.title;
if(new RegExp(filterArea, 'i').test(newTitle)){
    return false;
}
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
    newTitle = "🇺🇳自识别";
    flagIcon = "🏳️‍🌈";
}

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

$server.title = newTitle;
return true;
