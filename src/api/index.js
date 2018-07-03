import ajax from './ajax'



export const getList = () => {
  return ajax('/goods')
  
}
