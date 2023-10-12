var f = function(relsolve, reject) {
    // console.log("vinh oc cho")
    //relsolve();

    reject();

}

var promise = new Promise(f);
promise

    .then(

    function() {

        console.log('1!');

    }

)

.catch(

    function() {

        console.log('2!');

    }

)

.then(

        function() {

            console.log('3!');

        }

    )
    // promise
    //     .then(
    //         function() {
    //             console.log('Successful!');
    //         }
    //     )
    //     .catch(
    //         function() {

//             console.log('UnSuccessful!');

//         }

//     )

// .finally(

//     function() {

//         console.log('Finally!');

//     }

// );