'use client';

export default function Home() {
  const connectToAgent = () => {
    // For now, redirect to LiveKit Meet with demo server
    window.open('https://meet.livekit.io/custom?url=wss://demo.livekit.cloud', '_blank');
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#1a1a1a',
      color: 'white'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
          🎤 AI Voice Assistant
        </h1>
        <button
          onClick={connectToAgent}
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '1rem 3rem',
            borderRadius: '0.5rem',
            border: 'none',
            fontSize: '1.2rem',
            cursor: 'pointer'
          }}
        >
          Start Talking
        </button>
        <p style={{ marginTop: '2rem', opacity: 0.8 }}>
          Click to connect and start your conversation
        </p>
      </div>
    </div>
  );
}
