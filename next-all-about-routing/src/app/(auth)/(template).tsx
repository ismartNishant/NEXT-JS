// 'use client'
// import Link from "next/link";
// import { Button, Label, TextInput } from "flowbite-react";
// import { usePathname } from "next/navigation";
// const navLinks = [
//     { name: "Register", href: "/register" },
//     { name: "Login", href: "/login" },
//     { name: "Forgot Password", href: "/forgot-password" }
// ]

// export default function AuthLayout({
//     children,
// }: Readonly<{
//     children: React.ReactNode;
// }>) {
//     const pathName = usePathname();
//     return (
//         <div className="flex gap-5 items-center">
//             <div>
//                 <form className="flex max-w-md flex-col gap-4">
//                     <div>
//                         <div className="mb-2 block">
//                             <Label htmlFor="email1" value="Your email" />
//                         </div>
//                         <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
//                     </div>
                    
//                     <Button type="submit">Submit</Button>
//                 </form>
//             </div>
//             {navLinks.map((link) => {
//                 const isActive = pathName.startsWith(link.href);

//                 return (
//                     <Link className={`${isActive ? "underline font-bold text-blue-500" : " "}`} href={link.href} key={link.name}>{link.name}</Link>
//                 )
//             })}
//             {children}
//         </div>
//     );
// }
