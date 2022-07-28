<template>
    <div class="dashboard">
        <Sidebar/>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/SideBar'
export default {
    components: {
        Sidebar
    }
}
</script>

<style  scoped>
.dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: #a3c3d7;
    height: 100vh;
    width: 100vw;
}

.content {
    background-color: rgb(255, 255, 255);
    border-radius: 2px;
    margin: 6px 6px 6px 0px;
}
</style>