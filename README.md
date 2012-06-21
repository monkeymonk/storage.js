# storage.js
A tiny JavaScript library that help use localStorage and sessionStorage (HTML5 API)

## Usage
Download storage.min.js (~1.271 kb) and include it in your HTML document:

```html
<script src="storage.min.js"></script>
```

If you include storage.js as above, this script will add an object called `storage` to your global scope.


---

storage.js also supports AMD. So if you want to include storage.js dynamically, you can just require it with any AMD loader, for example [RequireJS](http://requirejs.org/).
Follow the instructions of your AMD loader to include storage.js.

---


After that you can call any of methods that are explained in the following.


## Choose between local or session

```javascript
storage.type = localStorage; // or sessionStorage
```


## storage.enabled()

```javascript
if (storage.enabled()) {
  // Do stuff with local/session storage
} else {
  // Fallback
}
```


## storage.set(name, value)

```javascript
storage.set(name, value);
```

You can also set several values at once:

```javascript
storage.set({
   key1: 'value1',
   key2: 'value2'
});
```


## storage.get(name)

```javascript
storage.get(name);
```

Passing just one key like this will return a string. You can also pass an array of keys:

```javascript
storage.get(['key1', 'key2']);
```

This will always return an object. The keys of this object will be the keys you passed and the values are the corresponding values.

In case you want to add a default value you can use the second parameter.

```javascript
storage.get('key', 'default value');
```

This also works with several keys:

```javascript
storage.get(['key1', 'key2'], 'default value');
```


## storage.del(name)

This method allows you to remove datas. It accepts an infinite number of keys or an array of keys.

```javascript
storage.del('key');
storage.del('key1', 'key2');
storage.del(['key1', 'key2']);
```


## storage.clear()
Simply call `storage.clear()` and every datas will be removed.


## storage.all()

```javascript
var datas = storage.all();
```


## storage.change()
/!\ TODO - Event catch


## Chaining
The methods `set`, `del`, `clear` and `change` return the storage object and therefore enable chaining.

```javascript
storage.clear().change(function(){ alert('Storage change!') }).set('key', 'value').get('key');
```


## Contribute
If you find any bugs in this script or have ideas how to improve it please let me know by creating an [issue](https://github.com/monkeymonk/storage.js/issues). 

You are also very welcome to contribute to the code here on github.


Enjoy!