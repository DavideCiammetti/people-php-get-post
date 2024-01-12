const { createApp } = Vue;

createApp({
  data() {
    return {
      data: [],
      show: false,
      apiUrl: './script.php',
      allData: null,
      // ogetti post
      nName:'', 
      nSurname:'',
      nAge:'', 
      nGender:'',
    };
  },

  methods:{
    // chiamata axios database
      getData(){
        axios.get(this.apiUrl).then((response)=>{
          this.data = response.data;
        });
      },
      // chiamata get per prendere e mostrare dati in base all'indice 
      getAllData(index){
        axios.get(this.apiUrl, { params: { index } }).then((response) => {
          this.allData = response.data;
          console.log(this.allData);
        });
      },

      postAllData(){
        const param = {
          create: 1,
          newName: this.nName,
          newSurname: this.nSurname,
          newAge: this.nAge,
          newGender: this.nGender,
        };
        axios.post(this.apiUrl, param,{ 
          headers:{
            'Content-Type': 'multipart/form-data',
          },
         }).then((response)=>console.log(response));
      },
  },

  created(){
    this.getData();
  },
}).mount('#app');