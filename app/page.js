'use client';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#0f0f0f',
      color: 'white',
      fontFamily: 'system-ui'
    }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          marginBottom: '1rem',
          background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          AI Voice Assistant
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '3rem' }}>
          Click below to start talking with your AI assistant
        </p>
        
        <button
          onClick={() => {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE5MzI2MTU5MjYsImlzcyI6ImRldmtleSIsIm5hbWUiOiJ0ZXN0LXVzZXIiLCJuYmYiOjE2MzI2MTU5MjYsInN1YiI6InRlc3QtdXNlciIsInZpZGVvIjp7InJvb20iOiJ0ZXN0Iiwicm9vbUpvaW4iOnRydWUsImNhblB1Ymxpc2giOnRydWUsImNhblN1YnNjcmliZSI6dHJ1ZX19.qkxRBJakwIG4T3re1UbEH-MXeNFH8B6Iu0cEZ75bF_Y';
            window.location.href = `https://meet.livekit.io/custom?liveKitUrl=wss://demo.livekit.cloud&token=${token}`;
          }}
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '1rem 3rem',
            borderRadius: '0.75rem',
            border: 'none',
            fontSize: '1.2rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#2563eb';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#3b82f6';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
          }}
        >
          🎤 Start Voice Chat
        </button>
        
        <div style={{ marginTop: '3rem', fontSize: '0.9rem', opacity: 0.6 }}>
          <p>Powered by LiveKit • OpenAI • ElevenLabs</p>
        </div>
      </div>
    </div>
  );
}
