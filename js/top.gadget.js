//var $jq = null;
//if(!navigator.appVersion.match(/MSIE [3-5]/)) { $jq = jQuery.noConflict(true); }
if(!smbc) { var smbc = {}; }

$(function(){
	var cookieName = "gadget";
	
	var miniCls = "minimize";
	var selectedCls = "selected";
	var columnCls = "gadget_col";
	
	/* ----------------------------------------
	 * Resize Iframe
	 ---------------------------------------- */
	smbc.gadgetHeight = function(id, height){
		if(!id){ return; }
		var targetGadget = document.getElementById(id);
		var iframe = targetGadget.getElementsByTagName("iframe")[0];
		var _h = Number(height) + 20;
		var adjustHeight = smbc.data[id.replace(/^gID_/, "")].adjustHeight;
		if(adjustHeight != -1){
			_h = adjustHeight;
		}
		iframe.style.height = _h + "px";
		
		smbc.gFrameCnt++;
		if(smbc.gFrameCnt == smbc.gFrameNum){
			smbc.hideLoading();
		}
	};
	
	/* ----------------------------------------
	 * Utilities
	 ---------------------------------------- */
	smbc.each = function(iterator, func){
		var n = iterator.length;
		for (var i = 0; i < n; i++) {
			func.apply(iterator[i], [i, iterator[i]]);
		}
	};
	/* serachClassName */
	smbc.getElementsByTagClassName = function(context, tagN, clsN){
		var tmp = [];
		var tag = context.getElementsByTagName(tagN);
		smbc.each(tag, function(idx1, elm1){
			var clsAry = elm1.className.split(" ");
			smbc.each(clsAry, function(idx2, elm2){
				if (clsN == elm2) { tmp.push(elm1); }
			});
		});
		return tmp;
	};
	/* Class */
	smbc.addClass = function(elm, clsN){
		var clsAry;
		if(elm.className || elm.className != ""){
			clsAry = elm.className.split(" ");
		} else {
			clsAry = [];
		}
		// check duplication
		var flg = false;
		smbc.each(clsAry, function(index, value){
			if(value == clsN) {
				flg = true;
			}
		});
		if(!flg){
			clsAry.push(clsN);
		}
		elm.className = clsAry.join(" "); 
	};
	smbc.removeClass = function(elm, clsN){
		var clsAry = elm.className.split(" ");
		smbc.each(clsAry, function(index, value){
			if(value == clsN){
				clsAry.splice(index,1);
			}
		});
		elm.className = clsAry.join(" "); 
	};
	smbc.hasClass = function(elm, clsN){
		var flg = false;
		var clsAry = elm.className.split(" ");
		smbc.each(clsAry, function(index, value){
			if(value == clsN){
				flg = true;
				return;
			}
		});
		return flg;
	};
	/* Event */
	smbc.addEventListener = function(elm, type, func) {
	    if(elm.attachEvent) {
	        elm.attachEvent("on" + type, func);
	    } else {
	        elm.addEventListener(type, func, true);
	    }
	}
	smbc.removeEventListener = function(elm, type, func){
		if(elm.attachEvent){
			elm.detachEvent("on" + type, func);
		}else{
			elm.removeEventListener(type, func, true);
		}
	};
	smbc.target = function(evt) {
		if(evt && evt.target) {
			if(evt.target.nodeType == 3) {
				return evt.target.parentNode;
			} else {
				return evt.target;
			}
		} else if (window.event && window.event.srcElement) {
			return window.event.srcElement;
		} else {
			return null;
		}
	};
	smbc.preventDefault = function(evt) {
		if(evt && evt.preventDefault) {
			evt.preventDefault();
			evt.currentTarget['on'+evt.type] = function() { return false; };
		} else if(window.event) {
			window.event.returnValue = false;
		}
	};
	smbc.stopPropagation = function(evt) {
		if(evt && evt.stopPropagation) {
			evt.stopPropagation();
		} else if(window.event) {
			window.event.cancelBubble = true;
		}
	};
	
	/* Cookie */
	smbc.getCookie = function(name) {
		if (!name || !document.cookie) { return; }
		var cookies = document.cookie.split("; ");
		for(var i=0; i<cookies.length; i++) {
			var str = cookies[i].split("=");
			if(str[0] != name) {
				continue;
			}
			return unescape(str[1]);
		}
		return;
	};
	smbc.setCookie = function(name, value, domain, path, expires, secure) {
		if (!name) { return; }
	
		var str = name + "=" + escape(value);
		if(domain) {
			if(domain == 1) {
				domain = location.hostname.replace(/^[^\.]*/, "");
				str += "; domain=" + domain;
			}
		}
		path = "index.html";
		str += "; path=" + path;
	
		if(expires) {
			var nowtime = new Date().getTime();
			expires = new Date(nowtime + (60 * 60 * 24 * 1000 * expires));
			expires = expires.toGMTString();
			str += "; expires=" + expires;
		}
		if(secure && location.protocol == "index.html") {
			str += "; secure";
		}
		document.cookie = str;
	};


	/* ----------------------------------------
	 * Region
	 ---------------------------------------- */
	/* Constructor */
	smbc.gadgetRegion = function(elm){
		this.self = elm;
		if($){ this.$self = $(elm); }
		this.gadgetsColArray = smbc.getElementsByTagClassName(elm, "div", columnCls);
	};
	/* Register Method */
	smbc.gadgetRegion.prototype.registGadgets = function(ary){
		this.gadgetsArray = ary;
	};
	smbc.gadgetRegion.prototype.getOffset = function(){
		return this.$self.offset();
	};
	smbc.gadgetRegion.prototype.savePosition = function(){
		var configArray = [];
		smbc.each(this.gadgetsColArray, function(index, item){
			var colChar;
			switch(item.id){
				case "gadget_col_l": colChar = "L"; break;
				case "gadget_col_c": colChar = "C"; break;
				case "gadget_col_r": colChar = "R"; break;
			}
			var gadgetArray = smbc.getElementsByTagClassName(item, "div", "gadget");
			smbc.each(gadgetArray, function(index2, item2){
				var str = colChar;
				if(smbc.hasClass(item2, miniCls)){
					str = str + "M";
				}
				str = str + item2.id.replace(/^gID_/, "");
				configArray.push(str);
			});
		});
		setSelectedBtn(configArray);
		smbc.setCookie(cookieName, configArray.join(""), "", "", 365);
	}
	smbc.gadgetRegion.prototype.setShimPos = function(){
		var _this = this;
		_this.height = _this.$self.height();
		var regionOffset = this.getOffset();
		
		_this.shimGadgetPos = [];
		_this.$self.find("div.gadget").each(function(index, item){
			var $item = $(item);
			var coordPos = {};
			coordPos.id = item.id;
			coordPos.x = $item.offset().left - regionOffset.left;
			coordPos.y = $item.offset().top - regionOffset.top;
			_this.shimGadgetPos.push(coordPos);
		});
		
		_this.shimColPos = [];
		_this.$self.find("div." + columnCls).each(function(index, item){
			var $item = $(item);
			var $lastChild = $item.children().last();
			var coordPos = {};
			coordPos.id = item.id;
			if($lastChild.length > 0) {
				coordPos.x = $lastChild.offset().left - regionOffset.left;
				coordPos.y = $lastChild.offset().top + $lastChild.outerHeight(true) - regionOffset.top;
			} else {
				coordPos.x = $item.offset().left - regionOffset.left;
				coordPos.y = $item.offset().top - regionOffset.top;
			}
			_this.shimColPos.push(coordPos);
		});
	};
	smbc.gadgetRegion.prototype.checkShimPos = function(target, func){
		var shimPos;
		for (var i = 0; i < this.shimGadgetPos.length; i++) {
			shimPos = this.shimGadgetPos[i]
			if(Math.abs(target.moveX - shimPos.x) < 150 && (shimPos.y - target.height/2) < target.moveY && (shimPos.y + target.height/2) > target.moveY){
				func(shimPos.id, "gadget");
				return;
			}
		}
		for (var i = 0; i < this.shimColPos.length; i++) {
			shimPos = this.shimColPos[i]
			if(Math.abs(target.moveX - shimPos.x) < 150 && (shimPos.y - target.height/2) < target.moveY && (shimPos.y + this.height + target.height/2) > target.moveY){
				func(shimPos.id, columnCls);
				return;
			}
		}
	};
	
	/* ----------------------------------------
	 * Gadgets
	 ---------------------------------------- */
	/* Constructor */
	smbc.gadget = function(elm){
		this.dragging = false;
		this.self = elm;
		if($){ this.$self = $(elm); } 
		
		this.dragHead = smbc.getElementsByTagClassName(elm, "div", "gadget_head")[0];
		this.btnMini = smbc.getElementsByTagClassName(elm, "div", "gadget_btn_mini")[0];
		this.btnRemove = smbc.getElementsByTagClassName(elm, "div", "gadget_btn_remove")[0];
		
		// append drag control
		this.controller = document.createElement("div");
		this.controller.className = "gadget_control";
		this.dragHead.appendChild(this.controller);
		
		this.setEvents();
	};
	
	/* Init Events Setting */
	smbc.gadget.prototype.setEvents = function(){
		var _this = this;
		this.btnMini.onclick = function(e){ _this.toggleMini(); smbc.stopPropagation(e); }; 
		this.btnRemove.onclick = function(e){ _this.remove(); smbc.stopPropagation(e); };
		
		this.btnMini.onmousedown = function(e){ smbc.stopPropagation(e); };
		this.btnRemove.onmousedown = function(e){ smbc.stopPropagation(e); };
		this.btnMini.getElementsByTagName("a")[0].onclick = function(e){ this.blur(); smbc.preventDefault(e); };
		this.btnRemove.getElementsByTagName("a")[0].onclick = function(e){ this.blur(); smbc.preventDefault(e); };
		
		if($){
			var $body = $(document.body);
			$(this.dragHead).bind("mousedown", dragDown);
		}
		function dragDown(e){
			if(!_this.dragging){
				_this.moveDown(e);
				$body.bind("mouseup", dragUp).bind("mousemove", dragMove);
			}
			e.preventDefault();
		}
		function dragUp(e){
			_this.moveUp(e);
			$body.unbind("mouseup", dragUp).unbind("mousemove", dragMove);
			e.preventDefault();
		}
		function dragMove(e){
			_this.move(e);
			e.preventDefault();
		}
	};
	/* Register Method */
	smbc.gadget.prototype.registGadgets = function(ary){
		this.gadgetsArray = ary;
	};
	smbc.gadget.prototype.registRegion = function(regionInstance){
		this.gadgetsRegion = regionInstance;
	};
	
	/* Set/Reset Control Layer Method */
	smbc.gadget.prototype.setLayer = function(){
		this.height = this.$self.height();
		this.controller.style.height = this.height + "px";
		this.controller.style.display = "block";
	};
	smbc.gadget.prototype.resetLayer = function(){
		this.controller.style.display = "none";
		this.controller.style.height = "0px";
	};
	
	/* Toggle Gadget Minimization Method */
	smbc.gadget.prototype.toggleMini = function(e){
		if(smbc.hasClass(this.self, miniCls)){
			smbc.removeClass(this.self, miniCls);
		} else {
			smbc.addClass(this.self, miniCls);
		}
		
		var gadget_iframe = smbc.getElementsByTagClassName(this.self, "div", "gadget_iframe")[0];
		var iframe = gadget_iframe.getElementsByTagName("iframe")[0];
		if (!iframe) {
			// Load Frame
			var gadgetID = this.self.id.replace(/^gID_/, "");
			var data = smbc.data[gadgetID];
			if(data.path.lastIndexOf("?") != -1){
				data.path = data.path + "&";
			} else {
				data.path = data.path + "?";
			}
			gadget_iframe.innerHTML = '<iframe src="' + data.path + 'cacheb=' + Math.random() + '#gID_' + gadgetID + '" frameborder="0"></iframe>';
		}
		
		// Redraw
		setTimeout(function(){
			gadget_iframe.parentNode.style.display = "none";
			gadget_iframe.parentNode.style.display = "block";
		}, 10);
		this.gadgetsRegion.savePosition();
		smbc.stopPropagation(e);
	};
	
	/* Remove Gadget Method */
	smbc.gadget.prototype.remove = function(e){
		this.self.parentNode.removeChild(this.self);
		var gLength = smbc.getElementsByTagClassName(this.gadgetsRegion.self, "div", "gadget").length;
		if (gLength == 0) {
			smbc.gadget_region.innerHTML = "";
			smbc.removeClass(smbc.gadget_cont, "gStatus_region");
		}
		this.gadgetsRegion.savePosition();
		smbc.stopPropagation(e);
	};
	
	/* Drag Method */
	smbc.gadget.prototype.moveDown = function(e){
		$("object,embed").css({ visibility : "hidden"});
		this.dragging = true;
		
		var offset = this.$self.offset();
		var regionOffset = this.regionOffset = this.gadgetsRegion.getOffset();
		this.iniX = e.pageX;
		this.iniY = e.pageY;
		this.posX = offset.left - regionOffset.left;
		this.posY = offset.top - regionOffset.top;
		this.self.style.left = this.posX + "px";
		this.self.style.top = this.posY + "px";
		this.$self.addClass("draggable");
		
		this.gadgetsRegion.setShimPos();
		this.height = this.$self.height();
		this.$shim = $("<div id='gadget-shim'><div></div></div>").height(this.height);
		this.shim = this.$shim.get(0); 
		this.$self.before(this.$shim);
		
		smbc.each(this.gadgetsArray, function(index, value){
			this.setLayer();
		});
	};
	smbc.gadget.prototype.moveUp = function(e){
		var _this = this;
		smbc.each(_this.gadgetsArray, function(index, value){
			this.resetLayer();
		});
		
		var offset = this.$shim.offset();
		var regionOffset = this.regionOffset;
		
		_this.$self.animate({ left : offset.left - regionOffset.left, top : offset.top - regionOffset.top }, 100, function(){
			_this.$self.removeClass("draggable");
			_this.self.removeAttribute("style");
			
			_this.shim.parentNode.insertBefore(_this.self, _this.shim);
			_this.shim.parentNode.removeChild(_this.shim);
			
			// Redraw
			var iframe = _this.self.getElementsByTagName("iframe")[0];
			if(iframe){
				iframe.style.display = "none";
				iframe.style.display = "block";
			}
			
			_this.gadgetsRegion.savePosition();
			
			_this.dragging = false;
			$("object,embed").css({ visibility : "visible"});
		});
	};
	smbc.gadget.prototype.move = function(e){
		var _this = this;
		var moveX = this.posX + (e.pageX - this.iniX);
		var moveY = this.posY + (e.pageY - this.iniY);

		moveX = 0 > moveX ? 0 : moveX;
		moveX = (950 - 300) < moveX ? (950 - 300) : moveX;  
		moveY = 0 > moveY ? 0 : moveY;
		
		this.moveX = moveX;
		this.moveY = moveY;
		
		this.gadgetsRegion.checkShimPos(_this, function(_id, type){
			var target = document.getElementById(_id);
			if(type == "gadget"){
				target.parentNode.insertBefore(_this.shim, target);
			} else {
				target.appendChild(_this.shim);
			}
		});
		this.self.style.left = moveX + "px";
		this.self.style.top = moveY + "px";
	};
	
	

	/* ----------------------------------------
	 * Init & Other
	 ---------------------------------------- */
	smbc.gadget_cont = document.getElementById("gadget_cont");
	smbc.gadget_region = document.getElementById("gadget_region");
	smbc.configLabels = document.getElementById("gadget_conLabels").getElementsByTagName("a");
	
	// Month
	var month = String(new Date().getMonth()+1);
	smbc.addClass(smbc.gadget_cont, "gMonth_" + month);
	
	
	/* Open Config Display */
	smbc.addEventListener(document.getElementById("gadget_headBtn"), "click", function(e){
		if(smbc.hasClass(smbc.gadget_cont, "gStatus_config")){
			cancelConfig();
		} else {
			showConfig();
		}
	});
	
	/* Set ConfigEvents */
	smbc.each(smbc.configLabels, function(index, item){
		var btn = this;
		smbc.addEventListener(btn, "click", function(e){
			if(smbc.hasClass(btn, selectedCls)){
				smbc.removeClass(btn, selectedCls);
			} else {
				smbc.addClass(btn, selectedCls);
			}
			smbc.target(e).parentNode.blur();
			smbc.preventDefault(e);
		});
	});
	smbc.addEventListener(document.getElementById("gadget_btnCancel"), "click", function(e){
		cancelConfig();
		smbc.target(e).parentNode.blur();
		smbc.preventDefault(e);
	});
	smbc.addEventListener(document.getElementById("gadget_btnSubmit"), "click", function(e){
		submitConfig();
		smbc.target(e).parentNode.blur();
		smbc.preventDefault(e);
	});
	
	smbc.showLoading = function(array){
		smbc.gFrameCnt = 0;
		smbc.gFrameNum = (function(){
			var count = 0;
			smbc.each(array, function(index, value){
				if(value.search(/^(L|C|R)M/) == -1){
					var gadgetID = value.match(/\d{1,2}$/)[0];
					var data = smbc.data[gadgetID];
					if(data){ count++; }
					
				}
			})
			return count;
		})();
		
		if(smbc.gFrameNum == 0){
			return;
		}
		smbc.addClass(smbc.gadget_cont, "gStatus_loading");
		smbc.gadget_loading = document.createElement("div");
		smbc.gadget_loading.id = "gadget_loading";
		smbc.gadget_loading.innerHTML = "<div></div>"
		smbc.gadget_region.appendChild(smbc.gadget_loading);
	};
	smbc.hideLoading = function(){
		smbc.gadget_region.removeChild(smbc.gadget_loading);
		smbc.removeClass(smbc.gadget_cont, "gStatus_loading");
		
		// Redraw
		setTimeout(function(){
			smbc.gadget_cont.style.display = "none";
			smbc.gadget_cont.style.display = "block";
		}, 10);
	};
	
	function showConfig(){
		smbc.addClass(smbc.gadget_cont, "gStatus_config");
	}
	function cancelConfig(){
		smbc.removeClass(smbc.gadget_cont, "gStatus_config");
	}
	function submitConfig(){
		var configArray = [];
		var count = 0;
		smbc.each(smbc.configLabels, function(index, item){
			var id = this.id.replace(/^cID_/, "");
			var selected = smbc.hasClass(this, selectedCls);
			if(selected){
				if(count%3 == 0){
					id = "L" + id;
				} else if(count%3 == 1) {
					id = "C" + id;
				} else if(count%3 == 2) {
					id = "R" + id;
				}
				configArray.push(id);
				count++;
			}
		});
		smbc.setCookie(cookieName, configArray.join(""), "", "", 365);
		smbc.removeClass(smbc.gadget_cont, "gStatus_config");
		loadConfig();
	}
	
	
	function loadConfig (){
		// reset
		smbc.gadget_region.innerHTML = "";
		
		var cookieVal = smbc.getCookie(cookieName);
		if(!cookieVal || cookieVal == "" || cookieVal == "undefined"){
			smbc.removeClass(smbc.gadget_cont, "gStatus_region");
		} else {
			var configArray = (cookieVal).match(/(L|C|R)M?\d{1,2}/g);
			
			// Status
			smbc.addClass(smbc.gadget_cont, "gStatus_region");
			
			// Embed
			setSelectedBtn(configArray);
			generateRegion(configArray);
			
			// Loading
			smbc.showLoading(configArray);
			
			// Instance
			var gadget_cols = document.getElementById("gadget_cols");
			var region = new smbc.gadgetRegion(gadget_cols);
			var gadgets = smbc.getElementsByTagClassName(gadget_cols, "div", "gadget");
			smbc.each(gadgets, function(index, value){
				gadgets[index] = new smbc.gadget(gadgets[index]);
				gadgets[index].registGadgets(gadgets);
				gadgets[index].registRegion(region);
			});
			region.registGadgets(gadgets);
		}
	}
	
	function setSelectedBtn(array){
		smbc.each(smbc.configLabels, function(index, item){
			smbc.removeClass(item, selectedCls);
		});
		smbc.each(array, function(index, value){
			var gadgetID = value.match(/\d{1,2}$/)[0];
			var targetBtn = document.getElementById("cID_" + gadgetID);
			if (targetBtn) {
				smbc.addClass(targetBtn, selectedCls);
			}
		});
	}
	function generateRegion(array){
		var code_L = '<div id="gadget_col_l" class="gadget_col">';
		var code_C = '<div id="gadget_col_c" class="gadget_col">';
		var code_R = '<div id="gadget_col_r" class="gadget_col">';
		
		smbc.each(array, function(index, value){
			var colChar = value.substr(0,1);
			var miniFlg = value.search(/^(L|C|R)M/);
			var gadgetID = value.match(/\d{1,2}$/)[0];
			var data = smbc.data[gadgetID];
			if(!data){ return; }
			
			var code = '';
			code += '<div id="gID_' + gadgetID + '" class="gadget';
			if(miniFlg != -1){
				code += ' ' + miniCls;
			}
			code += '">';
			code += '<div class="gadget_frame_foot">';
			code += '<div class="gadget_frame_body">';
			code += '<div class="gadget_head">';
			code += '<p>' + data.title + '</p>';
			code += '<div class="gadget_btn_mini"><a href="#"></a></div>';
			code += '<div class="gadget_btn_remove"><a href="#"></a></div>';
			code += '<!-- /.gadget_head --></div>';
			code += '<div class="gadget_body">';
			code += '<div class="gadget_iframe">';
			if(miniFlg == -1){
				if(data.path.lastIndexOf("?") != -1){
					data.path = data.path + "&";
				} else {
					data.path = data.path + "?";
				}
				code += '<iframe src="' + data.path + 'cacheb=' + Math.random() + '#gID_' + gadgetID + '" frameborder="0"></iframe>';
			}
			code += '<!-- /.gadget_iframe --></div>';
			if(data.optCode != "") {
				code += '<div class="gadget_option">' + data.optCode + '</div>';
			}
			code += '<!-- /.gadget_body --></div>';
			code += '<!-- /.gadget_frame_body --></div>';
			code += '<!-- /.gadget_frame_foot --></div>';
			code += '<!-- /.gadget --></div>';
			
			if(colChar == "L"){ code_L += code; }
			if(colChar == "C"){ code_C += code; }
			if(colChar == "R"){ code_R += code; }
		});
		code_L += '</div>';
		code_C += '</div>';
		code_R += '</div>';
		var code_cols = '<div id="gadget_cols">' + code_L + code_C + code_R + '<br class="clear_all" /></div>';
		smbc.gadget_region.innerHTML = code_cols;
	}
	loadConfig();
	
})//($jq);