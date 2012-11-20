/**
 * storage.js
 * @author Stéphan Zych <info@monkeymonk.be>
 * @copyriht 2010-2011 Stéphan Zych <info@monkeymonk.be>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

if (!window.storage) {
	window.storage = {};
}

(function (window, document, undefined) {
	"use strict";


	var storage = {
		type: 'localStorage', // localStorage, sessionStorage


		enabled: function () {
			try {
				return storage.type in window && window[storage.type] !== null;
			} catch (e) {
				return false;
			}
		}, // enabled


		set: function (sName, mValue) {
			if (sName === Object(sName)) {
				for (var name in sName) {
					if (sName.hasOwnProperty(name)) {
						this.type.setItem(name, sName[name]);
					}
				}
			} else {
				this.type.setItem(sName, mValue);
			}

			return this;
		}, // set


		get: function (sName, fallback) {
			var values = storage.all();

			if (Object.prototype.toString.call(sName) === '[object Array]') {
				var result = {};

				for (var i = 0, length = sName.length; i < length; i++) {
					var val = sName[i];
					result[val] = values[val] || fallback;
				}

				return result;
			} else {
				return values[sName] || fallback;
			}
		}, // get


		del: function (sName) {
			sName = Object.prototype.toString.call(sName) === '[object Array]' ? sName : [sName];

			for (var i = 0, length = sName.length; i < length; i++) {
				this.type.removeItem(sName[i]);
			}

			return this;
		}, // del


		clear: function () {
			this.type.clear();

			return this;
		}, // clear


		all: function () {
			var result = {};

			for (var i = 0, max = this.type.length; i < max; i++) {
				var key = this.type.key(i), val = this.type.getItem(key);

				result[key] = val;
			}

			return result;
		}, // all

		change: function (callback) {
			var onStorageChange = function (e) {
				if (!e) {
					e = window.event;
				}

				callback.call(storage, storage.all());
			};

			if (window.addEventListener) {
				window.addEventListener('storage', onStorageChange, false);
			} else {
				window.attachEvent('onstorage', onStorageChange);
			}

			return this;
		} // change
	}; // storage

	window.storage = storage;

}(window, document)); // Copyright (c) 2012 Stéphan Zych (monkeymonk.be), https://github.com/monkeymonk https://github.com/monkeymonk/storage.js