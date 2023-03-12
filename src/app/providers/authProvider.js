'use client'
import { SessionProvider } from 'next-auth/react'

function AuthProvider({ children, session }) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}

export default AuthProvider
