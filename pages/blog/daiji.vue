<template>
    <div class="container">
      
        <h1>{{message}}</h1>
        {{items[0].fields.title}}
        {{items[0].fields.image.fields.file.url}}
        
          <tr v-for="(item, i) in items" :key="i">
            img = {{item.fields.image.fields.file.url}}
            img
            <img
        alt="テスト"
        src= ""
  >
          </tr>
        
        <!-- テーブルを追加 -->
        <div>
          <table class="table table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">title</th>
                <th scope="col">body</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in items" :key="i">
                <th scope="row">{{item.fields.title}}</th>
                <!-- 追記 -->
                <td>
                  <p v-for="(content, j) in item.fields.body2.content" :key="j">
                    {{content.content[0].value}}
                  </p>
                </td>
                <td>
                  <p v-for="(content, j) in item.fields.image" :key="j">
                    {{content}}
                  </p>
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>
        <tr v-for="(item, i) in items" :key="i">
          <th scope="row">{{item.fields.title}}</th>
        </tr>
        <tr v-for="(item, i) in items" :key="i">
          <ul>
            <v-img
              :src="item.fields.image.fields.file.url"
              :alt="item.fields.image.fields.title"
              max-width="400"
              max-height="225"/>
            <li>{{ item.fields.image.fields.file.url }}</li>
            <v-img
            class="white--text"
            height="250px"
            v-bind:src="item.fields.image.fields.file.url"
            ></v-img>
          </ul>
        </tr>
        <img
        alt="テスト"
        src="//images.ctfassets.net/httuqftbm1yv/40qRzOhTRZ1LCFPnaVwuFR/7ae4ddb73152865319f3aaaf01b38342/test.png"
  >
  <img
        alt="テスト"
        src="//images.ctfassets.net/oodhus1frod9/65ytqXhZFKGyapaWSDG9x8/b3eee38fd82a2999e354d7447a768c60/____________________________2020-05-21_17.08.47.png"
  >
  
{{name}}
{{name}}
<template>
  <img v-bind:src="items[0].fields.image.fields.file.url">aaaaaaaaaa</img>
</template>
        

    </div>
  </template>
  
  <script>
  import client from '~/plugins/contentful.js'
  
  export default {
    data() {
      return {
        message: "Contentful のテスト",
        name: "Yamada",
        
      }
    },
    async asyncData() {
      const { items } = await client.getEntries({content_type: process.env.CTF_CONTENT_TYPE})
      console.log(items)
      items[0]
      return {
        items: items
      }
    }
  }
  </script>