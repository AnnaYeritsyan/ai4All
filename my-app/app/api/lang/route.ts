import {
    setDefaultLocale as serverSetDefaultLocale,
    getLocale as serverGetLocale,
  } from "../server/lang/server"
  
  export async function GET() {
    return Response.json({
      locale: serverGetLocale()
    })
  }
  
  export async function POST(req: Request) {
    const { locale } = await req.json()
 
    await serverSetDefaultLocale(locale)
  
    return Response.json({})
  }
  