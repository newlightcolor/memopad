<template>
  <div class="home">
    <ul v-if="hasMemos">
      <li v-for="(memo) in memos" :key="memo.id">
        {{ memo.title }}
        <router-link :to="{ name: 'edit', params: { id: memo.id }}">
          <button>編集</button>
        </router-link>
        <button @click="deleteMemo(memo.id)">削除</button>
      </li>
    </ul>
    <p v-else>メモはありません。</p>
  </div>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

li a {
  color: #999;
  text-decoration: none;
}

li button {
  margin: 0 5px;
}
</style>

<script>
export default {
  name: 'HomeView',
  computed: {
    hasMemos(){
      return this.$store.getters.getCount
    },
    memos () {
      return this.$store.getters.getMemos
    },
  },
  methods: {
    deleteMemo(id) {
      this.$store.commit('deleteMemo', id)
    }
  }
}
</script>