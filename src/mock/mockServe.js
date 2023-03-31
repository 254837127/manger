import mockjs from 'mockjs'
import mainTable from './mainTable'
import mainProjectTable from './mainProjectTable'

mockjs.mock('/mock/table', mainTable)
mockjs.mock('/mock/projectTable', mainProjectTable)
