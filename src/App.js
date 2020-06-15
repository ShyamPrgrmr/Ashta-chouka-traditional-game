import React from 'react';
import './App.css';
import Box from './Component/Box';
import BoxData from './Data/box';
import DiceImage from './Component/DiceImage';
import CurrentPlayer from './Data/currentPlayer';
import MoveController from './controller/moveController';
import BoxDecoderEncoder from './controller/boxInitializer';
import lodingImg from './img/loading.gif';

class Data{
    data ={
        g1:{isOut:false,pos:0},
        g2:{isOut:false,pos:0},
        g3:{isOut:false,pos:0},
        g4:{isOut:false,pos:0},
        isKilled:false,
        playerColor:'',
        playername:'no-name'
    }
}



class App extends React.Component{
    constructor(props){
        super();
        this.myDiceNumber=0;
        this.handleDiceClick = this.handleDiceClick.bind(this);
        this.player1 = new Data().data;
        this.player2 = new Data().data;
        this.player3 = new Data().data;
        this.player4 = new Data().data;
        this.init();
        this.boxData = [25];
       
        for(let i=1;i<26;i++){
            this.boxData[i] = new BoxData().boxData;
            this.boxData[i].boxId = i;
            /*
            Box data : 

            player1BoxId:0, //player 1 map
            player2BoxId:0, //player 2 map
            player3BoxId:0, //player 3 map
            player4BoxId:0, 

            Data from the encopder : 

            { pb1: 3, pb2: 15, pb3: 11, pb4: 7 }
            */
            
            let soloData = BoxDecoderEncoder.boxEncoder(i);
            this.boxData[i].player1BoxId = soloData.pb1;
            this.boxData[i].player2BoxId = soloData.pb2;
            this.boxData[i].player3BoxId = soloData.pb3;
            this.boxData[i].player4BoxId = soloData.pb4;
            
            if(i===3  ||
               i===11 || 
               i===13 ||
               i===15 ||
               i===23){
                this.boxData[i].iscrossed = true;
               } 
               /*Some init scripts*/
               if(i===3){
                this.boxData[i].p1.g1=this.boxData[i].p1.g2=this.boxData[i].p1.g3=this.boxData[i].p1.g4=true;  
               }else if(i===11){
                this.boxData[i].p2.g1=this.boxData[i].p2.g2=this.boxData[i].p2.g3=this.boxData[i].p2.g4=true;
               }else if(i===23){
                this.boxData[i].p3.g1=this.boxData[i].p3.g2=this.boxData[i].p3.g3=this.boxData[i].p3.g4=true;
               }else if(i===15){
                this.boxData[i].p4.g1=this.boxData[i].p4.g2=this.boxData[i].p4.g3=this.boxData[i].p4.g4=true;
               }
        }

        this.boxTempData = this.boxData;
        this.state={number:0,boxdata:this.boxData,played:true,isLoad:false,againChance:false};
        this.CurrentPlayer = new CurrentPlayer();
        this.CurrentPlayer.nextPlayer();
    }
    
    timerfunction(){
        setTimeout(() => {
            this.setState({isLoad:true});
        }, 2000);
    }

    init(){
        this.player1.playerColor='red';
        this.player2.playerColor='green';
        this.player3.playerColor='yellow';
        this.player4.playerColor='blue';
    }

    handleDiceClick(){   
        if(this.state.played){
            /*dice logic*/
            let number = Math.floor(Math.random() * 10);
            if(number===9){number=1};
            if(number===5){number=1}
            if(number===6){number=2}
            if(number===7){number=3}
            if(number===0){number=1}
            this.setState({number:number},()=>{
                this.state.played=!this.state.played;
            });
        }
    }

    Allout(player,steps){
        /*g1:{isOut:false,pos:0},
        g2:{isOut:false,pos:0},
        g3:{isOut:false,pos:0},
        g4:{isOut:false,pos:0},
        isKilled:false,
        playerColor:'',
        playername:'no-name'*/

        let playerToAction = player;
        if(player===1){
            playerToAction = this.player1;
            if(steps===4){
                if(!playerToAction.g1.isOut){
                    playerToAction.g1.isOut=!playerToAction.g1.isOut;
                    this.player1 = playerToAction; 
                    return 0;
                }

            }else if(steps===8){

            }
        }
        else if(player===2){
            playerToAction = this.player2;
            if(steps===4){
                
            }
        }
        else if(player===3){
            playerToAction = this.player3;
            if(steps===4){
                
            }
        }
        else if(player===4){
            playerToAction = this.player4;
        }
    }

