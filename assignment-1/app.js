const App = Vue.createApp({
    data(){
        return{
            colorval : 'white',
            textcolor : 'black',
            alllogs : [
                {
                    date : '2022-02-01',
                    day : 'Monday',
                    section : 1,
                    gitRepo : 'https://github.com/',
                    pregress: 80,
                    topics : ['overvieew' , 'lifecycle' , 'events']
                },
                {
                    date : '2022-02-02',
                    day : 'Tuesday',
                    section : 2,
                    gitRepo : 'https://github.com/',
                    pregress: 40,
                    topics : ['mehtod','computed','events','watchs','propes','styling']
                },
                {
                    date : '2022-02-03',
                    day : 'Wednesday',
                    section : 3,
                    gitRepo : 'https://github.com/',
                    pregress: 10,
                    topics : ['overvieew','lifecycle','events','watchs','propes','styling','props']
                },
            ]
        }
    },
    methods: {
        
        updateColor(event){
            let color = event.target.value
            if(color == 'red' || color == 'green' || color == 'blue'){
                this.textcolor = 'white';
            }
            else{
                this.textcolor = 'black';
            }
            this.colorval = color; 
            console.log(this.colorval)

        }
        
    },
    computed:{
       
       col(){
        let l = this.alllogs
           let max2=0;      
           for(let i=0;i<l.length;i++){
               
               if(l[i].topics.length>max2){
                   max2 = l[i].topics.length
                   
               }   
           }
          return max2
       }
       
       
    }
});

App.mount('#app')