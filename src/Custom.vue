<template>
<div>
  <h1>
  Hello Sylwuchaa !!!
  </h1>
  <h2>
  Trololololo
  </h2>
  <ul>
  <li v-for="comment in comments" class="comments" :key="comment.id">
    <p>{{ comment.name }}</p>
    <p>{{comment.text }}</p>
  </li>
  </ul>
</div>  
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      comments: [
        {
          id: 243534532,
          name: "Sylwuchaa",
          text: "uczymy się Vue i testuejmy derektywy"
        },
        {
          id: 457457845,
          name: "Justyna",
          text: "znowu siedzisz cały dzień przed komputerem"
        },
        {
          id: 587586,
          name: "Badlik",
          text: "ciśnij ucz się, będzie dobrze"
        },
        {
          id: 74646439349,
          name: "Wujo",
          text: "umiesz już map, filter i reduce :P ??"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
h1 {
  color: #ffaabb;
  margin-top: 300px;
  margin-left: 100px;
  letter-spacing: 10px;
}
.comments {
  background-color: #eee;
  padding: 20px;
  margin-bottom: 10px;
  list-style: none;
}
p:first-child {
  font-weight: bold;
}
p:last-child {
  font-size: 2rem;
}
</style>


</style>
