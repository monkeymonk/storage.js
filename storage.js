!function(window, document, undefined){
	var storage = {
		type: localStorage, // localStorage, sessionStorage
		
		enabled: function(){
			try{
				return 'localStorage' in window && window['localStorage'] !== null
			}catch(e){
				return false
			}
		}, // enabled
		
		set: function(n, v){
			if(n === Object(n)){
				for(var name in n)	if(n.hasOwnProperty(name))	this.type.setItem(name, n[name])
			}
			else	this.type.setItem(n, v)
			return this
		}, // set
		
		get: function(n, fallback){
			var values = storage.all()
			if(Object.prototype.toString.call(n) == "[object Array]"){
				var r = {}
				for(var i = 0, l = n.length; i < l; i++){
					var v = n[i]
					r[v] = values[v] || fallback
				}
				return r
			}
			else	return values[n] || fallback
		}, // get
		
		del: function(n){
			n = Object.prototype.toString.call(n) == "[object Array]" ? n : [n]
			for(var i = 0, l = n.length; i < l; i++){
				this.type.removeItem(n[i])
			}
			return this
		}, // del
		
		clear: function(){
			this.type.clear()
			return this
		}, // clear
		
		all: function(){
			var result = {}
			for(var i = 0, max = this.type.length; i < max; i++){
				var k = this.type.key(i), v = this.type.getItem(k)
				result[k] = v
			}
			return result
		}, // all
		
		change: function(cb){ // ??
			function onStorageChange(e){
				if(!e)	e = window.event
				cb.call(storage, storage.all())
			}
			
			if(window.addEventListener)	window.addEventListener('storage', onStorageChange, false)
			else	window.attachEvent('onstorage', onStorageChange)
			
			return this
		} // change
	} // storage
	
	if(typeof define === 'function' && define.amd)	define(function(){return storage})
	else window.storage = storage
}(window, document)
// Copyright (c) 2012 Stéphan Zych (monkeymonk.be), https://github.com/monkeymonk https://github.com/monkeymonk/storage.js