    movePlayerHeper(newBoxId,boxId,numSteps){
        if(newBoxId===boxId){
        }else if(numSteps===4 || numSteps===8){
            this.state.played=!this.state.played; //added for once another chance for the player to play
        }else{
           this.nextDataPlayer();
       }
    }

    playerCanMove(newBoxId,boxId){
        let data = this.state.boxdata;
        let newBoxData = data[newBoxId];
        let player = this.CurrentPlayer.returnPlayerId();
        if(newBoxData.iscrossed){
            return(true);
        }
        else{
            if(player===1){
                if(newBoxData.p1.g1 || newBoxData.p1.g2 || newBoxData.p1.g3 || newBoxData.p1.g4){
                    alert("Can't move");
                    return(false);
                }
                else{
                    return(true);
                }
            }
            else if(player===2){
                if(newBoxData.p2.g1 || newBoxData.p2.g2 || newBoxData.p2.g3 || newBoxData.p2.g4){
                    alert("Can't move");
                    return(false);
                }
                else{
                    return(true);
                }
            }else if(player===3){
                if(newBoxData.p3.g1 || newBoxData.p3.g2 || newBoxData.p3.g3 || newBoxData.p3.g4){
                    alert("Can't move");
                    return(false);
                }
                else{
                    return(true);
                }
            }else if(player===4){
                if(newBoxData.p4.g1 || newBoxData.p4.g2 || newBoxData.p4.g3 || newBoxData.p4.g4){
                    alert("Can't move");
                    return(false);
                }
                else{
                    return(true);
                }
            }
        }
    }

    killingHelper(boxData){
        //player 1
        if(boxData.p1.g1){return {pla:1,avl:1}}
        else if(boxData.p1.g2){return {pla:1,avl:2}}
        else if(boxData.p1.g3){return {pla:1,avl:3}}
        else if(boxData.p1.g4){return {pla:1,avl:4}}
        
        //player 2
        else if(boxData.p2.g1){return {pla:2,avl:1}}
        else if(boxData.p2.g2){return {pla:2,avl:2}}
        else if(boxData.p2.g3){return {pla:2,avl:3}}
        else if(boxData.p2.g4){return {pla:2,avl:4}}
        
        //player 3
        else if(boxData.p3.g1){return {pla:3,avl:1}}
        else if(boxData.p3.g2){return {pla:3,avl:2}}
        else if(boxData.p3.g3){return {pla:3,avl:3}}
        else if(boxData.p3.g4){return {pla:3,avl:4}}

        //player 4
        else if(boxData.p4.g1){return {pla:4,avl:1}}
        else if(boxData.p4.g2){return {pla:4,avl:2}}
        else if(boxData.p4.g3){return {pla:4,avl:3}}
        else if(boxData.p4.g4){return {pla:4,avl:4}}

        return({pla:false,avl:false});
    }

    setKillStatus(player){
        if(player===1){
            this.player1.isKilled=true;
            this.state.againChance=true;
        }else if(player===2){
            this.player2.isKilled=true;
            this.state.againChance=true;
        }else if(player===3){
            this.player3.isKilled=true;
            this.state.againChance=true;
        }else if(player===4){
            this.player4.isKilled=true;
            this.state.againChance=true;
        }
    }

