<?php

    // prendo i dati da json
    $database = file_get_contents(__DIR__.'/data.json');

    // trasformo i dati in php
    $people = json_decode($database);

    $result = $people;

    if(isset($_GET['index']) && $_GET['index'] !== ''){

        $index = $_GET['index'];

        $result = $people[$index];

       header('Content-Type: application/json');
       echo json_encode($result);

       die;
    }




    // creo nuovi elementi per il mio db 
    if(isset($_POST['create'])){
        
        $newName = $_POST['newName']; 
        $newSurname = $_POST['newSurname'];
        $newAge = $_POST['newAge'];
        $newGender = $_POST['newGender'];

        $newData = [
            'name'=> $newName,
            'surname'=>  $newSurname,
            'age'=>  $newAge,
            'gender'=> $newGender,
        ];

        $people[] = $newData;

        // inserisco i dati nel json codificandoli in json 
        file_put_contents('data.json',json_encode($people));
    }



    // li riporto in json
    header('Content-Type: application/json');
    echo json_encode($people);