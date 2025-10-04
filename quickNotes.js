const fs = require('node:fs');
const path = require('node:path');
const readline = require('node:readline');

function getAnswer(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
            rl.close();
        });
    });
}

async function createNote() {
    const title = await getAnswer('Enter note title: ');
    const content = await getAnswer('Enter note content: ');

    const notesDir = path.join(__dirname, 'notes');
    if (!fs.existsSync(notesDir)) {
        fs.mkdirSync(notesDir);
    }
    fs.writeFileSync(path.join(notesDir, `${title}.txt`), content);
    console.log('Note created successfully.');
    mainMenu();
}


function listNotes() {
    const notesDir = path.join(__dirname, 'notes');
    if (!fs.existsSync(notesDir)) {
        console.log('No notes found.');
        return mainMenu();
    }
    const files = fs.readdirSync(notesDir);
    if (files.length === 0) {
        console.log('No notes found.');
        return;
    }
    console.log('Notes:');
    files.forEach((file, index) => {
        console.log(`${index + 1}. ${path.basename(file, '.txt')}`);
    });
    return true;
}

async function viewNote() {
    if (!listNotes()) {
        console.log('No notes to view.');
        return mainMenu();
    }

    const title = await getAnswer('Enter note title to view: ');
    const notePath = path.join(__dirname, 'notes', `${title}.txt`);
    if (fs.existsSync(notePath)) {
        const content = fs.readFileSync(notePath, 'utf-8');
        console.log(`\n--- ${title} ---\n${content}\n--- End of Note ---\n`);
    } else {
        console.log('Note not found.');
    }
    mainMenu();
}

async function deleteNote() {
    if (!listNotes()) {
        console.log('No notes to delete.');
        return mainMenu();
    }
    const title = await getAnswer('Enter note title to delete: ');
    const notePath = path.join(__dirname, 'notes', `${title}.txt`);
    if (fs.existsSync(notePath)) {
        fs.unlinkSync(notePath);
        console.log('Note deleted successfully.');
    } else {
        console.log('Note not found.');
    }
    mainMenu();
}


async function mainMenu() {
    let choice = '';
    while (choice !== '5') {
        console.log(`
        1 - Create a new note
        2 - List all notes
        3 - View a note
        4 - Delete a note
        5 - Exit
        `);
        choice = await getAnswer(`Choose an option: `);
    
        switch (choice) {
            case '1':
                createNote();
                return;
            case '2':
                listNotes();
                mainMenu();
                return;
            case '3':
                viewNote();
                return;
            case '4':
                deleteNote();
                return;
            case '5':
                console.log('Exiting...');
                process.exit(0);
            default:
                console.log('Invalid option. Please try again.');
                break;
        }
    }
}
mainMenu();