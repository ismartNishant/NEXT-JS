import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'About Us',
  description:"All about Next js "
}

export default function About(){
    return <h1>About page</h1>
}