    killing(boxData,boxId){

        if(boxData[boxId].iscrossed){
            return boxData;
        }
        else{
        let newBoxData = boxData;
        let player = this.CurrentPlayer.returnPlayerId();
        let data = this.killingHelper(newBoxData[boxId]);
        if(player===1){
            if(data.pla===2){
                if(data.avl===1){
                    newBoxData[boxId].p2.g1 = false;
                    newBoxData[11].p2.g1 = true;
                }else if(data.avl===2){
                    newBoxData[boxId].p2.g2 = false;
                    newBoxData[11].p2.g2 = true;
                }else if(data.avl===3){
                    newBoxData[boxId].p2.g3 = false;
                    newBoxData[11].p2.g3 = true;
                }else if(data.avl===4){
                    newBoxData[boxId].p2.g4 = false;
                    newBoxData[11].p2.g4 = true;
                }
                this.setKillStatus(player);
            }else if(data.pla===3){
                if(data.avl===1){
                    newBoxData[boxId].p3.g1 = false;
                    newBoxData[23].p3.g1 = true;
                }else if(data.avl===2){
                    newBoxData[boxId].p3.g2 = false;
                    newBoxData[23].p3.g2 = true;
                }else if(data.avl===3){
                    newBoxData[boxId].p3.g3 = false;
                    newBoxData[23].p3.g3 = true;
                }else if(data.avl===4){
                    newBoxData[boxId].p3.g4 = false;
                    newBoxData[23].p3.g4 = true;
                }
                this.setKillStatus(player);
            }else if(data.pla===4){
                if(data.avl===1){
                    newBoxData[boxId].p4.g1 = false;
                    newBoxData[15].p4.g1 = true;
                }else if(data.avl===2){
                    newBoxData[boxId].p4.g2 = false;
                    newBoxData[15].p4.g2 = true;
                }else if(data.avl===3){
                    newBoxData[boxId].p4.g3 = false;
                    newBoxData[15].p4.g3 = true;
                }else if(data.avl===4){
                    newBoxData[boxId].p4.g4 = false;
                    newBoxData[15].p4.g4 = true;
                }
                this.setKillStatus(player);
            }

        }
        
        else if(player===2){
            if(data.pla===1){
                if(data.avl===1){
                    newBoxData[boxId].p1.g1 = false;
                    newBoxData[3].p1.g1 = true;
                }else if(data.avl===2){
                    newBoxData[boxId].p1.g2 = false;
                    newBoxData[3].p1.g2 = true;
                }else if(data.avl===3){
                    newBoxData[boxId].p1.g3 = false;
                    newBoxData[3].p1.g3 = true;
                }else if(data.avl===4){
                    newBoxData[boxId].p1.g4 = false;
                    newBoxData[3].p1.g4 = true;
                }
                this.setKillStatus(player);
            }else if(data.pla===3){
                if(data.avl===1){
                    newBoxData[boxId].p3.g1 = false;
                    newBoxData[23].p3.g1 = true;
                }else if(data.avl===2){
                    newBoxData[boxId].p3.g2 = false;
                    newBoxData[23].p3.g2 = true;
                }else if(data.avl===3){
                    newBoxData[boxId].p3.g3 = false;
                    newBoxData[23].p3.g3 = true;
                }else if(data.avl===4){
                    newBoxData[boxId].p3.g4 = false;
                    newBoxData[23].p3.g4 = true;
                }
                this.setKillStatus(player);
            }else if(data.pla===4){
                if(data.avl===1){
                    newBoxData[boxId].p4.g1 = false;
                    newBoxData[15].p4.g1 = true;
                }else if(data.avl===2){
                    newBoxData[boxId].p4.g2 = false;
                    newBoxData[15].p4.g2 = true;
                }else if(data.avl===3){
                    newBoxData[boxId].p4.g3 = false;
                    newBoxData[15].p4.g3 = true;
                }else if(data.avl===4){
                    newBoxData[boxId].p4.g4 = false;
                    newBoxData[15].p4.g4 = true;
                }
                this.setKillStatus(player);
            }
        }
        
        else if(player===3){
            if(data.pla===2){
                if(data.avl===1){
                    newBoxData[boxId].p2.g1 = false;
                    newBoxData[11].p2.g1 = true;
                }else if(data.avl===2){
                    newBoxData[boxId].p2.g2 = false;
                    newBoxData[11].p2.g2 = true;
                }else if(data.avl===3){
                    newBoxData[boxId].p2.g3 = false;
                    newBoxData[11].p2.g3 = true;
                }else if(data.avl===4){
                    newBoxData[boxId].p2.g4 = false;
                    newBoxData[11].p2.g4 = true;
                }
                this.setKillStatus(player);
            }else if(data.pla===1){
                if(data.avl===1){
                    newBoxData[boxId].p1.g1 = false;
                    newBoxData[3].p1.g1 = true;
                }else if(data.avl===2){
                    newBoxData[boxId].p1.g2 = false;
                    newBoxData[3].p1.g2 = true;
                }else if(data.avl===3){
                    newBoxData[boxId].p1.g3 = false;
                    newBoxData[3].p1.g3 = true;
                }else if(data.avl===4){
                    newBoxData[boxId].p1.g4 = false;
                    newBoxData[3].p1.g4 = true;
                }
                this.setKillStatus(player);
            }else if(data.pla===4){
                if(data.avl===1){
                    newBoxData[boxId].p4.g1 = false;
                    newBoxData[15].p4.g1 = true;
                }else if(data.avl===2){
                    newBoxData[boxId].p4.g2 = false;
                    newBoxData[15].p4.g2 = true;
                }else if(data.avl===3){
                    newBoxData[boxId].p4.g3 = false;
                    newBoxData[15].p4.g3 = true;
                }else if(data.avl===4){
                    newBoxData[boxId].p4.g4 = false;
                    newBoxData[15].p4.g4 = true;
                }
                this.setKillStatus(player);
            }
        }
        
        else if(player===4){
            if(data.pla===2){
                if(data.avl===1){
                    newBoxData[boxId].p2.g1 = false;
                    newBoxData[11].p2.g1 = true;
                }else if(data.avl===2){
                    newBoxData[boxId].p2.g2 = false;
                    newBoxData[11].p2.g2 = true;
                }else if(data.avl===3){
                    newBoxData[boxId].p2.g3 = false;
                    newBoxData[11].p2.g3 = true;
                }else if(data.avl===4){
                    newBoxData[boxId].p2.g4 = false;
                    newBoxData[11].p2.g4 = true;
                }
                this.setKillStatus(player);
            }else if(data.pla===3){
                if(data.avl===1){
                    newBoxData[boxId].p3.g1 = false;
                    newBoxData[23].p3.g1 = true;
                }else if(data.avl===2){
                    newBoxData[boxId].p3.g2 = false;
                    newBoxData[23].p3.g2 = true;
                }else if(data.avl===3){
                    newBoxData[boxId].p3.g3 = false;
                    newBoxData[23].p3.g3 = true;
                }else if(data.avl===4){
                    newBoxData[boxId].p3.g4 = false;
                    newBoxData[23].p3.g4 = true;
                }
                this.setKillStatus(player);
            }else if(data.pla===1){
                if(data.avl===1){
                    newBoxData[boxId].p1.g1 = false;
                    newBoxData[3].p1.g1 = true;
                }else if(data.avl===2){
                    newBoxData[boxId].p1.g2 = false;
                    newBoxData[3].p1.g2 = true;
                }else if(data.avl===3){
                    newBoxData[boxId].p1.g3 = false;
                    newBoxData[3].p1.g3 = true;
                }else if(data.avl===4){
                    newBoxData[boxId].p1.g4 = false;
                    newBoxData[3].p1.g4 = true;
                }
                this.setKillStatus(player);
            }
        }
        return newBoxData;    
        }
    }

