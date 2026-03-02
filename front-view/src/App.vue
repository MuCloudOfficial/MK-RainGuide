<script setup>
import { ref } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'

const asideCollapsed = ref(false)

const toggleAside = () => {
        asideCollapsed.value = !asideCollapsed.value
}

</script>

<template>
        <el-container class="app-container">
                <el-header class="main-nav">
                        <div class="header-container">
                                <el-button :icon="asideCollapsed ? Expand : Fold" circle @click="toggleAside"
                                        class="aside-toggle-btn" />
                                <h2>MK-RainGuide Standard Edition</h2>
                        </div>
                </el-header>
                <el-container class="app-container">
                        <el-menu default-active="'/'" 
                                class="left-menu"
                                :collapse="asideCollapsed"
                                router
                                >
                                <el-menu-item index="/">
                                        <el-icon>
                                                <HomeFilled />
                                        </el-icon>
                                        <span>Overview</span>
                                </el-menu-item>
                                <el-menu-item index="/dataviewer">
                                        <el-icon>
                                                <Document />
                                        </el-icon>
                                        <span>Data Viewer</span>
                                </el-menu-item>
                        </el-menu>
                        <el-main class="app-main">
                                <el-scrollbar>
                                        <router-view class="p-5" v-slot="{ Component }">
                                                <transition name="slide-fade">
                                                        <component :is="Component" />
                                                </transition>
                                        </router-view>
                                </el-scrollbar>
                        </el-main>
                </el-container>
        </el-container>
</template>

<style scoped>
.main-nav{
  padding: 0;
  box-shadow: var(--el-box-shadow);
}
.header-container {
        display: flex;
        justify-content: left;
        align-items: center;
        height: 100%;
        gap: 12px;
        margin: 0 20px
}

.app-container {
        height: 100%;
}

.aside-toggle-btn {
        flex-shrink: 0;
}

.el-menu--collapse{
  box-shadow: var(--el-box-shadow);
border: 0;
flex-shrink: 0 !important;
}

.left-menu:not(.el-menu--collapse){
  width: 200px;
  box-shadow: var(--el-box-shadow);
  border: 0;
  flex-shrink: 0 !important;
}

.app-main {
        height: 100%;
        margin: 0;
        padding: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
