(function($) {
	let titleCls = '.subject-item .info h2';/*豆列*///".title";
	let ratingCls = '.subject-item .star .rating_nums';//".rating .rating_nums";
	let rateNumsCls = '.subject-item .star span:nth-child(3)';//".rating span:nth-child(3)";
	let cls = [ titleCls, ratingCls, rateNumsCls ];
	
	let rateNumsThreshold = 200;

	let foundElements = $('.subject-list').find(cls.join());/*豆列 $(".bd.doulist-subject")*/
	let texts = foundElements.map(function(index, elem){
		if ($(elem).is('h2')) { // $(elem).hasClass('title')
			let subjectID = $(elem).children().attr("href").match(/\d+/gi)[0];
			return subjectID + ',' + this.innerText;
		}
		let isRateNums = (index + 1) % 3 === 0;
		if (isRateNums) {
			return +(this.innerText.match(/\d+/gi)) + '';
		} else {
			return this.innerText;
		}
	}).get();
	
	let highRated;
	var filtered = [];
	texts.forEach((content, index) => {
		let isRating = (index + 2) % 3 === 0;
		if (isRating && (+content >= 8)) {
			highRated = true;
		}
		
		let isRateNums = (index + 1) % 3 === 0;
		if (isRateNums) {
			if (+(content.match(/\d+/gi)) >= rateNumsThreshold) {
				if (highRated) {
					highRated = false;
					filtered.push([ texts[index - 2], ' ' + texts[index - 1], ' ' + texts[index] + '\n' ].join(','));
				}
			} else {
				highRated = false;
			}
		}
	});

	let text = filtered.join('');
	console.log(text);
	let subjectIDs = filtered.map(function(content, index) {
		return content.split(',')[0];
	});
	console.log(subjectIDs.join());
})($);



(function() {
	// Trigger WantToRead button
	$(".collect_btn.colbutt.ll").eq(0).click();
	// Submit
	setTimeout(() => {
		$("#submits input[type=submit]").click();
	}, 1500);
	window.close();
})($);



// POST wish
// https://book.douban.com/j/subject/26640091/interest
// Content-Type: application/x-www-form-urlencoded; charset=UTF-8
// Form Data
/* ck: hhjX
interest: wish
foldcollect: F
tags: 
comment: 
*/
//$.post( url [, data ] [, success ] [, dataType ] )

(function($) {
	let subjectIDs = [
	2033768,
	];
	let data = {
		ck: 'hhjX',
		interest: 'wish',
		foldcollect: 'F',
		tags: '',
		comment: ''
	};
	subjectIDs.forEach(function(subjectID) {
		setTimeout(() => { $.post('/j/subject/' + subjectID + '/interest', data); }, 1500);
	});
})($);

5913475,7067916,1253310,4189446,20271923,3026879,1492634,5913475,1253310,4189446,10354317,26698660,26957760,


25985021,人类简史 : 从动物到上帝, 9.1, 51697
1041482,万历十五年, 8.9, 69057
1873231,明朝那些事儿（壹） : 洪武大帝, 8.7, 89174
1003479,中国历代政治得失, 9.1, 24616
3674537,明朝那些事儿（1-9） : 限量版, 9.1, 41890
1077847,史记（全十册）, 9.5, 13102
26698660,巨人的陨落 : 世纪三部曲, 8.9, 38968
1046492,國史大綱（上下）, 9.3, 9986
1949338,明朝那些事儿（贰） : 万国来朝, 8.9, 44751
1059336,往事并不如烟, 8.6, 27076
3239549,夹边沟记事, 9.2, 16148
1813841,枪炮、病菌与钢铁 : 人类社会的命运, 8.8, 15715
2052448,明朝那些事儿（叁） : 妖孽宫廷, 8.9, 37173
2253642,明朝那些事儿（肆） : 粉饰太平, 8.8, 34047
1225977,全球通史（第7版 上册） : 从史前史到21世纪, 8.9, 12017
3626924,明朝那些事儿（柒）：大结局 : 大结局, 8.9, 25942
26704403,二手时间, 8.8, 7650
1675478,天朝的崩溃 : 鸦片战争再研究, 9.1, 6964
3009821,明朝那些事儿（伍） : 帝国飘摇, 8.8, 31007
1005492,光荣与梦想 : 1932-1972年美国社会实录, 8.9, 5661

3274113,明朝那些事儿（陆） : 日暮西山, 8.8, 26063
1083762,人类的群星闪耀时, 8.7, 13705
10471333,叫魂 : 1768年中国妖术大恐慌, 9.0, 9351
1032063,旧制度与大革命, 8.9, 6006
1062343,昨日的世界 : 一个欧洲人的回忆, 9.2, 6742
5366248,你一定爱读的极简欧洲史 : 为什么欧洲对现代文明的影响这么深, 8.3, 29695
1072295,資治通鑑（全二十冊）, 9.4, 3495
1015699,中国大历史, 8.3, 19456
2376486,中国近代史 : 1600-2000，中国的奋斗, 8.9, 5597
1424420,晚清七十年 （全五冊）, 8.8, 5165
1212199,一百个人的十年, 9.0, 4990
1027191,历史深处的忧虑 : 近距离看美国之一, 9.0, 29019
4010186,跌荡一百年（下） : 中国企业1870~1977, 8.6, 4179
1025723,潜规则 : 中国历史中的真实游戏, 8.3, 12903
3079029,大秦帝国, 8.7, 9599
20424526,邓小平时代, 9.0, 14168
1014763,三国志（全五册）, 9.3, 3711
25746578,大英博物馆世界简史（全3册）, 9.2, 2253
25902942,文明之光（第一册）, 9.0, 3073
20503529,古拉格：一部历史, 9.2, 1608


