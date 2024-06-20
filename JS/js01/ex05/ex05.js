window.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.list');
    const addButton = document.getElementById('add_button');
    const input = document.getElementById('create_todo');

    function loadNotesFromLocalStorage() {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.forEach(note => createToDoElement(note.text, note.id, false));
    }

    function addToLocalStorage(id, text) {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push({ id, text });
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    function updateLocalStorage(id, newText) {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        const note = notes.find(note => note.id === id);
        if (note) {
            note.text = newText;
            localStorage.setItem('notes', JSON.stringify(notes));
        }
    }

    function deleteFromLocalStorage(id) {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        const updatedNotes = notes.filter(note => note.id !== id);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
    }

    function createToDoElement(text, id, saveToLocalStorage = true) {
        const article = document.createElement('article');
        const paragraph = document.createElement('p');
        const editButton = document.createElement('button');
        const removeButton = document.createElement('button');

        paragraph.innerText = text;
        paragraph.contentEditable = 'false';

        const div = document.createElement('div');
        div.appendChild(editButton);
        div.appendChild(removeButton);

        article.appendChild(paragraph);
        article.appendChild(div);
        section.appendChild(article);

        editButton.innerText = "✏️";
        removeButton.innerText = "🗑️";

        article.addEventListener('click', () => {
            article.style.backgroundColor = article.style.backgroundColor === 'lightgreen' ? 'white' : 'lightgreen';
        });

        editButton.addEventListener('click', () => {
            if (paragraph.contentEditable === 'false') {
                paragraph.contentEditable = 'true';
                paragraph.style.border = '1px solid blue';
                editButton.innerText = 'Save';
            } else {
                paragraph.contentEditable = 'false';
                paragraph.style.border = 'none';
                editButton.innerText = '✏️';
                updateLocalStorage(id, paragraph.innerText);
            }
        });

        removeButton.addEventListener('click', () => {
            section.removeChild(article);
            deleteFromLocalStorage(id);
        });

        if (saveToLocalStorage) {
            addToLocalStorage(id, text);
        }
    }

    addButton.addEventListener('click', () => {
        const text = input.value.trim();
        if (text) {
            const id = Date.now();
            createToDoElement(text, id);
            input.value = '';  // Clear the input after adding the note
        }
    });

    // Load notes from localStorage on page load
    loadNotesFromLocalStorage();
});