    nextDataPlayer(){
        if(this.state.againChance){
            this.state.played=!this.state.played;
            this.state.againChance=!this.state.againChance;
        }else{
            this.state.played=!this.state.played;
            this.CurrentPlayer.nextPlayer();
        }
    }

    movePlayerBySteps(boxData,boxId,playerId,numSteps){
        let killStatus=false;
        if(playerId===1){killStatus = this.player1.isKilled;}
        else if(playerId===2){killStatus = this.player2.isKilled;}
        else if(playerId===3){killStatus = this.player3.isKilled;}
        else if(playerId===4){killStatus = this.player4.isKilled;}
        const data = MoveController.movePlayer(boxData,boxId,numSteps,playerId,killStatus);
        let newBoxId = data.step.baseBoxId;
        this.boxTempData = this.state.boxdata;
        if(this.playerCanMove(newBoxId,boxId)){
            if(playerId===1){
                if(this.boxTempData[boxId].p1.g1){
                    //future call
                    this.boxTempData = this.killing(this.boxTempData,newBoxId);
                    this.boxTempData[boxId].p1.g1=false;
                    this.boxTempData[newBoxId].p1.g1=true;
                    this.setState({boxdata:this.boxTempData},()=>{ 
                    this.movePlayerHeper(newBoxId,boxId,numSteps);   
                    this.player1.g1.pos = newBoxId;
                    return;   
                    });
                }else if(this.boxTempData[boxId].p1.g2){
                    this.boxTempData = this.killing(this.boxTempData,newBoxId);
                    this.boxTempData[boxId].p1.g2=false;
                    this.boxTempData[newBoxId].p1.g2=true;
                    this.setState({boxdata:this.boxTempData},()=>{ 
                        this.movePlayerHeper(newBoxId,boxId,numSteps);
                        this.player1.g2.pos = newBoxId;
                        return;   
                    });
                }else if(this.boxTempData[boxId].p1.g3){
                    this.boxTempData = this.killing(this.boxTempData,newBoxId);
                    this.boxTempData[boxId].p1.g3=false;
                    this.boxTempData[newBoxId].p1.g3=true;
                    this.setState({boxdata:this.boxTempData},()=>{ 
                        this.movePlayerHeper(newBoxId,boxId,numSteps);
                        this.player1.g3.pos = newBoxId;
                        return;   
                    });
                }else if(this.boxTempData[boxId].p1.g4){
                    this.boxTempData = this.killing(this.boxTempData,newBoxId);
                    this.boxTempData[boxId].p1.g4=false;
                    this.boxTempData[newBoxId].p1.g4=true;
                    this.setState({boxdata:this.boxTempData},()=>{ 
                        this.movePlayerHeper(newBoxId,boxId,numSteps);
                        this.player1.g4.pos = newBoxId;
                        return;   
                    });
                }
            }
            else if(playerId===2){
                if(this.boxTempData[boxId].p2.g1){
                    this.boxTempData = this.killing(this.boxTempData,newBoxId);
                    this.boxTempData[boxId].p2.g1=false;
                    this.boxTempData[newBoxId].p2.g1=true;
                    this.setState({boxdata:this.boxTempData},()=>{ 
                        this.movePlayerHeper(newBoxId,boxId,numSteps);
                        this.player2.g1.pos = newBoxId;
                        return;   
                    });
                }else if(this.boxTempData[boxId].p2.g2){
                    this.boxTempData = this.killing(this.boxTempData,newBoxId);
                    this.boxTempData[boxId].p2.g2=false;
                    this.boxTempData[newBoxId].p2.g2=true;
                    this.setState({boxdata:this.boxTempData},()=>{ 
                        this.movePlayerHeper(newBoxId,boxId,numSteps);
                        this.player2.g2.pos = newBoxId;
                        return;   
                    });
                }else if(this.boxTempData[boxId].p2.g3){
                    this.boxTempData = this.killing(this.boxTempData,newBoxId);
                    this.boxTempData[boxId].p2.g3=false;
                    this.boxTempData[newBoxId].p2.g3=true;
                    this.setState({boxdata:this.boxTempData},()=>{ 
                        this.movePlayerHeper(newBoxId,boxId,numSteps);
                        this.player2.g3.pos = newBoxId;
                        return;   
                    });
                }else if(this.boxTempData[boxId].p2.g4){
                    this.boxTempData = this.killing(this.boxTempData,newBoxId);
                    this.boxTempData[boxId].p2.g4=false;
                    this.boxTempData[newBoxId].p2.g4=true;
                    this.setState({boxdata:this.boxTempData},()=>{ 
                        this.movePlayerHeper(newBoxId,boxId,numSteps);
                        this.player2.g4.pos = newBoxId;
                        return;   
                    });
                }
            }
            else if(playerId===3){
                if(this.boxTempData[boxId].p3.g1){
                    this.boxTempData = this.killing(this.boxTempData,newBoxId);
                    this.boxTempData[boxId].p3.g1=false;
                    this.boxTempData[newBoxId].p3.g1=true;
                    this.setState({boxdata:this.boxTempData},()=>{ 
                        this.movePlayerHeper(newBoxId,boxId,numSteps);
                        this.player3.g1.pos = newBoxId;
                        return;   
                    });
                }else if(this.boxTempData[boxId].p3.g2){
                    this.boxTempData = this.killing(this.boxTempData,newBoxId);
                    this.boxTempData[boxId].p3.g2=false;
                    this.boxTempData[newBoxId].p3.g2=true;
                    this.setState({boxdata:this.boxTempData},()=>{ 
                        this.movePlayerHeper(newBoxId,boxId,numSteps);
                        this.player3.g2.pos = newBoxId;
                        return;   
                    });
                }else if(this.boxTempData[boxId].p3.g3){
                    this.boxTempData = this.killing(this.boxTempData,newBoxId);
                    this.boxTempData[boxId].p3.g3=false;
                    this.boxTempData[newBoxId].p3.g3=true;
                    this.setState({boxdata:this.boxTempData},()=>{ 
                        this.movePlayerHeper(newBoxId,boxId,numSteps);
                        this.player3.g3.pos = newBoxId;
                        return;   
                    });
                }else if(this.boxTempData[boxId].p3.g4){
                    this.boxTempData = this.killing(this.boxTempData,newBoxId);
                    this.boxTempData[boxId].p3.g4=false;
                    this.boxTempData[newBoxId].p3.g4=true;
                    this.setState({boxdata:this.boxTempData},()=>{ 
                        this.movePlayerHeper(newBoxId,boxId,numSteps);
                        this.player3.g4.pos = newBoxId;
                        return;   
                    });
                }
            }
            else if(playerId===4){
                if(this.boxTempData[boxId].p4.g1){
                    this.boxTempData = this.killing(this.boxTempData,newBoxId);
                    this.boxTempData[boxId].p4.g1=false;
                    this.boxTempData[newBoxId].p4.g1=true;
                    this.setState({boxdata:this.boxTempData},()=>{ 
                        this.movePlayerHeper(newBoxId,boxId,numSteps);
                        this.player4.g1.pos = newBoxId;
                        return;   
                    });
                }else if(this.boxTempData[boxId].p4.g2){
                    this.boxTempData = this.killing(this.boxTempData,newBoxId);
                    this.boxTempData[boxId].p4.g2=false;
                    this.boxTempData[newBoxId].p4.g2=true;
                    this.setState({boxdata:this.boxTempData},()=>{ 
                        this.movePlayerHeper(newBoxId,boxId,numSteps);
                        this.player4.g2.pos = newBoxId;
                        return;   
                    });
                }else if(this.boxTempData[boxId].p4.g3){
                    this.boxTempData = this.killing(this.boxTempData,newBoxId);
                    this.boxTempData[boxId].p4.g3=false;
                    this.boxTempData[newBoxId].p4.g3=true;
                    this.setState({boxdata:this.boxTempData},()=>{ 
                        this.movePlayerHeper(newBoxId,boxId,numSteps);
                        this.player4.g3.pos = newBoxId;
                        return;   
                    });
                }else if(this.boxTempData[boxId].p4.g4){
                    this.boxTempData = this.killing(this.boxTempData,newBoxId);
                    this.boxTempData[boxId].p4.g4=false;
                    this.boxTempData[newBoxId].p4.g4=true;
                    this.setState({boxdata:this.boxTempData},()=>{ 
                        this.movePlayerHeper(newBoxId,boxId,numSteps);
                        this.player4.g4.pos = newBoxId;
                        return;   
                    });
                }
            }
        }else{
            return;
        }
    }

