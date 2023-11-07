import { Suspense } from 'react'
import { useLoaderData, useOutlet, Await } from 'react-router-dom'
import { AuthProvider } from '../hooks/useAuth'
import { Alert, AlertIcon, Progress } from '@chakra-ui/react'

export const AuthLayout = () => {
  const outlet = useOutlet()

  const {userPromise} = useLoaderData()

  return (
    <Suspense fallback={<Progress size="xs" isIndeterminate/>}>
      <Await
        resolve={userPromise}
        errorElement={
          <Alert status="error">
            <AlertIcon/>
            There was an error processing your request
          </Alert>
        }
        children={(user) => (
          <AuthProvider userData={user}>{outlet}</AuthProvider>
        )}
      />
    </Suspense>
  )
}
