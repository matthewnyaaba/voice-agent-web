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
            // Open the Agents Playground instead
            window.open('https://agents-playground.livekit.io/', '_blank');
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
          <p style={{ marginTop: '1rem', fontSize: '0.8rem' }}>
            After clicking, connect with:<br/>
            URL: wss://demo.livekit.cloud<br/>
            API Key: devkey<br/>
            API Secret: secret
          </p>
        </div>
      </div>
    </div>
  );
}
