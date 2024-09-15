function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/d9BC74WyA/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error) {
        console.error(error);
        return;
    }

    let randomNumberR = Math.floor(Math.random() * 255) + 1;
    let randomNumberG = Math.floor(Math.random() * 255) + 1;
    let randomNumberB = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear: ' + results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy: ' + (results[0].confidence * 100).toFixed(2) + "%";
    
    document.getElementById("result_label").style.color = `rgb(${randomNumberR}, ${randomNumberG}, ${randomNumberB})`;
    document.getElementById("result_confidence").style.color = `rgb(${randomNumberR}, ${randomNumberG}, ${randomNumberB})`;
}
