export default function createIteratorObject(report) {
  const iterable = [];

  if (!report.allEmployees || typeof report.allEmployees !== 'object') {
    return iterable;
  }

  for (const r of Object.values(report.allEmployees)) {
    iterable.push(...r);
  }

  return iterable;
}
