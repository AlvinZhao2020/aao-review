const t = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        },
      ],
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        },
      ],
    },
  ],
};
// dfs
const dfs =(root)=>{
    console.log(root.val)
    root.children.forEach(element => {
        dfs(element)
    });
   
} 

dfs(t)
// bfs
const bfs=(root)=>{
    let queue = [root]
    while(queue.length>0){
        let node = queue.shift()
        console.log(node.val)
        node.children.forEach(c=>{
            queue.push(c)
        })
    }
}

bfs(t)