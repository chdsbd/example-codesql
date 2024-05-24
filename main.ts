async function getEvents(): Promise<
  Array<{ name: string; properties: string[] }>
> {
  const res = await fetch("https://example.com/api/events");
  return (await res.json()) as { name: string; properties: string[] }[];
}

export async function main() {
  const events = await getEvents();
  const countsByProperty: Record<string, { count: number } | undefined> = {};

  events.forEach((event) => {
    for (const property of event.properties) {
      let entry = countsByProperty[property];
      if (!entry) {
        entry = { count: 0 };
        countsByProperty[property] = entry;
      }
      entry.count += 1;
    }
  });
  console.log("count" in {}); // true
}
