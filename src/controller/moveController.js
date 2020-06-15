import './boxInitializer';
import BoxDecoderEncoder from './boxInitializer';

class MoveController {
    /*
    player1BoxId: 1
    player2BoxId: 13
    player3BoxId: 9
    player4BoxId: 5
    */
    
    static movePlayer(boxData,boxId,steps,player,killStatus){

        if(boxId===13){
            return({step:{baseBoxId:boxId}});
        }

       if(player===1){
        let plPos = boxData.player1BoxId;
        let nextStep = plPos+steps;
        let relPos = BoxDecoderEncoder.boxDecode(player,nextStep);
        if(nextStep>=17){
            if(!killStatus){
                return({step:{baseBoxId:boxId}});
            }
            else{
                return({step:relPos});
            }
        } 
        return({step:relPos});
       }
       else if(player===2){
        let plPos = boxData.player2BoxId;
        let nextStep = plPos+steps;
        let relPos = BoxDecoderEncoder.boxDecode(player,nextStep);
        if(nextStep>=17){
            if(!killStatus){
                return({step:{baseBoxId:boxId}});
            }
            else{

                return({step:relPos});
            }
        }
        return({step:relPos});
       }
       else if(player===3){
        let plPos = boxData.player3BoxId;
        let nextStep = plPos+steps;
        let relPos = BoxDecoderEncoder.boxDecode(player,nextStep);
        if(nextStep>=17){
            if(!killStatus){
                return({step:{baseBoxId:boxId}});
            }
            else{

                return({step:relPos});
            }
        }
        return({step:relPos});
       }else if(player===4){
        let plPos = boxData.player4BoxId;
        let nextStep = plPos+steps;
        let relPos = BoxDecoderEncoder.boxDecode(player,nextStep);
        if(nextStep>=17){
            if(!killStatus){
                return({step:{baseBoxId:boxId}});
            }
            else{

                return({step:relPos});
            }
        }
        return({step:relPos});
       }
    }
}

export default MoveController;