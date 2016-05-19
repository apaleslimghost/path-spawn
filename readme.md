path-spawn
==========

```sh
npm install path-spawn
```

so you can do
-------------

```js
import loadPath from 'path-spawn';

async function foo() {
	const {echo} = await loadPath({capture: ['stdout']});
	const {stdout} = await echo('hello world');
	return stdout;
}

foo().then(r => console.assert(r === 'hello world\n'));
```

licence
-------

mit
