"use client"
import { MedusaProvider } from "medusa-react"
import { queryClient, MEDUSA_BACKEND_URL } from "../config"

export default function Providers({ children}: { children: React.ReactNode }) {
  return (
    <>
        {children}
    </>
    // <>
    //   <MedusaProvider
    //     queryClientProviderProps={{ client: queryClient }}
    //     baseUrl={MEDUSA_BACKEND_URL}
    //   >
    //     {children}
    //   </MedusaProvider>
    // </>
  )
}