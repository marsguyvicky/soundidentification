function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/d9BC74WyA/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
        return;
    }

    let label = results[0].label;
    let confidence = (results[0].confidence * 100).toFixed(2);
    
    document.getElementById("result_label").innerHTML = 'I can hear: ' + label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy: ' + confidence + "%";
    
    changeAlienImage(label);
    visualizeSound();
}

function changeAlienImage(label) {
    let img1 = document.getElementById('alien1');
    let img2 = document.getElementById('alien2');
    let img3 = document.getElementById('alien3');
    let img4 = document.getElementById('alien4');

    if (label == "Clap") {
        img1.src = 'aliens-01.gif';
        img2.src = 'aliens-02.png';
        img3.src = 'aliens-03.png';
        img4.src = 'aliens-04.png';
    } else if (label == "Drum Roll") {
        img1.src = 'aliens-01.png';
        img2.src = 'aliens-02.gif';
        img3.src = 'aliens-03.png';
        img4.src = 'aliens-04.png';
    } else if (label == "Snap") {
        img1.src = 'aliens-01.png';
        img2.src = 'aliens-02.png';
        img3.src = 'aliens-03.gif';
        img4.src = 'aliens-04.png';
    } else {
        img1.src = 'aliens-01.png';
        img2.src = 'aliens-02.png';
        img3.src = 'aliens-03.png';
        img4.src = 'aliens-04.gif';
    }
}

function visualizeSound() {
    // Add sound visualizer logic here (optional)
}
