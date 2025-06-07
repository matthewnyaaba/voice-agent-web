export const metadata = {
  title: 'AI Voice Assistant',
  description: 'Talk to an AI assistant in real-time',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
