type AsyncFunction<T> = (item: T) => Promise<any>;

type NextItem<T> = IteratorReturnResult<[number, T]> | IteratorYieldResult<[string | number, T]> | IteratorYieldResult<[T, T]>

type ListType<T> = T[] | Set<T> | Map<string | number, T>;

export default function iterator<T>(list: ListType<T>, next: AsyncFunction<NextItem<T>>) {
  const entries = list.entries();

  return new Promise(async (resolve, reject) => {
    const listIterator = async (item: NextItem<T>) => {
      if (item.done) {
        resolve(true)
      } else {
        await next(item).then(async () => {
          await listIterator(entries.next())
        }).catch(() => {
          console.warn("Cancel iteration.");
        })
      }
    }

    await listIterator(entries.next());
  });
}
