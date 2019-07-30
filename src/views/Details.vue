<template>
  <div>
    <el-page-header @back="goBack" content="详情页面"></el-page-header>

    <div class="container">
      <file-pond
        name="test"
        ref="pond"
        label-idle="Drop files here..."
        allow-multiple="true"
        accepted-file-types="image/jpeg, image/png"
        server="/api"
        v-bind:files="myFiles"
        v-on:init="handleFilePondInit"
        class="file-pond"
      />
    </div>

    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
  </div>
</template>

<script>
// Import Vue FilePond
import vueFilePond from 'vue-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

// Create component
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
)
export default {
  name: 'details',
  data: function () {
    return { myFiles: ['cat.jpeg'] }
  },
  methods: {
    handleFilePondInit: function () {
      console.log('FilePond has initialized')

      // FilePond instance methods are available on `this.$refs.pond`
    },

    goBack () {
      console.log('go back')
    }
  },
  components: {
    FilePond
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 1200px;
  background: gray;
}

.file-pond {
  margin: 20px;
  width: 300px;
  height: 50px;
}
</style>