    handleBoxClick = (childBoxId)=>{
        let data = this.state.boxdata[childBoxId];
        let playerId = this.CurrentPlayer.returnPlayerId();

        if(playerId===1){
            if(data.p1.g1 || data.p1.g2 || data.p1.g3 || data.p1.g4){
                this.movePlayerBySteps(data,childBoxId,playerId,this.state.number);
            }
            else{
                alert("Not found data. Please select another box");
            }
        }else if(playerId===2){
            if(data.p2.g1 || data.p2.g2 || data.p2.g3 || data.p2.g4){
                this.movePlayerBySteps(data,childBoxId,playerId,this.state.number);
            }
            else{
                alert("Not found data. Please select another box");
            }
        }else if(playerId===3){
            if(data.p3.g1 || data.p3.g2 || data.p3.g3 || data.p3.g4){
                this.movePlayerBySteps(data,childBoxId,playerId,this.state.number);
            }
            else{
                alert("Not found data. Please select another box");
            }
        }else if(playerId===4){
            if(data.p4.g1 || data.p4.g2 || data.p4.g3 || data.p4.g4){
                this.movePlayerBySteps(data,childBoxId,playerId,this.state.number);
            }
            else{
                alert("Not found data. Please select another box");
            }
        }
       
    }

    render(){
        if(!this.state.isLoad){
            this.timerfunction();
            return(<div className="loading">
                <img src={lodingImg}></img>
            </div>);
        }
        else{
            return(
                <div class="container" className={this.CurrentPlayer.returnPlayerClass()}>
                    <div className="row">
                        <Box props={{iscrossed:false,boxSoloData : this.state.boxdata[1]}}  handleBoxClick={this.handleBoxClick}/>
                        <Box props={{iscrossed:false,boxSoloData : this.state.boxdata[2]}} handleBoxClick={this.handleBoxClick}/>
                        <Box props={{iscrossed:true,boxSoloData : this.state.boxdata[3]}} handleBoxClick={this.handleBoxClick}/>
                        <Box props={{iscrossed:false,boxSoloData : this.state.boxdata[4]}} handleBoxClick={this.handleBoxClick}/>
                        <Box props={{iscrossed:false,boxSoloData : this.state.boxdata[5]}} handleBoxClick={this.handleBoxClick}/>
                    </div>
                    <div className="row">
                        <Box props={{iscrossed:false,boxSoloData : this.state.boxdata[6]}} handleBoxClick={this.handleBoxClick}/>
                        <Box props={{iscrossed:false,boxSoloData : this.state.boxdata[7]}} handleBoxClick={this.handleBoxClick}/>
                        <Box props={{iscrossed:false,boxSoloData : this.state.boxdata[8]}} handleBoxClick={this.handleBoxClick}/>
                        <Box props={{iscrossed:false,boxSoloData : this.state.boxdata[9]}} handleBoxClick={this.handleBoxClick}/>
                        <Box props={{iscrossed:false,boxSoloData : this.state.boxdata[10]}} handleBoxClick={this.handleBoxClick}/>
                    </div>
                    <div className="row">
                        <Box props={{iscrossed:true,boxSoloData : this.state.boxdata[11]}} handleBoxClick={this.handleBoxClick}/>
                        <Box props={{iscrossed:false,boxSoloData : this.state.boxdata[12]}} handleBoxClick={this.handleBoxClick}/>
                        <Box props={{iscrossed:true,boxSoloData : this.state.boxdata[13]}} handleBoxClick={this.handleBoxClick}/>
                        <Box props={{iscrossed:false,boxSoloData : this.state.boxdata[14]}} handleBoxClick={this.handleBoxClick}/>
                        <Box props={{iscrossed:true,boxSoloData : this.state.boxdata[15]}} handleBoxClick={this.handleBoxClick}/>
                    </div>
                    <div className="row">
                        <Box props={{iscrossed:false,boxSoloData : this.state.boxdata[16]}} handleBoxClick={this.handleBoxClick}/>
                        <Box props={{iscrossed:false,boxSoloData : this.state.boxdata[17]}} handleBoxClick={this.handleBoxClick}/>
                        <Box props={{iscrossed:false,boxSoloData : this.state.boxdata[18]}} handleBoxClick={this.handleBoxClick}/>
                        <Box props={{iscrossed:false,boxSoloData : this.state.boxdata[19]}} handleBoxClick={this.handleBoxClick}/>
                        <Box props={{iscrossed:false,boxSoloData : this.state.boxdata[20]}} handleBoxClick={this.handleBoxClick}/>
                    </div>
                    <div className="row">
                        <Box props={{iscrossed:false,boxSoloData : this.state.boxdata[21]}} handleBoxClick={this.handleBoxClick}/>
                        <Box props={{iscrossed:false,boxSoloData : this.state.boxdata[22]}} handleBoxClick={this.handleBoxClick}/>
                        <Box props={{iscrossed:true,boxSoloData : this.state.boxdata[23]}} handleBoxClick={this.handleBoxClick}/>
                        <Box props={{iscrossed:false,boxSoloData : this.state.boxdata[24]}} handleBoxClick={this.handleBoxClick}/>
                        <Box props={{iscrossed:false,boxSoloData : this.state.boxdata[25]}} handleBoxClick={this.handleBoxClick}/>
                    </div>
                    
                    <div className="dice">
                        <div className='dice-number' onClick={this.handleDiceClick} className={this.CurrentPlayer.returnPlayerClass()}>
                            <div className="number" className={this.CurrentPlayer.returnPlayerClass()}>Player : {this.CurrentPlayer.returnPlayerId()}</div>
                            <div className="image" className={this.CurrentPlayer.returnPlayerClass()}>
                                   <DiceImage props={{number:this.state.number}}/>
                            </div>
                        </div>
                    </div>
                </div>
                );
        }
    }
}

export default App;