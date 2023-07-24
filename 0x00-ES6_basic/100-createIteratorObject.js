export default function createIteratorObject(report) {
  const result = [];
  for (const val of Object.values(report.allEmployees)) {
    result.push(...val);
  }
  return result;
}
