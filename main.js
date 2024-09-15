// Initialize sound classifier and sound visualizer
function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/d9BC74WyA/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
    initializeSoundVisualizer();
}

// Handle sound classification results
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
}

// Dynamically change alien images based on sound label
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

// Initialize a basic sound visualizer
function initializeSoundVisualizer() {
    const canvas = document.getElementById('sound-visualizer');
    const ctx = canvas.getContext('2d');

    function drawVisualizer() {
        const width = canvas.width;
        const height = canvas.height;
        ctx.clearRect(0, 0, width, height);

        ctx.fillStyle = '#00bcd4';
        ctx.fillRect(0, height / 2 - 10, width, 20);

        requestAnimationFrame(drawVisualizer);
    }

    drawVisualizer();
}
