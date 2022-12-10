import React, { useState } from 'react';

function User() {

    const [sentence, setSentence] = useState('');
    const [letter, setLetter] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const index = sentence.indexOf(letter);
        if (index === -1) {
            setResult('The letter does not exist in the sentence');
        } else {
            setResult(sentence.slice(index + 1));
        }
    }
    return (
        <div className='user-form'>
            <h1>Write Sentence</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="sentence">Enter a sentence:</label><br />
                <input type="text" id="sentence" value={sentence} onChange={(event) => setSentence(event.target.value)} /><br /><br />
                <label htmlFor="letter">Enter a letter:</label><br />
                <input type="text" id="letter" value={letter} onChange={(event) => setLetter(event.target.value)} /><br /><br />
                <input type="submit" value="Submit" />
            </form>
            <p>{result}</p>
        </div>
    )
}

export default User;