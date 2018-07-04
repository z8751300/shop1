import ajax from './ajax'


export const getList = () => {
  const result = ajax('/goods')
  return result
  
}
export const getCategory = () => {
  return ajax('/categorys')
  
}
export const getshops = () => {
  return ajax('/shops')
  
}
