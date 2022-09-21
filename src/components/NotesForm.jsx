import React,{useState} from 'react';

const NotesForm = (props) => {
    const [textValue,setTextValue] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if(textValue === ''){
            return;
        }
        props.addNewNotes(textValue);
        setTextValue ('');
    }
    const onChangeHandler = (event) => {
        const {value} = event.target;
        setTextValue(value);
    }

    return (
        <form onSubmit={onSubmitHandler} className="mb-5">
        <div className="mb-3">
          <label htmlFor="newNotes" className="form-label">Новая заметка</label>
          <textarea
            className="form-control"
            id="newNotes"
            rows="3"
            name="newNotes"
            onChange={onChangeHandler}
            value={textValue}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );

}
export default NotesForm;