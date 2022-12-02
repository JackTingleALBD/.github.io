// form area HTML
const form = document.querySelector('form');

form.addEventListener('submit', async(e) => { // button type="submit"
    e.preventDefault();
    const data = new FormData(form);

    const response = await fetch('http://localhost:8080/dream', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  
        },
        body: JSON.stringify({
            prompt: data.get('prompt'), // textarea name="prompt" HTML
        }),
    });

    const { image } = await response.json();

    const result = document.querySelector('#result'); // div id="result" HTML
    result.innerHTML = `<img src="${image}" width="512" />`;
})

// goes at the bottom of the body tag