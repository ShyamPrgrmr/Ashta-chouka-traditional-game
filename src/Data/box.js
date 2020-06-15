class BoxData{
    constructor(){
        this.boxData = {
            boxId:0,
            player1BoxId:0, //player 1 map
            player2BoxId:0, //player 2 map
            player3BoxId:0, //player 3 map
            player4BoxId:0, //player 4 map
            p1:{
                g1:false,
                g2:false,
                g3:false,
                g4:false
            },
            p2:{
                g1:false,
                g2:false,
                g3:false,
                g4:false
            },
            p3:{
                g1:false,
                g2:false,
                g3:false,
                g4:false
            },
            p4:{
                g1:false,
                g2:false,
                g3:false,
                g4:false
            },
            iscrossed:false
        }  
    }
}
export default BoxData;