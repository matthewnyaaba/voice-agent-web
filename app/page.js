'use client';

export default function Home() {
  const connectToAgent = () => {
    // For now, use the direct token
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE5MzI2MTU5MjYsImlzcyI6ImRldmtleSIsIm5hbWUiOiJ0ZXN0LXVzZXIiLCJuYmYiOjE2MzI2MTU5MjYsInN1YiI6InRlc3QtdXNlciIsInZpZGVvIjp7InJvb20iOiJ0ZXN0Iiwicm9vbUpvaW4iOnRydWUsImNhblB1Ymxpc2giOnRydWUsImNhblN1YnNjcmliZSI6dHJ1ZX19.qkxRBJakwIG4T3re1UbEH-MXeNFH8B6Iu0cEZ75bF_Y';
    
    window.open(`https://meet.livekit.io/custom?liveKitUrl=wss://demo.livekit.cloud&token=${token}`, '_blank');
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
