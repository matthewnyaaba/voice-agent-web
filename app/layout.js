export const metadata = {
  title: 'AI Voice Assistant',
  description: 'Talk to an AI assistant',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui' }}>{children}</body>
    </html>
  )
}