25883305,阿拉伯的劳伦斯 : 战争、谎言、帝国愚行与现代中东的形成, 9.1, 2024
1070711,城记, 8.8, 6727
1476218,中國近代史（下冊）, 9.4, 3628
26957760,世界的凛冬 : 世纪三部曲 2, 8.9, 12259
1076378,传统十论 : 本土社会的制度、文化与其变革, 9.1, 2174
20441569,被淹没和被拯救的, 9.2, 1977
10436418,战争与革命中的西南联大, 8.9, 2238
6892579,美国种族简史, 8.4, 7403
2032141,陈寅恪魏晋南北朝史讲演录, 9.0, 2780
25891318,1453 : 君士坦丁堡之战, 9.0, 3308
26816981,十二幅地图中的世界史, 8.5, 782
10758290,东晋门阀政治, 9.4, 1985
1006560,血酬定律 : 中国历史中的生存游戏, 8.2, 9466
1000280,袁氏当国, 8.5, 6268
2747765,中国古代文化常识, 9.0, 2451
1017795,隋唐制度渊源略论稿 唐代政治史述论稿, 9.6, 986
7055441,罗马人的故事1 : 罗马不是一天建成的, 8.9, 3998
1055304,中国历史地图集（全八册）, 9.6, 973
1060025,中国近代史, 8.8, 4610
1427825,中国人史纲（上中下）, 8.5, 6168


1315199,历史研究, 9.1, 1428
2245468,南京浩劫 : 被遗忘的大屠杀, 9.3, 1865
2317974,德川家康（第一部） : 乱世孤主, 8.5, 8190
25752592,从黎明到衰落（上下） : 西方文化生活五百年，1500年至今, 8.8, 730
2133254,流血的仕途 : 李斯与秦帝国, 8.1, 10268
2326273,欧洲中世纪史, 8.9, 2369
26451505,伯罗奔尼撒战争, 8.9, 881
3313327,跌荡一百年（上） : 中国企业1870~1977, 8.6, 3860
26296352,财富之城 : 威尼斯海洋霸权, 8.9, 1587
3228779,出埃及记, 8.7, 1810
1016864,士与中国文化, 8.9, 1427
26354440,野蛮大陆 : 第二次世界大战后的欧洲, 9.0, 1140
25777432,罗马人的故事（礼品装，全15册）, 9.1, 1253
1125731,第三帝国的兴亡（上中下） : 纳粹德国史, 8.8, 1777
25891321,海洋帝国 : 地中海大决战, 9.0, 1998
1012561,上下五千年, 8.6, 6598
5423803,剑桥倚天屠龙史 : The Cambridge History of Chinese Kongfu Circle during the Yuan Dynasty, 8.2, 6807
4086800,陈寅恪集 : 全14册, 9.6, 332
1010204,宽容, 8.5, 4121


1439441,伯罗奔尼撒战争史, 8.9, 1686
10472702,重说中国近代史, 8.2, 6357
1050929,隐蔽的秩序 : 拆解历史弈局, 8.6, 2476
3707886,中国通史, 8.9, 1980
3206270,拥抱战败 : 第二次世界大战后的日本, 8.9, 1346
1076685,李鸿章传, 8.9, 4154
10797092,蒋介石与现代中国, 8.6, 3158
26275177,文明之光 （第三册）, 8.9, 1592
1062991,北京法源寺, 8.4, 8338
21329239,巴黎烧了吗?, 8.8, 2114
1185908,东周列国志（上下）, 8.6, 4058
6533042,南明史 : 上下, 9.3, 1446
26747700,撒马尔罕的金桃 : 唐代舶来品研究, 9.0, 740
1907199,扫起落叶好过冬, 8.6, 6265
4229282,革命年代, 8.6, 2018
25953571,耳语者 : 斯大林时代苏联的私人生活, 8.8, 1000
25938605,天国之秋, 8.6, 2519
1008094,春秋左傳注（全四冊）, 9.4, 873
3733083,你往何处去, 8.8, 1433
26150549,人性中的善良天使 : 暴力为什么会减少, 8.6, 957


