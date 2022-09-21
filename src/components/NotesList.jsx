import React from 'react';
import NotesItem from "./NotesItem";

const NotesList = ({notes, deleteNote}) => {
  console.log(notes)
  return (
    <div className="row">
        {notes.map(note => <NotesItem key={note.id} id={note.id} text={note.content} deleteNote={deleteNote}/>)}
    </div>
  );
};

export default NotesList;