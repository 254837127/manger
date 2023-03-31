import mockjs from 'mockjs'

const mainTable = mockjs.mock({
  code: 0,
  message: null,
  'data|10': [
    {
      'id|+1': 1,
      'priority|1-4': 1,
      'status|-1-1': 0,
      name: '@ctitle(8,14)'
    }

  ]
})
export default mainTable
