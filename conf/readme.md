
[General]
# 旁路系统。如果禁用此选项，可能会导致一些系统问题，如推送通知延迟。
bypass-system = true
skip-proxy = 192.168.0.0/16,10.0.0.0/8,172.16.0.0/12,fe80::/10,fc00::/7,localhost,*.local,*.lan,*.internal,*.abchina.com.cn,*.ccb.com,*.psbc.com,captive.apple.com,www.baidu.com
# TUN旁路路由。Shadowrocket TUN接口只能处理TCP协议。使用此选项可以绕过指定的IP范围，让其他协议通过。
tun-excluded-routes = 10.0.0.0/8, 100.64.0.0/10, 127.0.0.0/8, 169.254.0.0/16, 172.16.0.0/12, 192.0.0.0/24, 192.0.2.0/24, 192.88.99.0/24, 192.168.0.0/16, 198.51.100.0/24, 203.0.113.0/24, 224.0.0.0/4, 255.255.255.255/32, 239.255.255.250/32
# DNS覆写。使用普通DNS或加密DNS（如doh、doq、dot等）覆盖默认的系统DNS。有些dns over https支持http3，所以尝试查询，如果支持就切换到http3，可在doh链接后面加上#no-h3关闭。doh强制通过h3查询的写法是将“https”改成“h3”，如h3://dns.alidns.com/dns-query。
dns-server = https://doh.pub/dns-query,h3://dns.alidns.com/dns-query,quic://223.5.5.5,tls://223.5.5.5
# 备用DNS。当覆写DNS查询失败或查询时间超过2秒，Shadowrocket会自动回退备用DNS。如需指定多个DNS，可用逗号分隔。system表示回退到系统DNS。
fallback-dns-server = system
#All Hybrid 网络并发
all-hybrid = true
# 启用IPv6支持。false表示不启用，true表示启用。（注：即使不启用此选项，当本地网络环境支持IPv6，并且节点域名支持IPv6解析，Shadowrocket也会使用节点的IPv6地址进行访问。解决方法是关闭节点域名的IPv6解析，或者在配置文件的[Host]项目下为节点域名指定IP地址。）
ipv6 = false
prefer-ipv6 = false
dns-direct-system = false
icmp-auto-reply = true
# 不开启时，「重写的REJECT策略」默认只有在配置模式下生效。开启后，可以令该策略在其他全局路由模式下都生效。
always-reject-url-rewrite = false
# 私有IP应答。如果不启用此选项，域名解析返回私有IP，Shadowrocket会认为该域名被劫持而强制使用代理。
private-ip-answer = true
# 直连域名解析失败后使用代理。false表示不启用。
dns-direct-fallback-proxy = true
# TUN包含路由。默认情况下，Shadowrocket接口会声明自己为默认路由，但由于Wi-Fi接口的路由较小，有些流量可能不会通过Shadowrocket接口。使用此选项可以添加一个较小的路由表。
tun-included-routes = 
# 总是真实IP。此选项要求Shadowrocket在TUN处理DNS请求时返回一个真实的IP地址而不是假的IP地址。
always-real-ip = 
# DNS劫持。有些设备或软件总是使用硬编码的DNS服务器，例如Netflix通过Google DNS(8.8.8.8或8.8.4.4)发送请求，您可以使用此选项来劫持查询。
hijack-dns = 8.8.8.8:53,8.8.4.4:53
# 当UDP流量匹配到规则里不支持UDP转发的节点策略时重新选择回退行为，可选行为包括DIRECT、REJECT。DIRECT表示直连转发UDP流量，REJECT表示拒绝转发UDP流量。
udp-policy-not-supported-behaviour = DIRECT
# 包含配置。如“include=a.conf”表示当前配置包含另一个配置a.conf的内容，当前配置的优先级高于a.conf。此选项是对配置建立包含关系，以满足同时使用多个配置的需求。
include = 
# 此选项允许返回一个虚假的IP地址，如“stun-response-ip=1.1.1.1”、“stun-response-ipv6=::1”，目的是防止真实IP地址泄漏，提高WebRTC的隐私和安全性。
# stun-response-ip =
# stun-response-ipv6 =
# 网络兼容模式。当参数的值设定为3时的效果等同于：设置 - 代理 - 代理类型 - None。
# compatibility-mode =
# 强制所有域名使用本地DNS解析。设置为true表示启用。（此参数为隐藏属性，建议谨慎设置，可能导致相关域名的CDN失效。）
# always-ip-address =
[Proxy]
# 代理分组类型：
# select:手动切换节点。
# url-test:自动切换延迟最低节点。
# fallback:节点挂掉时自动切换其他可用节点。
# load-balance:不同规则的请求使用分组里的不同节点进行连接。
# random:随机使用分组里的不同节点进行连接。
# ----------
# policy-regex-filter表示正则式或关键词筛选，常用写法：
# 保留节点名称含有关键词A和B的节点:
# (?=.*(A))^(?=.*(B))^.*$
# 保留节点名称含有关键词A或B的节点:
# A|B
# 排除节点名称含有关键词A或B的节点:
# ^((?!(A|B)).)*$
# ----------
# 代理分组其他设置参数：
# interval:指定间隔多长时间后需要重新发起测试。
# timeout:如果测试在超时前未完成，放弃测试。
# tolerance:只有当新优胜者的分数高于旧优胜者的分数加上公差时，才会进行线路更换。
# url:指定要测试的URL。
# ----------
# 不含正则筛选的代理分组，示例：
# 名称=类型(如select,url-test,fallback,load-balance,random),策略(如direct,proxy,订阅名称,代理分组,节点),interval=测试周期,timeout=超时时间,tolerance=公差,policy-select-name=指定选择的节点备注名称,select=默认策略(0表示第一个策略,1表示第二个策略,2表示第三个策略……),url=测试地址
# 含正则筛选的代理分组，示例：
# 名称=类型(如select,url-test,fallback,load-balance,random),policy-regex-filter=正则式或关键词筛选,interval=测试周期,timeout=超时时间,tolerance=公差,policy-select-name=指定选择的节点备注名称,select=默认策略(0表示第一个策略,1表示第二个策略,2表示第三个策略……),url=测试地址
# 开启订阅筛选的代理分组，示例：
# 名称=类型(如select,url-test,fallback,load-balance,random),订阅名称(多个订阅时,用逗号分隔),use=true,policy-regex-filter=正则式或关键词筛选(省略该参数时,表示匹配对应订阅的全部节点),interval=测试周期,timeout=超时时间,tolerance=公差,policy-select-name=指定选择的节点备注名称,select=默认策略(0表示第一个策略,1表示第二个策略,2表示第三个策略……),url=测试地址
# ----------


