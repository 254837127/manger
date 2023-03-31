<template>
  <el-container style="height: 100%;">
    <el-aside style="width:auto;">
      <el-col>
        <el-menu router :default-active="currentMenuIndex" class="el-menu-vertical-demo" @open="setCollapse(false)"
          @close="setCollapse(true)" background-color="#191A23" :collapse="collapse" text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu v-for="({ path, meta, children, name }) in menuList" :index="name" :key="path"
            style="text-align: left;">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ meta.name }}</span>
            </template>
            <el-menu-item :index="name1" v-for="({ path: p1, meta: m1, name: name1 }) in children"
              :route="'/home/' + path + '/' + p1" :key="path + p1" @click="addTab(name1, $event)">
              {{ m1.name }}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-aside>
    <el-container>
      <el-header style="height: auto;">
        <div class="header_div">
          <div class="header_left">
            <i class="el-icon-s-fold" style="font-size:30px;" @click="openOrClose"></i>
            <!-- <el-image :src="src" style="height: 40px;margin-left: 20px;"></el-image> -->
            <el-breadcrumb separator="/" style="margin-left:20px;">
              <template>
                <el-breadcrumb-item v-for="(item, index) in crumbList" :key="index">{{ item }}</el-breadcrumb-item>
              </template>
            </el-breadcrumb>
          </div>
          <div class="header_left">
            <i class="el-icon-share"></i>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-main style="line-height: unset;padding: 0px;">
          <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="handleTabsRemove"
            :before-leave="beforeLeave" style="background-color: #fff;line-height: 40px; height: 40px;">
            <el-tab-pane :key="item.gl" v-for="(item) in editableTabs" :label="item.name" :name="item.gl">
              <router-link :to="item.path" slot="label" tag="span">{{ item.name }}</router-link>
              <keep-alive>
                <component :is="item.com"></component>
              </keep-alive>
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>

import tp from '@/assets/zh.png'
import menu from '@/assets/menu.png'
import router1 from '@/util/menu'
import { mapState, mapMutations } from 'vuex'
// import MenuTwo from '@/views/MenuTwo'

export default {
  name: 'HomeView',
  data() {
    return {
      src: tp,
      menu,
      menuList: router1,
      editableTabsValue: '0',
      editableTabs: [],
      tabIndex: 0,
      clickMenu: []
    }
  },
  created() {
    const tabName = this.crumbList[this.crumbList.length - 1]
    this.editableTabs[0] = {
      title: 'New Tab',
      name: tabName,
      gl: this.$route.name,
      path: this.$route.fullPath,
      com: router1[0].children[0].component
    }
    console.log(this.$route)
    console.log(this.editableTabs[0])
    this.editableTabsValue = this.$route.name
    this.setTabs([this.$route.name])
  },
  watch: {
  },
  methods: {
    ...mapMutations(['setCollapse', 'setTabs', 'setCurrentMenuIndex']),
    open() { },
    openOrClose() {
      this.setCollapse(!this.collapse)
    },
    addTab(targetName, event) {
      const index = this.tabs.indexOf(targetName)
      if (index !== -1) {
        this.editableTabsValue = targetName
        return
      }
      this.gt(router1, targetName)
      this.editableTabs.push({
        title: 'New Tab',
        name: event.$route.meta.name,
        gl: event.$route.name,
        path: event.$route.fullPath,
        com: this.clickMenu.component
        // com: () => import('@/views/MenuTh3.vue')
      })
      this.editableTabsValue = event.$route.name
      this.setTabs([...this.tabs, event.$route.name])
    },
    gt(temp, targetName) {
      try {
        for (let i = 0; i < temp.length; i++) {
          if (temp[i].children && temp[i].children.length > 0) {
            this.gt(temp[i].children, targetName)
          } else {
            const dd = temp.filter((item) => {
              return item.name === targetName
            })
            if (dd.length !== 0) {
              this.clickMenu = dd[0]
            }
            throw new Error('完成')
          }
        }
      } catch (error) {

      }
    },
    handleTabsRemove(targetName) {
      const tabs = this.editableTabs
      let activeName = this.editableTabsValue
      let tempTabs = [...this.tabs]
      tempTabs = tempTabs.filter((item) => {
        return item !== targetName
      })
      this.setTabs([...tempTabs])
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.gl === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.gl
            }
          }
        })
      }
      this.editableTabsValue = activeName
      console.log('tabs', tabs)
      console.log('targetName', targetName)
      this.editableTabs = tabs.filter(tab => tab.gl !== targetName)
      this.setCurrentMenuIndex(activeName)
    },
    beforeLeave() {
      // console.log('离开')
    }
  },
  computed: {
    ...mapState(['collapse', 'currentMenuIndex', 'crumbList', 'tabs'])
  },
  components: {
  }
}
</script>

<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}

.el-header {
  color: #333;
  line-height: 60px;
  height: 60px;

  .header_div {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 56px;
    border-bottom: 1px solid #f4f4f4;

    .header_left {
      display: flex;
      flex-direction: row;
      align-items: center;

      .header_menu {
        height: 40px;
        width: 40px;
      }
    }
  }
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  height: 100%;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  line-height: 160px;
}

.el-menu-item {
  color: #777F8F;
}

.jh {
  background: red;
}
// /deep/ .el-tabs__content{
//   height: 100vh;
//   overflow: auto;
//   background: red;
// }
</style>
