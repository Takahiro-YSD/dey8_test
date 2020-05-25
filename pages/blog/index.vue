<template>
    <div class="container">
        <h1>{{message}}</h1>
        {{items[2].fields.image.fields.file.url}}

        <img v-bind:src="items[2].fields.image.fields.file.url">aaaaaaaaaa</img>
            <li>{{ items[2].fields.image.fields.file.url }}</li>
        
        <!-- テーブルを追加 -->
        <div>
          <table class="table table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">title</th>
                <th scope="col">link</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in items" :key="i">
                <th scope="row">{{item.fields.title}}</th>
                <!-- 追記 -->
                <td>
                  <nuxt-link :to="{name: 'blog-id', params: {id: item.sys.id}}">
                    リンク
                  </nuxt-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  </template>

  
  
  
  <script>
  import client from '~/plugins/contentful.js'
  
  export default {
    data() {
      return {
        message: "Contentful のテスト",
      }
    },
    async asyncData() {
      const { items } = await client.getEntries({content_type: "yoshidaTest"})
      return {
        items: items
      }
    }
  }
  </script>