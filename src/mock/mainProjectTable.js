import mockjs from 'mockjs'

const mainProjectTable = mockjs.mock({
  code: 0,
  message: null,
  'data|10': [
    {
      'id|+1': 1,
      startTime: '@date("yyyy-MM-dd")',
      endTime: '@date("yyyy-MM-dd")',
      'status|-2-1': 0,
      name: '@ctitle(10,16)',
      'proess|0-100': 0
    }

  ]
})
export default mainProjectTable
