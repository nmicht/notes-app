// Notes list that is going to be shown in the browser
const notes = [
    {
      _id: NotesApp.createNoteId(),
      title: 'Note title goes here!',
      text: 'This is my very first note text! 😀',
    },
    {
      _id: NotesApp.createNoteId(),
      title: 'Second awesome note!',
      text: 'This is my second note text!',
  },
];

const addNewNote = NotesApp.addNewNote;

// Named functions
function getNoteById(searchId) {
    let found;
    notes.forEach(function(note, index) {
        if(note._id === searchId){
            found = index;
            return;
        }
    });
    return found;
};

const updateNote = function(_id, title, text, index) {
  notes[index]._id = _id;
  notes[index].text = text;
  notes[index].title = title;
};

// Declared functions
const insertNote = function(_id, title, text) {
    let note = {
        _id: _id,
        title: title,
        text: text,
    };
    notes.push(note);
};

const saveNote = () => NotesApp.saveNote(function(_id, title, text) {
  if(title === '') {
    title = 'Sin titulo';
  }
  let index = getNoteById(_id);
  if(index !== undefined) {
      updateNote(_id,title,text,index);
  } else {
      insertNote(_id, title, text);
  }
  NotesApp.renderNotesList();
});

const onClickNote = (event) => NotesApp.onClick(event, function(_id) {
  let index = getNoteById(_id);
  if(index !== undefined){
      let note = notes[index];
      if(note.title === 'Sin titulo') {
          note.title = '';
      }
      NotesApp.showNote(note);
  }
});

document.addEventListener('DOMContentLoaded', function(event) {
  console.log('DOM fully loaded and parsed');
  NotesApp.renderNotesList();
});



console.log('You already imported your js file 😎');
