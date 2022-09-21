import {useEffect, useState} from "react";
import createRequest from "./api/createRequest";
import NotesForm from "./components/NotesForm";
import './App.css';
import NotesList from "./components/NotesList";
import NotesTitle from "./components/NoteTitle";

function App() {
  const [notes,setNotes] = useState ([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await createRequest({method: 'get'});
      setNotes([...response]);
    }
    fetchData();
  }, []);


  const addNewNotesHandler =  async (note) => {
    try {
      const payload = {
        content: note
      }
      await createRequest({payload, method: 'post'});
      const response = await createRequest({method: 'get'});
      setNotes([...response])
    } catch (error) {
      return <p>Error: {error}</p>
    }
  }

  const updateNotesHandler = async () => {
    const response = await createRequest({method: 'get'});
    setNotes([...response]);
  }

  const deleteNotesHandler = async (id) => {
    await createRequest({id, method: 'delete'});
    const response = await createRequest({method: 'get'});
    setNotes([...response]);
  }
  return (
    <div>
    <NotesTitle updateNotes = {updateNotesHandler}/>
    <div className = "container">
      <NotesForm addNewNotes = {addNewNotesHandler}/>
      <NotesList notes = {notes} 
                 deleteNote = {deleteNotesHandler}/>
    </div>
    </div>
  );
}

export default App;