class BoxDecoderEncoder{
    //this method will return playerid in reference to the baseboxid 
    static boxEncoder(baseBoxId){
        if(baseBoxId===1){
            return({
                pb1:3,
                pb2:15,
                pb3:11,
                pb4:7
            });
        }
        else if(baseBoxId===2){
            return({
                pb1:2,
                pb2:14,
                pb3:10,
                pb4:6
            });
        }
        else if(baseBoxId===3){
            return({
                pb1:1,
                pb2:13,
                pb3:9,
                pb4:5
            });
        }
        else if(baseBoxId===4){
            return({
                pb1:16,
                pb2:12,
                pb3:8,
                pb4:4
            });
        }
        else if(baseBoxId===5){
            return({
                pb1:15,
                pb2:11,
                pb3:7,
                pb4:3
            });
        }
        else if(baseBoxId===6){
            return({
                pb1:4,
                pb2:16,
                pb3:12,
                pb4:8
            });
        }
        else if(baseBoxId===7){
            return({
                pb1:23,
                pb2:17,
                pb3:19,
                pb4:21
            });
        }
        else if(baseBoxId===8){
            return({
                pb1:24,
                pb2:18,
                pb3:20,
                pb4:22
            });
        }
        else if(baseBoxId===9){
            return({
                pb1:17,
                pb2:19,
                pb3:21,
                pb4:23
            });
        }
        else if(baseBoxId===10){
            return({
                pb1:14,
                pb2:10,
                pb3:6,
                pb4:2
            });
        }
        else if(baseBoxId===11){
            return({
                pb1:5,
                pb2:1,
                pb3:13,
                pb4:9
            });
        }
        else if(baseBoxId===12){
            return({
                pb1:22,
                pb2:24,
                pb3:18,
                pb4:20
            });
        }
        else if(baseBoxId===13){
            return({
                pb1:25,
                pb2:25,
                pb3:25,
                pb4:25
            });
        }
        else if(baseBoxId===14){
            return({
                pb1:18,
                pb2:20,
                pb3:22,
                pb4:24
            });
        }
        else if(baseBoxId===15){
            return({
                pb1:13,
                pb2:9,
                pb3:5,
                pb4:1
            });
        }
        else if(baseBoxId===16){
            return({
                pb1:6,
                pb2:2,
                pb3:14,
                pb4:10
            });
        }
        else if(baseBoxId===17){
            return({
                pb1:21,
                pb2:23,
                pb3:17,
                pb4:19
            });
        }
        else if(baseBoxId===18){
            return({
                pb1:20,
                pb2:22,
                pb3:24,
                pb4:18
            });
        }
        else if(baseBoxId===19){
            return({
                pb1:19,
                pb2:21,
                pb3:23,
                pb4:17
            });
        }
        else if(baseBoxId===20){
            return({
                pb1:12,
                pb2:8,
                pb3:4,
                pb4:16
            });
        }
        else if(baseBoxId===21){
            return({
                pb1:7,
                pb2:3,
                pb3:15,
                pb4:11
            });
        }
        else if(baseBoxId===22){
            return({
                pb1:8,
                pb2:4,
                pb3:16,
                pb4:12
            });
        }
        else if(baseBoxId===23){
            return({
                pb1:9,
                pb2:5,
                pb3:1,
                pb4:13
            });
        }
        else if(baseBoxId===24){
            return({
                pb1:10,
                pb2:6,
                pb3:2,
                pb4:14
            });
        }
        else if(baseBoxId===25){
            return({
                pb1:11,
                pb2:7,
                pb3:3,
                pb4:15
            });
        }
    }
    //this method will return baseboxid in reference to the playerid
    static boxDecode(playerId , boxId){
        if(playerId==1){
            if(boxId==1){return({baseBoxId:3})}
            else if(boxId===2){return({baseBoxId:2})}
            else if(boxId===3){return({baseBoxId:1})}
            else if(boxId===4){return({baseBoxId:6})}
            else if(boxId===5){return({baseBoxId:11})}
            else if(boxId===6){return({baseBoxId:16})}
            else if(boxId===7){return({baseBoxId:21})}
            else if(boxId===8){return({baseBoxId:22})}
            else if(boxId===9){return({baseBoxId:23})}
            else if(boxId===10){return({baseBoxId:24})}
            else if(boxId===11){return({baseBoxId:25})}
            else if(boxId===12){return({baseBoxId:20})}
            else if(boxId===13){return({baseBoxId:15})}
            else if(boxId===14){return({baseBoxId:10})}
            else if(boxId===15){return({baseBoxId:5})}
            else if(boxId===16){return({baseBoxId:4})}
            else if(boxId===17){return({baseBoxId:9})}
            else if(boxId===18){return({baseBoxId:14})}
            else if(boxId===19){return({baseBoxId:19})}
            else if(boxId===20){return({baseBoxId:18})}
            else if(boxId===21){return({baseBoxId:17})}
            else if(boxId===22){return({baseBoxId:12})}
            else if(boxId===23){return({baseBoxId:7})}
            else if(boxId===24){return({baseBoxId:8})}
            else if(boxId===25){return({baseBoxId:13})}
        }
        else if(playerId==2){
            if(boxId===1){return({baseBoxId:11})}
            else if(boxId===2){return({baseBoxId:16})}
            else if(boxId===3){return({baseBoxId:21})}
            else if(boxId===4){return({baseBoxId:22})}
            else if(boxId===5){return({baseBoxId:23})}
            else if(boxId===6){return({baseBoxId:24})}
            else if(boxId===7){return({baseBoxId:25})}
            else if(boxId===8){return({baseBoxId:20})}
            else if(boxId===9){return({baseBoxId:15})}
            else if(boxId===10){return({baseBoxId:10})}
            else if(boxId===11){return({baseBoxId:5})}
            else if(boxId===12){return({baseBoxId:4})}
            else if(boxId===13){return({baseBoxId:3})}
            else if(boxId===14){return({baseBoxId:2})}
            else if(boxId===15){return({baseBoxId:1})}
            else if(boxId===16){return({baseBoxId:6})}
            else if(boxId===17){return({baseBoxId:7})}
            else if(boxId===18){return({baseBoxId:8})}
            else if(boxId===19){return({baseBoxId:9})}
            else if(boxId===20){return({baseBoxId:14})}
            else if(boxId===21){return({baseBoxId:19})}
            else if(boxId===22){return({baseBoxId:18})}
            else if(boxId===23){return({baseBoxId:17})}
            else if(boxId===24){return({baseBoxId:12})}
            else if(boxId===25){return({baseBoxId:13})}
        }
        else if(playerId==3){
            if(boxId===1){return({baseBoxId:23})}
            else if(boxId===2){return({baseBoxId:24})}
            else if(boxId===3){return({baseBoxId:25})}
            else if(boxId===4){return({baseBoxId:20})}
            else if(boxId===5){return({baseBoxId:15})}
            else if(boxId===6){return({baseBoxId:10})}
            else if(boxId===7){return({baseBoxId:5})}
            else if(boxId===8){return({baseBoxId:4})}
            else if(boxId===9){return({baseBoxId:3})}
            else if(boxId===10){return({baseBoxId:2})}
            else if(boxId===11){return({baseBoxId:1})}
            else if(boxId===12){return({baseBoxId:6})}
            else if(boxId===13){return({baseBoxId:11})}
            else if(boxId===14){return({baseBoxId:16})}
            else if(boxId===15){return({baseBoxId:21})}
            else if(boxId===16){return({baseBoxId:22})}
            else if(boxId===17){return({baseBoxId:17})}
            else if(boxId===18){return({baseBoxId:12})}
            else if(boxId===19){return({baseBoxId:7})}
            else if(boxId===20){return({baseBoxId:8})}
            else if(boxId===21){return({baseBoxId:9})}
            else if(boxId===22){return({baseBoxId:14})}
            else if(boxId===23){return({baseBoxId:19})}
            else if(boxId===24){return({baseBoxId:18})}
            else if(boxId===25){return({baseBoxId:13})}
        }
        else if(playerId==4){
            if(boxId===1){return({baseBoxId:15})}
            else if(boxId===2){return({baseBoxId:10})}
            else if(boxId===3){return({baseBoxId:5})}
            else if(boxId===4){return({baseBoxId:4})}
            else if(boxId===5){return({baseBoxId:3})}
            else if(boxId===6){return({baseBoxId:2})}
            else if(boxId===7){return({baseBoxId:1})}
            else if(boxId===8){return({baseBoxId:6})}
            else if(boxId===9){return({baseBoxId:11})}
            else if(boxId===10){return({baseBoxId:16})}
            else if(boxId===11){return({baseBoxId:21})}
            else if(boxId===12){return({baseBoxId:22})}
            else if(boxId===13){return({baseBoxId:23})}
            else if(boxId===14){return({baseBoxId:24})}
            else if(boxId===15){return({baseBoxId:25})}
            else if(boxId===16){return({baseBoxId:20})}
            else if(boxId===17){return({baseBoxId:19})}
            else if(boxId===18){return({baseBoxId:18})}
            else if(boxId===19){return({baseBoxId:17})}
            else if(boxId===20){return({baseBoxId:12})}
            else if(boxId===21){return({baseBoxId:7})}
            else if(boxId===22){return({baseBoxId:8})}
            else if(boxId===23){return({baseBoxId:9})}
            else if(boxId===24){return({baseBoxId:14})}
            else if(boxId===25){return({baseBoxId:13})}
        }
    }
}
export default BoxDecoderEncoder