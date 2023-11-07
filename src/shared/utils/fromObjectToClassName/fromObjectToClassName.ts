export const fromObjectToClassName = (obj: Record<string, unknown>) => {
  return Object.entries(obj).filter(([_, value]) => !!value).map(item => item[0]).join(' ')
}