import type { Metadata } from 'next'

export const metadata: Metadata = {
 title: 'Nome da página',
 description: 'Descrição da página',
}

export default function dashboard() {
 return (
   <div>
     <h1>dashboadrd</h1>
   </div>
 );
}