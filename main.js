const { createApp } = Vue;

createApp({
  data() {
    return {
      // collegamento api php
      apiUrl: './script.php',
      // oggetti get
      data: [],
      allData: null,
      // oggetti post
      nName:'', 
      nSurname:'',
      nAge:'', 
      nGender:'',
      // mostra button
      show: false,
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
      // chiamata post
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
         }).then((response)=>{
          this.data = response.data;
          console.log(this.data);
         });
      },
      showButton(index){
        this.data.forEach((element, i) => {
            if(index === i){
              element.show = !element.show;
              return element.show;
            }
        });
      },
  },

  created(){
    this.getData();
  },
}).mount('#app');