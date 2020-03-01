<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    $dir = "../projects"; //path

    $list = array(); //main array

    if(is_dir($dir)){
        if($dh = opendir($dir)){
            while(($file = readdir($dh)) != false){

                if($file == "." or $file == ".."){
                    //...
                } else {
                    $list3 = array(
                        'url' => $file);
                        array_push($list, $list3);
                }
            }
        }

        $return_array = array('photos'=> $list);

        echo json_encode($return_array);
    }
?>