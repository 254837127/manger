<template>
  <div class="context">
    <el-card class="box-card">
      <div class="box_context">
        <div class="box_left_div">
          <el-avatar :size="60" :src="headerImg" class="header_avater"></el-avatar>
          <div class="box_title">
            <span class="top">早安, 管理员 , 开始您一天的工作吧!</span>
            <span class="bottom">今日阴转小雨, 22℃ - 32℃ , 出门记得带伞哦。</span>
          </div>
        </div>
        <div class="box_right_div">
          <div>
            <span class="top"><i class="el-icon-s-order" style="margin-right: 5px;color: blue;"></i>项目数</span>
            <span class="bottom">19</span>
          </div>
          <div>
            <span class="top"><i class="el-icon-s-flag" style="margin-right: 5px;color: darksalmon;"></i>待办项</span>
            <span class="bottom">198</span>
          </div>
          <div>
            <span class="top"><i class="el-icon-view" style="margin-right: 5px;color: steelblue;"></i>消息</span>
            <span class="bottom">1992</span>
          </div>
        </div>
      </div>
    </el-card>
    <el-row :gutter="8">
      <el-col :xs="12" :sm="6" :md="3" class="itemBottom">
        <ImageAndTextCardVue name="用户" icon="el-icon-user"></ImageAndTextCardVue>
      </el-col>
      <el-col :xs="12" :sm="6" :md="3" class="itemBottom">
        <ImageAndTextCardVue name="分析" icon="el-icon-coin" iconColor="#b7eb8f"></ImageAndTextCardVue>
      </el-col>
      <el-col :xs="12" :sm="6" :md="3" class="itemBottom">
        <ImageAndTextCardVue name="商品" icon="el-icon-reading" iconColor="#FF9C6E"></ImageAndTextCardVue>
      </el-col>
      <el-col :xs="12" :sm="6" :md="3" class="itemBottom">
        <ImageAndTextCardVue name="订单" icon="el-icon-umbrella" iconColor="#B37FEB"></ImageAndTextCardVue>
      </el-col>
      <el-col :xs="12" :sm="6" :md="3" class="itemBottom">
        <ImageAndTextCardVue name="票据" icon="el-icon-folder" iconColor="#FFD897"></ImageAndTextCardVue>
      </el-col>
      <el-col :xs="12" :sm="6" :md="3" class="itemBottom">
        <ImageAndTextCardVue name="消息" icon="el-icon-view" iconColor="#5CDBD3"></ImageAndTextCardVue>
      </el-col>
      <el-col :xs="12" :sm="6" :md="3" class="itemBottom">
        <ImageAndTextCardVue name="标签" icon="el-icon-bell" iconColor="#FF85C0"></ImageAndTextCardVue>
      </el-col>
      <el-col :xs="12" :sm="6" :md="3" class="itemBottom">
        <ImageAndTextCardVue name="配置" icon="el-icon-star-off" iconColor="#FFC069"></ImageAndTextCardVue>
      </el-col>
    </el-row>
    <el-row :gutter="16" class="itemRow">
      <el-col :sm="24" :md="8" class="itemBottom">
        <el-card class="btCard">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-dropdown>
              <span class="el-dropdown-link">
                <i class="el-icon-more"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-edit">编辑</el-dropdown-item>
                <el-dropdown-item icon="el-icon-delete">删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div>
            <el-table :data="mainTableList" height="300" class="hasGundong" stripe size="small" empty-text="暂无信息"
              :header-cell-style="tableHeader">
              <el-table-column prop="priority" label="优先级" min-width="40">
                <template slot-scope="scope">
                  <div class="priorityClass"
                    :class="scope.row.priority === 1 ? 'priorityClassOne' : (scope.row.priority === 2 ? 'priorityClassTwo' : 'priorityClassThree')">
                    <span>{{ scope.row.priority }}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="任务名称" show-overflow-tooltip>
                <template slot-scope="scope">
                  <span style="color: #1890ff;">{{ scope.row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="status" label="状态" min-width="50">
                <template slot-scope="scope">
                  <span :style="{ color: statusColor(scope.row.status) }">{{ formatterStatus(scope.row.status) }}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
      <el-col :sm="24" :md="8" class="itemBottom">
        <el-card class="btCard">
          <div slot="header" class="clearfix">
            <span>最新动态</span>
            <el-dropdown>
              <span class="el-dropdown-link">
                <i class="el-icon-more"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-edit">编辑</el-dropdown-item>
                <el-dropdown-item icon="el-icon-delete">删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="block">
            <el-scrollbar style="height:100%;width:100%;padding: 6px 0;">
              <div>
                <el-timeline style="height: 300px;text-align: left;" class="timelineDiv">
                  <el-timeline-item v-for="(activity) in activities" :key="activity.id" :icon="activity.icon"
                    :type="activity.type" :color="activity.color" :size="activity.size" :timestamp="activity.timestamp">
                    {{ activity.content }}
                  </el-timeline-item>
                </el-timeline>
              </div>
            </el-scrollbar>
          </div>
        </el-card>
      </el-col>
      <el-col :sm="24" :md="8" class="itemBottom">
        <el-card class="btCard">
          <div slot="header" class="clearfix">
            <span>本月目标</span>
            <el-dropdown>
              <span class="el-dropdown-link">
                <i class="el-icon-more"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-edit">编辑</el-dropdown-item>
                <el-dropdown-item icon="el-icon-delete">删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="muBiaoContext">
            <el-progress type="dashboard" :percentage="percentage" :color="color"></el-progress>
            <span>恭喜, 本月目标已达标!</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="16" class="itemRow">
      <el-col :sm="24" :md="16" class="itemBottom">
        <el-card class="btCard">
          <div slot="header" class="clearfix">
            <span>项目进度</span>
            <el-dropdown>
              <span class="el-dropdown-link">
                <i class="el-icon-more"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-edit">编辑</el-dropdown-item>
                <el-dropdown-item icon="el-icon-delete">删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div>
            <el-table :data="mainProjectTableList" height="300" class="hasGundong" stripe size="small"
              :header-cell-style="tableHeader">
              <el-table-column type="index" width="50"></el-table-column>
              <el-table-column prop="name" label="项目名称" show-overflow-tooltip></el-table-column>
              <el-table-column prop="startTime" label="开始时间" align="center" width="120"></el-table-column>
              <el-table-column prop="endTime" label="结束时间" align="center" width="120"></el-table-column>
              <el-table-column prop="status" label="状态" align="center" width="100">
                <template slot-scope="scope">
                  <span :style="{ color: statusProjectColor(scope.row.status) }">{{
                    formatterProjectStatus(scope.row.status) }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="proess" label="进度" align="center" width="150">
                <template slot-scope="scope">
                  <el-progress :percentage="scope.row.proess"></el-progress>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>

      <el-col :sm="24" :md="8" class="itemBottom">
        <el-card class="btCard">
          <div slot="header" class="clearfix">
            <span>小组成员</span>
            <el-dropdown>
              <span class="el-dropdown-link">
                <i class="el-icon-more"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-edit">编辑</el-dropdown-item>
                <el-dropdown-item icon="el-icon-delete">删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="userDiv">
            <div class="userItem">
              <div class="userInfo">
                <el-avatar size="large"
                  src="https://himg.bdimg.com/sys/portrait/item/public.1.3862de73.wI8JR--m3FFV_Y5wcLxyhA.jpg"></el-avatar>
                <div class="userRen">
                  <span class="userName">SunSmile</span>
                  <span class="userDesp">UI设计师、交互专家</span>
                </div>
              </div>
              <el-tag type="success" size="mini">标签二</el-tag>
            </div>
            <div class="userItem">
              <div class="userInfo">
                <el-avatar size="large"
                  src="https://himg.bdimg.com/sys/portrait/item/public.1.3862de73.wI8JR--m3FFV_Y5wcLxyhA.jpg"></el-avatar>
                <div class="userRen">
                  <span class="userName">SunSmile</span>
                  <span class="userDesp">UI设计师、交互专家</span>
                </div>
              </div>
              <el-tag type="success" size="mini">标签二</el-tag>
            </div>
            <div class="userItem">
              <div class="userInfo">
                <el-avatar size="large"
                  src="https://himg.bdimg.com/sys/portrait/item/public.1.3862de73.wI8JR--m3FFV_Y5wcLxyhA.jpg"></el-avatar>
                <div class="userRen">
                  <span class="userName">SunSmile</span>
                  <span class="userDesp">UI设计师、交互专家</span>
                </div>
              </div>
              <el-tag type="success" size="mini">标签二</el-tag>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div style="height: 100px;"></div>
  </div>
</template>

<script>
import headerImg from '@/assets/tx2.jpeg'
import mockApi from '@/api/mockApi'
import { mapMutations, mapState } from 'vuex'
import ImageAndTextCardVue from '@/components/ImageAndTextCard.vue'

export default {
  data() {
    return {
      headerImg,
      overflow: 'hidden',
      tableHeader: {
        height: '45px',
        color: '#333333',
        padding: '0px'
      },
      tableData: [
        { id: 1, priority: 1, name: '解决项目不能重新启动的bug', status: -1 },
        { id: 2, priority: 1, name: '解决项目不能重新启动的bug', status: 0 },
        { id: 3, priority: 2, name: '解决项目不能重新启动的bug', status: 1 },
        { id: 4, priority: 2, name: '解决项目不能重新启动的bug', status: 0 },
        { id: 5, priority: 2, name: '解决项目不能重新启动的bug', status: -1 },
        { id: 6, priority: 3, name: '解决项目不能重新启动的bug', status: 0 },
        { id: 7, priority: 4, name: '解决项目不能重新启动的bug', status: 0 },
        { id: 8, priority: 5, name: '解决项目不能重新启动的bug', status: 1 }
      ],
      activities: [{
        id: 1,
        content: '图标图标图标图标图标',
        timestamp: '2018-04',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-more'
      }, {
        id: 2,
        content: '颜色颜色颜色颜色颜色',
        timestamp: '20:46',
        color: '#0bbd87'
      }, {
        id: 3,
        content: '始您一天的工作吧',
        timestamp: '20:46',
        size: 'large'
      }, {
        id: 4,
        content: '支持',
        timestamp: '20:46',
        size: 'large'
      }, {
        id: 5,
        content: '始您一天的工作吧其父级的第一个子级的样式',
        timestamp: '20:46',
        size: 'large'
      }, {
        id: 6,
        content: '选择所有父级是',
        timestamp: '20:46',
        size: 'large'
      }, {
        id: 7,
        content: '选择所有未访问链接',
        timestamp: '20:46',
        size: 'large'
      }, {
        id: 8,
        content: '选择鼠标在链接上面时',
        timestamp: '20:46',
        size: 'large'
      }, {
        id: 9,
        content: '选择一个lang属性的起始',
        timestamp: '20:46',
        size: 'large'
      }, {
        id: 10,
        content: '节点',
        timestamp: '20:46'
      }],
      percentage: 80,
      color: '#5cb87a'
    }
  },
  components: {
    ImageAndTextCardVue
  },
  created() {
    mockApi({
      url: '/table',
      method: 'get'
    }).then((res) => {
      console.log('获取到数据了', res.data.data)
      this.setMainTableList(res.data.data)
    })
    mockApi({
      url: '/projectTable',
      method: 'get'
    }).then((res) => {
      console.log('获取到数据了', res.data.data)
      this.setMainProjectTableList(res.data.data)
    })
    console.log('创建--------------')
  },
  methods: {
    ...mapMutations(['setMainTableList', 'setMainProjectTableList']),
    formatterStatus(status) {
      return status === -1 ? '未开始' : (status === 0 ? '进行中' : '已完成')
    },
    statusColor(status) {
      return status === -1 ? '#FAAD14' : (status === 0 ? '#52C41A' : '#909399')
    },
    formatterProjectStatus(status) {
      let statusStr = ''
      switch (status) {
        case -2:
          statusStr = '已延期'
          break
        case -1:
          statusStr = '未开始'
          break
        case 0:
          statusStr = '进行中'
          break
        case 1:
          statusStr = '已完成'
          break
        default:
          statusStr = '已延期'
          break
      }
      return statusStr
    },
    statusProjectColor(status) {
      let statusColor = ''
      switch (status) {
        case -2:
          statusColor = '#ff4d4f'
          break
        case -1:
          statusColor = '#faad14'
          break
        case 0:
          statusColor = '#52c41a'
          break
        case 1:
          statusColor = '#909399'
          break
        default:
          statusColor = '#ff4d4f'
          break
      }
      return statusColor
    },
    cellMouseEnter() {
      this.overflow = 'auto'
    },
    cellMouseLeave() {
      this.overflow = 'hidden'
    }
  },
  computed: {
    ...mapState(['mainTableList', 'mainProjectTableList'])
  }
}
</script>

<style lang="less" scoped>
.context {
  margin: 0 15px;

  .itemBottom {
    margin-bottom: 15px;
  }

  .box-card {
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;

    .box_context {
      width: 100%;
      display: flex;
      flex-direction: row;
      padding: 20px;
      justify-content: space-between;

      .box_left_div {
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        .header_avater {
          flex-shrink: 0;
        }

        .box_title {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          box-sizing: border-box;

          .top {
            font-size: 20px;
            text-align: left;
            margin-left: 4px;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-break: break-all;
            overflow: hidden;
            font-weight: 400;
          }

          .bottom {
            font-size: 14px;
            text-align: left;
            margin-left: 4px;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-break: break-all;
            overflow: hidden;
            color: #909399;
          }
        }
      }

      .box_right_div {
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-left: 16px;

          .top {
            color: #606266;
            text-align: right;
          }

          .bottom {
            color: #303133;
            text-align: right;
            font-size: 24px;
          }
        }
      }
    }
  }

  .itemRow {
    height: 350px;

    .btCard {
      width: 100%;
      height: 100%;

      .userDiv {
        height: 300px;

        .userItem {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          height: 40px;
          padding: 13px 18px;
          align-items: center;

          &+.userItem {
            border-top: 1px solid #F0F0F0;
          }

          .userInfo {
            display: flex;
            flex-direction: row;
            flex-grow: 1;
            line-height: 40px;

            .userRen {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: flex-start;
              padding-left: 10px;
              .userName {
                font-size: 15px;
                color: #303133;
                height: 15px;
                line-height: 15px;
              }

              .userDesp {
                font-size: 13px;
                color: #909399;
                height: 13px;
                line-height: 13px;
              }
            }
          }
        }
      }

      .block {
        display: flex;
        height: 300px;

        &:hover {
          overflow: auto;
        }
      }

      .muBiaoContext {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 300px;
      }
    }
  }

  // .priorityClass {
  //   border-radius: 50%;
  //   width: 20px;
  //   height: 20px;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  // }

  // .priorityClassOne {
  //   background: #fff1f0;
  //   color: #f5222d;
  //   border: 1px solid #ffa39e;
  // }

  // .priorityClassTwo {
  //   background: #fffbe6;
  //   color: #ffe58f;
  //   border: 1px solid #faad14;
  // }

  // .priorityClassThree {
  //   background: #e6f7ff;
  //   color: #1890ff;
  //   border: 1px solid #91d5ff;
  // }

}</style>
