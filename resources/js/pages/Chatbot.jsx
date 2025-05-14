import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { marked } from 'marked';

function Chatbot() {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('/ask-llama', { prompt });
            setResponse(res.data.response);
        } catch (err) {
            setResponse('Terjadi kesalahan saat mengirim permintaan.');
            console.error(err);
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>Chatbot LLaMA (React)</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows="5"
                    cols="60"
                    placeholder="Tulis pertanyaanmu..."
                />
                <br />
                <button type="submit">Kirim</button>
            </form>

            {response && (
                <div style={{ marginTop: '20px' }}>
                    <strong>Jawaban:</strong>
                    <div
                        id="preview"
                        dangerouslySetInnerHTML={{ __html: marked.parse(response || '') }}
                    />
                    <pre>{response}</pre> {/* fallback untuk cek apa isi response */}
                </div>
            )}
        </div>
    );
}

// Render ke elemen dengan id
const root = document.getElementById('chatbot-root');
if (root) {
    ReactDOM.createRoot(root).render(<Chatbot />);
}
