const setofWords=["She did a happy dance because all of the socks from the dryer matched.","There's no reason a hula hoop can't also be a circus ring.","Green should have smelled more tranquil, but somehow it just tasted rotten.",
"Green should have smelled more tranquil, but somehow it just tasted rotten.","He shaved the peach to prove a point.","Even though he thought the world was flat he didn’t see the irony of wanting to travel around the world."] ;

          const  msg = document.getElementById('msg');
          const typeWords = document.getElementById('mywords');
          const btn = document.getElementById('btn');
          let startTime,endTime;


          const playGame = () =>{
            let randomNumber = Math.floor(Math.random()*setofWords.length);
            msg.innerText = setofWords[randomNumber];
            let date = new Date();
            startTime = date.getTime();
            btn.innerText = "Done";
          }

          const endPlay = () => {
            let date = new Date();
            endTime = date.getTime();
            let totalTime = ((endTime-startTime)/1000);
            

            let totalStr = typeWords.value;
            let wordCount = wordCounter(totalStr);

            let speed = Math.round((wordCount/totalTime)*60);

            let finalMsg = "You typed total at " + speed + " words per minutes ";

            finalMsg += compareWords(msg.innerText,totalStr);

            msg.innerText = finalMsg;


          }

          const compareWords = (str1,str2) =>{
            let words1 = str1.split(" ");
            let words2 = str2.split(" ");
            let cnt =0;

            words1.forEach(function(item,index){
                if(item == words2[index]){
                    cnt++;
                }
            })

            let errorWords = (words1.length-cnt);
            return (cnt+" correct out of " + words1.length + " words and the total number of error are " + errorWords + ".");
          }

          const wordCounter = (str) => {
            let response = str.split(" ").length;
           
            return response;

          }
          btn.addEventListener('click',function(){
            if(this.innerText == 'Start'){
                typeWords.disabled = false;
                playGame();
            }else if(this.innerText == "Done"){
                typeWords.disabled = true;
                btn.innerText = "Start";
                endPlay();
            }
               
          })
