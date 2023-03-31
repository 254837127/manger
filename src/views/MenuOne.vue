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
    <div style="width:100%;display: flex;">
      <div class="itemDiv">
        <el-card shadow="hover" :body-style="{ padding: '15px 0' }" class="bh">
          <div>
            <i class="el-icon-user" style="color: #69c0ff;"></i>
            <span>用户</span>
          </div>
        </el-card>
        <el-card shadow="hover" :body-style="{ padding: '15px 0' }" class="bh">
          <div>
            <i class="el-icon-coin" style="color: rgb(149, 222, 100);"></i>
            <span>分析</span>
          </div>

        </el-card>
        <el-card shadow="hover" :body-style="{ padding: '15px 0' }" class="bh">
          <div>
            <i class="el-icon-reading" style="color: rgb(255, 156, 110);"></i>
            <span>商品</span>
          </div>

        </el-card>
        <el-card shadow="hover" :body-style="{ padding: '15px 0' }" class="bh">
          <div>
            <i class="el-icon-umbrella" style="color: rgb(179, 127, 235);"></i>
            <span>订单</span>
          </div>

        </el-card>
        <el-card shadow="hover" :body-style="{ padding: '15px 0' }" class="bh">
          <div>
            <i class="el-icon-folder" style="color: rgb(255, 214, 102);"></i>
            <span>票据</span>
          </div>

        </el-card>
        <el-card shadow="hover" :body-style="{ padding: '15px 0' }" class="bh">
          <div>
            <i class="el-icon-view" style="color: rgb(92, 219, 211);"></i>
            <span>消息</span>
          </div>

        </el-card>
        <el-card shadow="hover" :body-style="{ padding: '15px 0' }" class="bh">
          <div>
            <i class="el-icon-bell" style="color: rgb(255, 133, 192);"></i>
            <span>标签</span>
          </div>
        </el-card>
        <el-card shadow="hover" :body-style="{ padding: '15px 0' }" class="bh">
          <div>
            <i class="el-icon-star-off" style="color: rgb(255, 192, 105);"></i>
            <span>配置</span>
          </div>
        </el-card>
      </div>
    </div>
    <div class="threeItem">
      <div class="itemDiv">
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
          <div class="tableDiv">
            <el-table :data="tableData" style="width: 100%;height: 300px;" class="hasGundong">
              <el-table-column prop="priority" label="优先级" min-width="50">
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
      </div>
      <div class="itemDiv">
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
            <el-scrollbar style="height:100%;width:100%;">
              <div style="width:100%;height:300px;">
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
      </div>
      <div class="itemDiv">
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
      </div>
    </div>
    <div style="height: 100px;"></div>
  </div>
</template>

<script>
import headerImg from '@/assets/tx2.jpeg'
export default {
  data() {
    return {
      headerImg,
      overflow: 'hidden',
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
  },
  created() {
    console.log('创建--------------')
  },
  methods: {
    formatterStatus(status) {
      return status === -1 ? '未开始' : (status === 0 ? '进行中' : '已完成')
    },
    statusColor(status) {
      return status === -1 ? '#FAAD14' : (status === 0 ? '#52C41A' : '#909399')
    },
    cellMouseEnter() {
      this.overflow = 'auto'
    },
    cellMouseLeave() {
      this.overflow = 'hidden'
    }
  }
}
</script>

<style lang="less" scoped>
.context {
  margin: 0 20px;

  .box-card {
    display: flex;
    flex-direction: row;

    .box_context {
      // width: 100%;
      display: flex;
      flex-direction: row;
      padding: 20px;

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

    :deep(.el-card__body) {
      width: 100%;
    }
  }

  .itemDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 15px;

    @media only screen and (min-width:481px) {
      .bh {
        width: 24%;
        margin-bottom: 10px;

        div {
          display: flex;
          flex-direction: column;

          i {
            font-size: 30px;
          }

          span {
            margin-top: 8px;
            font-size: 14px;
            height: 16px;
            line-height: 16px;
          }
        }
      }
    }

    @media only screen and (min-width: 1200px) {
      .bh {
        width: 12%;
        margin-bottom: 10px;
      }
    }

    .text {
      font-size: 14px;
    }

    .item {
      margin-bottom: 18px;
    }

  }

  .threeItem {
    width: 100%;
    margin-left: -7.5px;
    margin-right: -7.5px;
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    line-height: 20px;

    .itemDiv {
      width: 33.3333333%;
      height: 350px;

      .btCard {
        margin: 0 8px;
        width: 100%;
        height: 100%;

        .tableDiv {
          .hasGundong {
            height: 300px;

            &:hover {
              overflow: auto;
            }
          }
        }

        .block {
          padding: 10px 0;
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
          height: 250px;
        }
      }
    }

    .priorityClass {
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .priorityClassOne {
      background: #fff1f0;
      color: #f5222d;
      border: 1px solid #ffa39e;
    }

    .priorityClassTwo {
      background: #fffbe6;
      color: #ffe58f;
      border: 1px solid #faad14;
    }

    .priorityClassThree {
      background: #e6f7ff;
      color: #1890ff;
      border: 1px solid #91d5ff;
    }
  }
}
</style>
