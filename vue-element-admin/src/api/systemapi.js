


export function addUser(data) {
  
  return request({
    url: '/system/addUser',
    method: 'post',
    data
  })
}