1107841,战国策, 9.1, 1403
2118743,银元时代生活史, 8.6, 2359
5906321,开放中的变迁 : 再论中国社会超稳定结构, 9.2, 752
1924213,逝去的武林 : 1934年的求武纪事, 8.3, 3280
1051231,黄河青山 : 黄仁宇回忆录, 8.4, 3122
1211052,罗马帝国衰亡史（上册） : D. M. 洛节编本, 8.6, 1362
1315844,古拉格群岛（上中下）, 9.2, 1467
4903692,东京梦华录, 9.1, 1179
25844017,讲谈社·中国的历史（十卷本）, 8.5, 913
1044499,菲利普二世时代的地中海和地中海世界（上下卷）, 9.2, 455
26276743,金雀花王朝 : 缔造英格兰的武士国王与王后们, 8.6, 1635
1029723,汉书（全十二册）, 9.3, 1094
26853835,丝绸之路 : 一部全新的世界史, 8.3, 3830
4243276,田园诗与狂想曲 : 关中模式与前近代社会的再认识, 9.3, 697
1065335,朱熹的历史世界(上下) : 宋代士大夫政治文化的研究, 9.1, 761
5299857,国家记忆 : 美国国家档案馆收藏中缅印战场影像, 9.0, 1008
1038279,15至18世纪的物质文明、经济和资本主义（全三卷）, 9.4, 229
1253538,剑桥中华民国史（上卷）, 8.7, 1261


26265745,清明上河图密码 : 隐藏在千古名画中的阴谋与杀局, 8.2, 9362
1039126,剑桥中国晚清史（上下卷） : 1800-1911年, 8.9, 1184
1055347,中国史纲, 9.1, 1393
11605940,倒转红轮 : 俄国知识分子的心路回溯, 8.5, 1021
1491537,近代中国社会的新陈代谢, 8.9, 1222
5372471,党员、党权与党争 : 1924—1949年中国国民党的组织形态, 9.1, 884
5399227,南渡北归（第一部） : 南渡, 8.0, 4301
1062455,康熙大帝（共四册）, 8.4, 5004
1161852,天意 : 星云特刊, 8.2, 8936
10796986,魏晋之际的政治权力与家族网络, 9.1, 599
2363834,春秋大义 : 中国传统语境下的皇权与学术, 8.8, 1303
25899496,1453：君士坦丁堡的陷落, 8.8, 1096
1465543,异端的权利 : 卡斯特里奥反对加尔文史实, 8.8, 1646
25750468,中国现代国家的起源, 8.7, 1660
1050175,赫逊河畔谈中国历史, 8.1, 5413
26298832,零年：1945 : 现代世界诞生的时刻, 8.7, 1203
26639302,世界的演变 : 19世纪史, 9.2, 253
1197950,希腊罗马名人传, 9.2, 455


26598484,历史学的境界, 8.7, 1207
1982427,大明王朝1566, 9.1, 2337
3824491,父亲的战场 : 中国远征军滇西抗战田野调查笔记, 8.9, 1336
1001356,世界文明史(全24册), 9.3, 332
3610090,第二次世界大战战史, 9.0, 831
25961497,中国古代物质文化, 8.9, 833
1400710,读史阅世六十年, 8.3, 1922
4827310,“中间地带”的革命 : 国际大背景下看中共成功之道, 8.8, 1051
1277267,国史新论, 8.6, 2145
7064370,罗马人的故事2 : 汉尼拔战记, 9.2, 2317
1010668,天安门 : 知识分子与中国革命, 8.3, 663
3317670,终朝采蓝 : 古名物寻微, 8.5, 974
1034470,柳如是别传（全三册）, 9.0, 1141
26603137,危机与重构 : 唐帝国及其地方诸侯, 9.2, 552
25986748,我的应许之地 : 以色列的荣耀与悲情, 8.2, 1958
10740958,剑桥中国史（全十册）, 8.9, 569
2713409,国民党的“联共”与“反共” : 中国国民党史, 8.8, 896
26782506,伊莎贝拉 : 武士女王, 8.8, 649
1057653,草原帝国, 8.7, 1503
2282097,像自由一样美丽 : 犹太人集中营遗存的儿童画作, 8.8, 5701


6313277,学术训练与学术规范 : 中国古代史研究入门, 8.9, 1029
1289849,喇嘛王国的覆灭, 8.7, 1012
5288371,蒋经国传, 8.4, 2253
1907655,东京梦华录笺注（上下） : 中国古代都城资料选刊丛书, 9.4, 342
26292964,世界小史, 8.6, 1668
27000152,海洋与文明, 8.7, 483
1012929,二十四史 : 简体横排本 全63册, 9.4, 283
1314467,读史方舆纪要 : 中国古代地理总志丛刊, 9.6, 265
5922204,曾国藩的正面与侧面, 8.3, 2971
4189598,战后欧洲史 : 套装上下册, 8.8, 428
26921196,北京的城墙与城门, 8.9, 342
1030526,中国文化史导论, 8.9, 1017
6980818,浩荡两千年 : 中国企业公元前7世纪——1869年, 8.6, 1998
1915375,西方的没落（全二卷） : 全译本, 8.7, 697
5988185,宅兹中国 : 重建有关“中国”的历史论述, 8.3, 1793
3391717,中国好人 : 刀尔登读史, 8.1, 3154
1002690,陈寅恪的最后20年, 8.7, 3344
1056883,读通鉴论（上中下册）, 9.3, 463
26827546,大历史 : 虚无与万物之间, 8.5, 364













