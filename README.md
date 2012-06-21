# storage.js
A tiny JavaScript library that help use localStorage and sessionStorage (HTML5 API)

## Usage
Download storage.min.js and include it in your HTML document:

```html
<script src="storage.min.js"></script>
```

## Choose between local or session

```javascript
storage.type = localStorage // or sessionStorage
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

## storage.get(name)

```javascript
storage.get(name);
```

## storage.del(name)

```javascript
storage.del(name);
```

## storage.clear()

```javascript
storage.clear();
```

## storage.all()

```javascript
storage.all();
```

## storage.change()
/!\ TODO

## Chaining

```javascript
storage.clear().set('key', 'value').get('key');
```