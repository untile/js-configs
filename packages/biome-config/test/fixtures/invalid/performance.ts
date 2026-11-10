export async function loadAll(ids: string[], load: (id: string) => Promise<string>) {
  const results: string[] = [];

  for (const id of ids) {
    results.push(await load(id));
  }

  console.log(results);

  return results;
}

export function isSlug(value: string) {
  return /^[a-z-]+$/.test(value);
}

export function merge(items: Array<{ id: string }>) {
  return items.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
}
