# iterator

## example code

```typescript
iterator<number>([1, 2, 3], (item) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.dir(item.value[1]);
            resolve(true);
        }, 500)
    });
}).then(()  => {
    console.dir("done");
})
```

use nodejs or in browser run code.
## output
```shell
# iterator@0.0.1 test
# npx tsc && node dist/test.js

1 # sleep 500ms
2 # sleep 500ms
3 # sleep 500ms
'done'

```
