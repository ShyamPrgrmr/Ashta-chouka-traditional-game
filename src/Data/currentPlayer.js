class CurrentPlayer{
    constructor(){
        this.player = 0;
        this.currentClass="player1";
        this.statusPlayed=false;
    }
    returnPlayedStatus(){
        return(this.statusPlayed);
    }
    returnPlayerClass(){
        return(this.currentClass);
    }
    returnPlayerId(){
        return(this.player);
    }
    nextPlayer(){
        if(this.player===4){
            this.player=1;
            this.currentClass='player'+this.player;
        }
        else{
            this.player+=1;
            this.currentClass='player'+this.player;
        }
    }
    changePlayedStatus(){
        this.statusPlayed = !this.statusPlayed;
    }
}

export default CurrentPlayer;