document.querySelector('#marker').addEventListener('markerFound', () => {
    const elementsToShow = [
        'background-video', 
        'model-above-video', 
        'right-side-model', 
        'left-side-image', 
        'left-side-text'
    ];

    const toggleVisibility = (elementId, visibility) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.setAttribute('visible', visibility);
        }
    };

    // Step 1: Show the video
    toggleVisibility('background-video', 'true');
    document.getElementById('background-video').components.material.material.map.image.play();

    // Step 2: Show the 3D model above the video
    setTimeout(() => {
        toggleVisibility('model-above-video', 'true');
    }, 1000); // 1 second delay

    // Step 3: Show the 3D model on the right side
    setTimeout(() => {
        toggleVisibility('right-side-model', 'true');
    }, 2000); // 2 seconds delay

    // Step 4: Show the image and text on the left side
    setTimeout(() => {
        toggleVisibility('left-side-image', 'true');
        toggleVisibility('left-side-text', 'true');
    }, 3000); // 3 seconds delay
});

document.querySelector('#marker').addEventListener('markerLost', () => {
    const elementsToHide = [
        'background-video', 
        'model-above-video', 
        'right-side-model', 
        'left-side-image', 
        'left-side-text'
    ];

    const toggleVisibility = (elementId, visibility) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.setAttribute('visible', visibility);
        }
    };

    // Hide all elements when marker is lost
    elementsToHide.forEach(id => toggleVisibility(id, 'false'));
});
