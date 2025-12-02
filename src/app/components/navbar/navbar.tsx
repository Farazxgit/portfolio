'use client';
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [user, setUser] = useState<{ email: string; fullName: string } | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
     
    // Fetch current user
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('/api/auth/me');
                console.log(response)
                if (response.ok) {
                    const data = await response.json();
                    console.log(data)
                    setUser(data.user);
                }
            } catch (error) {
                console.log('Not logged in');
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const menuItems = [
        {name : "Home" , href : '#home'},
        {name : "Services" , href : '#services'},
        {name : "Blogs" , href : '#blogs'},
        {name : "Pages" , href : '#'},
        {name : "Portfolio" , href : '#portfolio'},       
    ]
    
    return (
        <div className='bg-background'>
            <nav className='flex justify-between items-center lg:justify-between lg:items-center m-5 lg:m-15 lg:py-7 absolute left-0 right-0 z-20 pr-4 '>
                
                <div>
                    <img src="/Logo-white.png" alt="" className='w-20 h-8 '/>
                </div>

                <div className={`${isMobileOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row fixed lg:static inset-0 lg:inset-auto h-full lg:h-auto w-full lg:w-auto bg-white/95 lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-none pt-5 lg:pt-0 gap-0 lg:gap-6 text-black lg:text-white z-50 lg:z-auto overflow-y-auto`}
                >
                    <div className=''>
                        <div className='flex lg:hidden '>
                            <img src="Logo purple.png" alt="" className='w-20 h-8 ml-4'/>
                        </div>
                        <button 
                            className='lg:hidden absolute top-6 right-6 text-black'
                            onClick={() => setIsMobileOpen(false)}
                        >
                            <X size={28} />
                        </button>
                    </div>

                    <ul className='lg:flex lg:gap-6 pt-10 lg:pt-0 font-bold lg:font-normal'>         
                        {menuItems.map((m)=>(
                            <li key={m.name} className='flex items-center gap-2 cursor-pointer 
                            text-xl lg:text-base
                            px-4 lg:px-0
                            hover:bg-hoverbutton hover:text-white lg:hover:bg-transparent
                            font-medium lg:font-medium lg:hover:text-hoverlink duration-400 border-b-2 lg:border-transparent lg:hover:border-current py-2 font-work-space lg:font-work-sans leading-18 lg:leading-2'>
                                <Link href={m.href}>{m.name}</Link>
                                <ChevronDown />
                            </li>
                        ))}
                    </ul>

                    <div className='flex lg:hidden font-work-space text-3xl p-4 mt-8 font-medium'>
                        <h1>Interested in a Collaboration or Need More Info?</h1>
                    </div>

                    {/* Mobile Button */}
                    <div className='flex lg:hidden flex-col gap-3 justify-center items-center m-2'>
                            <>
                            {user ?(
                                <Button className='w-full h-[60px] text-lg bg-button hover:bg-hoverlink rounded-4xl font-work-sans font-normal'>
                                    {user.email}
                                </Button>
                            ):(
                                 <Button 
                                    // onClick={handleLogout}
                                    variant="outline"
                                    className='w-full h-[60px] text-lg border-2 border-button hover:bg-hoverlink rounded-4xl font-work-sans font-normal'
                                >
                                    Logout
                                </Button>
                            )}
                               
                            </>
                    </div>
                </div>

                {/* Desktop Button */}
                
               {loading ? (
          // Loading state - show skeleton
          <div className='hidden lg:flex w-48 h-12 bg-gray-700 animate-pulse rounded-4xl'></div>
        ) : user ? (
          // Logged in - show email
          <Button className='hidden lg:flex text-lg items-center bg-button hover:bg-hoverbutton rounded-4xl font-work-sans font-normal px-10 py-6'>
            {user.email}
          </Button>
        ) : (
          // Not logged in - show Sign In
          <Button 
            onClick={() => router.push('/auth/signin')}
            className='hidden lg:flex text-lg bg-button hover:bg-hoverbutton rounded-4xl font-work-sans px-10 py-6'
          >
            Sign In
          </Button>
        )}
                <Button className='block lg:hidden'
                    onClick={()=>setIsMobileOpen(!isMobileOpen)}
                >
                    {isMobileOpen ? <X size={28}/> : <Menu size={28} />}
                </Button>

            </nav>
        </div>
    )
}