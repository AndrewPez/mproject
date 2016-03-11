var smbc = {};
smbc.data = (function(){
	var data = {};
	
	// 1:円預金金利
	data["1"] = {
		title : '<img src="/image_index/gadget/t_kinri_yen_01.gif" alt="円預金金利" width="292" height="32">',
		path : "/gadget/kinri_yen/my_teiki300.html",
		adjustHeight : -1,
		optCode : (function(){
			optCode  = '';
			optCode += '<ul>';
			optCode += '<li><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="https://direct.smbc.co.jp/aib/aibgsjsw5001.jsp?sc=030" target="_blank"><img src="/image_index/gadget/n_kinri_yen_01.gif" alt="円定期預金のお取引（SMBCダイレクト）" width="224" height="15"></a></li>';
			optCode += '<li class="tm5"><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="/kojin/yokin/super/index.html" target="_blank"><img src="/image_index/gadget/n_kinri_yen_02.gif" alt="定期預金についてくわしくはこちら" width="196" height="15"></a></li>';
			optCode += '<li class="tm5"><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="/kojin/kinri/yokin.html" target="_blank"><img src="/image_index/gadget/n_kinri_yen_03.gif" alt="円預金金利一覧はこちら" width="141" height="15"></a></li>';
			optCode += '</ul>';
			return optCode;
		})()
	};
	
	// 2:外貨預金金利
	data["2"] = {
		title : '<img src="/image_index/gadget/t_kinri_gaika_01.gif" alt="外貨預金金利" width="292" height="32">',
		path : "/gadget/kinri_gaika/my_gteiki.html",
		adjustHeight : -1,
		optCode : (function(){
			optCode  = '';
			optCode += '<ul>';
			optCode += '<li><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="https://direct.smbc.co.jp/aib/aibgsjsw5001.jsp?sc=040" target="_blank"><img src="/image_index/gadget/n_kinri_gaika_01.gif" alt="外貨預金のお取引（SMBCダイレクト）" width="219" height="15"></a></li>';
			optCode += '<li class="tm5"><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="/kojin/gaika/index.html" target="_blank"><img src="/image_index/gadget/n_kinri_gaika_02.gif" alt="外貨預金についてくわしくはこちら" width="197" height="15"></a></li>';
			optCode += '</ul>';
			return optCode;
		})()
	};
	
	// 3:住宅ローン金利（新規）
	data["3"] = {
		title : '<img src="/image_index/gadget/t_loan_shinki_01.gif" alt="住宅ローン金利（新規）" width="292" height="32">',
		path : "/gadget/loan_shinki/",
		adjustHeight : -1,
		optCode : (function(){
			optCode  = '';
			optCode += '<ul>';
			optCode += '<li><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="https://www.smbc.co.jp/nm/servlet/nhl.NhlServlet" target="_blank"><img src="/image_index/gadget/n_loan_shinki_01.gif" alt="住宅ローン「かんたん審査」はこちら" width="197" height="15"></a></li>';
			optCode += '<li class="tm5"><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="/kojin/jutaku_loan/shinki/kinri/index.html" target="_blank"><img src="/image_index/gadget/n_loan_shinki_02.gif" alt="各金利プランについてくわしくはこちら" width="230" height="15"></a></li>';
			optCode += '</ul>';
			return optCode;
		})()
	};
	
	// 4:住宅ローン金利（お借り換え）
	data["4"] = {
		title : '<img src="/image_index/gadget/t_loan_karikae_01.gif" alt="住宅ローン金利（お借り換え）" width="292" height="32">',
		path : "/gadget/loan_karikae/",
		adjustHeight : -1,
		optCode : (function(){
			optCode  = '';
			optCode += '<ul>';
			optCode += '<li><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="https://www.smbc.co.jp/nm/servlet/nhl.NhlServlet" target="_blank"><img src="/image_index/gadget/n_loan_karikae_01.gif" alt="住宅ローン「かんたん審査」はこちら" width="197" height="15"></a></li>';
			optCode += '<li class="tm5"><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="/kojin/jutaku_loan/karikae/kinri/index.html" target="_blank"><img src="/image_index/gadget/n_loan_karikae_02.gif" alt="各金利プランについてくわしくはこちら" width="230" height="15"></a></li>';
			optCode += '</ul>';
			return optCode;
		})()
	};
	
	// 5:リアルタイム為替チャート
	data["5"] = {
		title : '<img src="/image_index/gadget/t_realtime_rate_01.gif" alt="リアルタイム為替レート" width="292" height="32">',
		path : "/gadget/realtime_rate/my_realtime.html",
		adjustHeight : -1,
		optCode : (function(){
			optCode  = '';
			optCode += '<ul>';
			optCode += '<li><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="https://direct.smbc.co.jp/aib/aibgsjsw5001.jsp?sc=050" target="_blank"><img src="/image_index/gadget/n_realtime_rate_01.gif" alt="投資信託のお取引（SMBCダイレクト）" width="215" height="15"></a></li>';
			optCode += '<li class="tm5"><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="https://direct.smbc.co.jp/aib/aibgsjsw5001.jsp?sc=040" target="_blank"><img src="/image_index/gadget/n_realtime_rate_02.gif" alt="外貨預金のお取引（SMBCダイレクト）" width="212" height="15"></a></li>';
			optCode += '<li class="tm5"><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="/kojin/toushin/" target="_blank"><img src="/image_index/gadget/n_realtime_rate_03.gif" alt="投資信託についてくわしくはこちら" width="193" height="15"></a></li>';
			optCode += '<li class="tm5"><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="/kojin/gaika/" target="_blank"><img src="/image_index/gadget/n_realtime_rate_04.gif" alt="外貨預金についてくわしくはこちら" width="197" height="15"></a></li>';
			optCode += '</ul>';
			return optCode;
		})()
	};
	
	// 6:主要株価指数
	data["6"] = {
		title : '<img src="/image_index/gadget/t_stock_index_01.gif" alt="主要株価指数" width="292" height="32">',
		path : "http://fund.smbc.co.jp/smbc/qsearch.exe?F=gadget/gmarket",
		adjustHeight : -1,
		optCode : (function(){
			optCode  = '';
			optCode += '<ul>';
			optCode += '<li><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="https://direct.smbc.co.jp/aib/aibgsjsw5001.jsp?sc=050" target="_blank"><img src="/image_index/gadget/n_stock_index_01.gif" alt="投資信託のお取引（SMBCダイレクト）" width="215" height="15"></a></li>';
			optCode += '<li class="tm5"><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="/kojin/toushin/" target="_blank"><img src="/image_index/gadget/n_stock_index_02.gif" alt="投資信託についてくわしくはこちら" width="193" height="15"></a></li>';
			optCode += '</ul>';
			return optCode;
		})()
	};
	
	// 7:ファンド月刊販売額ランキング
	data["7"] = {
		title : '<img src="/image_index/gadget/t_ranking_sales_01.gif" alt="ファンド月間販売額ランキング" width="292" height="32">',
		path : "http://fund.smbc.co.jp/smbc/rank.asp?F=gadget1m",
		adjustHeight : -1,
		optCode : (function(){
			optCode  = '';
			optCode += '<ul>';
			optCode += '<li><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="https://direct.smbc.co.jp/aib/aibgsjsw5001.jsp?sc=050" target="_blank"><img src="/image_index/gadget/n_ranking_sales_01.gif" alt="投資信託のお取引（SMBCダイレクト）" width="215" height="15"></a></li>';
			optCode += '<li class="tm5"><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="/kojin/toushin/" target="_blank"><img src="/image_index/gadget/n_ranking_sales_02.gif" alt="投資信託についてくわしくはこちら" width="193" height="15"></a></li>';
			optCode += '<li><img src="/image_index/gadget/n_ranking_sales_03.gif" alt="ランキング情報は、三井住友銀行の国内投資信託を対象としています。（ただし、MMF等の一部の投資信託は対象外です。）" width="244" height="38"></li>';
			optCode += '</ul>';
			return optCode;
		})()
	};
	
	// 8:ファンド月間騰落率ランキング
	data["8"] = {
		title : '<img src="/image_index/gadget/t_ranking_updown_01.gif" alt="ファンド月間騰落率ランキング" width="292" height="32">',
		path : "http://fund.smbc.co.jp/smbc/qsearch.exe?F=gadget/greturn1m",
		adjustHeight : -1,
		optCode : (function(){
			optCode  = '';
			optCode += '<ul>';
			optCode += '<li><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="https://direct.smbc.co.jp/aib/aibgsjsw5001.jsp?sc=050" target="_blank"><img src="/image_index/gadget/n_ranking_updown_01.gif" alt="投資信託のお取引（SMBCダイレクト）" width="215" height="15"></a></li>';
			optCode += '<li class="tm5"><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="/kojin/toushin/" target="_blank"><img src="/image_index/gadget/n_ranking_updown_02.gif" alt="投資信託についてくわしくはこちら" width="193" height="15"></a></li>';
			optCode += '<li><img src="/image_index/gadget/n_ranking_updown_03.gif" alt="ランキング情報は、三井住友銀行の国内投資信託を対象としています。（ただし、MMF等の一部の投資信託は対象外です。）" width="244" height="38"></li>';
			optCode += '</ul>';
			return optCode;
		})()
	};
	
	// 9:ファンド総資産額ランキング
	data["9"] = {
		title : '<img src="/image_index/gadget/t_ranking_asset_01.gif" alt="ファンド純資産総額ランキング" width="292" height="32">',
		path : "http://fund.smbc.co.jp/smbc/qsearch.exe?F=gadget/gtav",
		adjustHeight : -1,
		optCode : (function(){
			optCode  = '';
			optCode += '<ul>';
			optCode += '<li><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="https://direct.smbc.co.jp/aib/aibgsjsw5001.jsp?sc=050" target="_blank"><img src="/image_index/gadget/n_ranking_asset_01.gif" alt="投資信託のお取引（SMBCダイレクト）" width="215" height="15"></a></li>';
			optCode += '<li class="tm5"><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="/kojin/toushin/" target="_blank"><img src="/image_index/gadget/n_ranking_asset_02.gif" alt="投資信託についてくわしくはこちら" width="193" height="15"></a></li>';
			optCode += '<li><img src="/image_index/gadget/n_ranking_asset_03.gif" alt="ランキング情報は、三井住友銀行の国内投資信託を対象としています。（ただし、MMF等の一部の投資信託は対象外です。）" width="244" height="38"></li>';
			optCode += '</ul>';
			return optCode;
		})()
	};
	
	// 10:三井住友銀行 新着情報
	data["10"] = {
		title : '<img src="/image_index/gadget/t_smbc_news_01.gif" alt="三井住友銀行 新着情報" width="292" height="32">',
		path : "/kojin/mymenu/gadget/smbc_news/",
		adjustHeight : 300,
		optCode : (function(){
			optCode  = '';
			return optCode;
		})()
	};
	
	// 11:個人向け商品・サービス情報
	data["11"] = {
		title : '<img src="/image_index/gadget/t_info_services_01.gif" alt="個人向け商品・サービス情報" width="292" height="32">',
		path : "/kojin/mymenu/gadget/info_services/",
		adjustHeight : 300,
		optCode : (function(){
			optCode  = '';
			return optCode;
		})()
	};
	
	// 12:金融マーケット・経済全般のニュース
	data["12"] = {
		title : '<img src="/image_index/gadget/t_economy_news_01.gif" alt="金融・マーケット・経済全般のニュース" width="292" height="32">',
		path : "/kojin/mymenu/gadget/economy_news/",
		adjustHeight : -1,
		optCode : (function(){
			optCode  = '';
			return optCode;
		})()
	};

	// 13:SMBC toto キャリーオーバー情報
	data["13"] = {
		title : '<img src="/image_index/gadget/t_smbc_toto_01.gif" alt="SMBC toto キャリーオーバー情報" width="292" height="32">',
		path : "/gadget/toto/my_toto.html",
		adjustHeight : -1,
		optCode : (function(){
			optCode  = '';
			optCode += '<ul>';
			optCode += '<li><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="https://direct.smbc.co.jp/aib/aibgsjsw5001.jsp?sc=680" target="_blank"><img src="/image_index/gadget/n_smbc_toto_01.gif" alt="SMBC toto のお取引（SMBCダイレクト）" width="234" height="15"></a></li>';
			optCode += '<li><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="/toto/servlet/toto.WTOBPServlet" target="_blank"><img src="/image_index/gadget/n_smbc_toto_02.gif" alt="SMBC toto についてくわしくはこちら" width="213" height="15"></a></li>';
			optCode += '</ul>';
			return optCode;
		})()
	};
			
	// 14:おすすめ・キャンペーン情報
	data["14"] = {
		title : '<img src="/image_index/gadget/t_info_campaign_01.gif" alt="おすすめ・キャンペーン情報" width="292" height="32">',
		path : "/kojin/mymenu/gadget/info_campaign/",
		adjustHeight : 300,
		optCode : (function(){
			optCode  = '';
			optCode += '<ul>';
			optCode += '<li><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="/kojin/campaign/" target="_blank"><img src="/image_index/gadget/n_info_campaign_01.gif" alt="おすすめ・キャンペーン情報一覧へ" width="190" height="15"></a></li>';
			optCode += '</ul>';
			return optCode;
		})()
	};
	
	// 15:お気に入りファンド基準価額
	data["15"] = {
		title : '<img src="/image_index/gadget/t_favorite_fund_01.gif" alt="お気に入りファンド基準価額" width="292" height="32">',
		path : "http://fund.smbc.co.jp/smbc/myfund.asp?type=gadget",
		adjustHeight : -1,
		optCode : (function(){
			optCode  = '';
			optCode += '<ul>';
			optCode += '<li><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="https://direct.smbc.co.jp/aib/aibgsjsw5001.jsp?sc=050" target="_blank"><img src="/image_index/gadget/n_favorite_fund_01.gif" alt="投資信託のお取引（SMBCダイレクト）" width="214" height="15"></a></li>';
			optCode += '<li class="tm5"><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="/kojin/toushin/" target="_blank"><img src="/image_index/gadget/n_favorite_fund_02.gif" alt="投資信託についてくわしくはこちら" width="193" height="15"></a></li>';
			optCode += '<li class="tm5"><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="http://fund.smbc.co.jp/smbc/qsearch.exe?F=open_list1&ltype=open" target="_blank"><img src="/image_index/gadget/n_favorite_fund_03.gif" alt="登録ファンドの追加" width="109" height="15"></a></li>';
			optCode += '<li class="tm5"><img src="/image_uniq/p_icon_newwin.gif" alt="新しいウィンドウを開きます" width="9" height="9" class="vm"><a href="http://fund.smbc.co.jp/smbc/myfund.asp?gadget=yes" target="_blank"><img src="/image_index/gadget/n_favorite_fund_04.gif" alt="登録ファンドの削除" width="109" height="15"></a></li>';
			optCode += '</ul>';
			return optCode;
		})()
	};
		
	return data;
})();