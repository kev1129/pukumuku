<template>
  <v-data-table
    :items="desserts"
    class="elevation-1 data"
    hide-actions
    hide-headers
  >
    <template v-slot:items="props">
      <td class="text-xs-left data_text">{{ props.item.name }}</td>
      <td class="text-xs-left data_text">{{ props.item.info }}</td>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        desserts: [
          {
            name: '店舗名',
            info: 'パン工房　プクムク',
          },
          {
            name: '営業時間',
            info: '6:30～18:00',
          },
          {
            name: '予約・お問い合わせ',
            info: '03-3380-8679',
          },
          {
            name: '休業日',
            info: '日曜・祝日',
          },
          {
            name: '住所',
            info: '東京都中野区南台4-6-4',
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.data {
  // border: 1px solid #000;
}
.data_text {
  font-weight: bold;
  font-size: 1.1rem;
}
</style>
