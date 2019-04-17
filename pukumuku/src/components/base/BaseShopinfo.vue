<template>
  <v-data-table
    :items="desserts"
    class="elevation-1"
    hide-actions
    hide-headers

  >
    <template v-slot:items="props">
      <td class="text-xs-left">{{ props.item.title }}</td>
      <td class="text-xs-left">{{ props.item.content }}</td>
      <td class="text-xs-left">{{ props.item.content2 }}</td>
    </template>
  </v-data-table>
</template>
<script>
export default {
  data () {
    return {
      desserts: [
        {
          title: '店名',
          content: 'パン工房　プクムク'
        },
        {
          title: '予約・お問い合わせ',
          content: '03-3380-8679'
        },
        {
          title: '営業時間',
          content: '6:30~18:00 (売り切れしだい終了)'
        },
        {
          title: '定休日',
          content: '日曜・祝日　(GWやお盆の定休日はインスタグラムから確認ください)'
        },
        {
          title: '住所',
          content: '〒164-0014 東京都中野区南台4-6-4'
        },
      ]
    }
  }
}
</script>