# 规则类型：
# DOMAIN-SUFFIX：匹配请求域名的后缀。如“DOMAIN-SUFFIX,example.com,DIRECT”可以匹配到“a.example.com、a.b.example.com”。
# DOMAIN-KEYWORD：匹配请求域名的关键词。如“DOMAIN-KEYWORD,exa,DIRECT”可以匹配到“a.example.com、a.b.example.com”。
# DOMAIN：匹配请求的完整域名。如“DOMAIN,www.example.com,DIRECT”只能匹配到“www.example.com”。
# （当为DOMAIN、DOMAIN-SUFFIX和DOMAIN-KEYWORD类型分别设置相同的值时，只有其中一种类型会生效。）
# USER-AGENT：匹配用户代理字符串，支持使用通配符“*”。如“USER-AGENT,MicroMessenger*,DIRECT”可以匹配到“MicroMessenger Client”。
# URL-REGEX：匹配URL正则式。如“URL-REGEX,^https?://.+/item.+,REJECT”可以匹配到“https://www.example.com/item/abc/123”。
# IP-CIDR：匹配IPv4或IPv6地址。如“IP-CIDR,192.168.1.0/24,DIRECT”可以匹配到IP段“192.168.1.1～192.168.1.254”。当域名请求遇到IP类规则时，Shadowrocket会向本地DNS服务器发送查询请求，以判断主机IP是否匹配规则。若IP类规则加“no-resolve”(如：IP-CIDR,172.16.0.0/12,DIRECT,no-resolve)，则域名请求将会跳过此规则，不会触发本地DNS查询。
# IP-ASN：匹配IP地址隶属的ASN编号。如"IP-ASN,56040,DIRECT"可以匹配到属于China Mobile Communications Corporation网络的IP地址。
# RULE-SET：匹配规则集内容。规则集的内容需包含规则类型，如"Apple.list"。（兼容仅包含IP地址且不带规则类型的规则集）
# DOMAIN-SET：匹配域名集内容。域名集的内容不包含规则类型，如"Apple_Domain.list"。
# SCRIPT：匹配脚本名称。（创建rule类型脚本，再添加script类型的规则。）
# DST-PORT：匹配目标主机名的端口号。如“DST-PORT,443,DIRECT”可以匹配到443目标端口。
# GEOIP：匹配IP数据库。如“GEOIP,CN,DIRECT”可以匹配到归属地为CN的IP地址。
# FINAL：兜底策略。如“FINAL,PROXY”表示当其他所有规则都匹配不到时才使用FINAL规则的策略。
# AND：逻辑规则，与规则。如“AND,((DOMAIN,www.example.com),(DST-PORT,123)),DIRECT”可以匹配到“www.example.com:123”。
# NOT：逻辑规则，非规则。如“NOT,((DST-PORT,123)),DIRECT”可以匹配到除了“123”端口的其他所有请求。
# OR：逻辑规则，或规则。如“OR,((DST-PORT,123),(DST-PORT,456)),DIRECT”可以匹配到“123”或“456”端口的所有请求。
# ----------
# 规则策略：
# PROXY：代理。通过代理服务器转发流量。
# DIRECT：直连。连接不经过任何代理服务器。
# REJECT：拒绝。返回HTTP状态码404，没有内容。
# REJECT-DICT：拒绝。返回HTTP状态码200，内容为空的JSON对象。
# REJECT-ARRAY：拒绝。返回HTTP状态码200，内容为空的JSON数组。
# REJECT-200：拒绝。返回HTTP状态码200，没有内容。
# REJECT-IMG：拒绝。返回HTTP状态码200，内容为1像素GIF。
# REJECT-TINYGIF：拒绝。返回HTTP状态码200，内容为1像素GIF。
# REJECT-DROP：拒绝。丢弃IP包。
# REJECT-NO-DROP：拒绝。返回ICMP端口不可达。
# 除此之外，规则策略还可以选择「代理分组」、「订阅名称」、「分组」、「节点」。
# ----------