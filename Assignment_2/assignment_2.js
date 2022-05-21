/*Assignment #2 - Algo - Best Velocity

Team “Pliant Core” works following the SCRUM methodology. Their sprints are in a time interval
of 2 weeks but they have issues finding out when they were most productive. Given the
completed story points (results) from previous sprints, find the sequence of 3 consecutive
sprints that gives the best total velocity of the team.

Requirements:
● Write a script that accepts the results of the team as an input and outputs the sequence
of the 3 consecutive sprints which have the best total velocity and the sum of the
completed story points.
● If the input contains less than 3 sprints, throw an error.
● If there is more than 1 best sequence, output the last one. 

Author: Kovalkov Dmytro
For Pliant Frontend Internship
*/

let inputArray = [24, 2, 2022, 21, 5, 2022];

function bestSequence(array){
    let max = 0;
    let sequence = '';

    if(array.length < 3){
        console.log('error');
        return;
    }

    for(let i = 1; i < array.length; i++){
        sum = array[i-1] + array[i] + array[i+1];
    
        if(sum >= max) {
            max = sum;
            sequence = array[i-1] + ", " + array[i] + ", " + array[i+1];
        }
    }
    let answer = `sequence: [${sequence}], sum: ${max}`;

    console.log(answer);
}

bestSequence(inputArray);