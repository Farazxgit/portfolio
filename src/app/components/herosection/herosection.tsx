'use client';
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Facebook, Twitter, Linkedin, Github, Twitch } from 'lucide-react'
import { ChevronRight, Zap } from 'lucide-react'

export default function Herosection() {
    const [user, setUser] = useState<{ email: string; fullName: string } | null>(null);
    const [loading, setLoading] = useState(true);

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
    return (
    
    <section className='relative flex flex-col lg:flex-row justify-center h-full lg:h-screen  overflow-hidden'>
        
        <div className='hidden lg:flex absolute inset-0 z-0 '>
            <img src="/hero-bg.png" className="w-full h-screen" alt="" />
        </div>
        
        <div className='hidden lg:flex absolute z-8'>
            <img src="/color.png" className="w-full h-screen" alt="" />  
        </div>
        
        <div className='hidden lg:flex absolute z-11'>
            <img src="/man.png" className="-translate-y-[50px]" alt=""  />
        </div>

        <div className='relative z-10 lg:w-full 
        h-[1200px] lg:min-h-0 lg:h-auto
        lg:m-8
        bg-black lg:bg-transparent 
        border-2 border-white/30
        lg:border-2 lg:border-white/30 lg:rounded-xl 
        p-10 lg:p-8
        flex flex-col lg:justify-between
        lg:overflow-visible'>
            
                        <h1 className='text-8xl lg:text-[200px] text-white lg:text-center translate-y-20'>
                            {/* {loading ? (
                                // skeleton placeholder to avoid flashing default name
                                <span className='inline-block w-52 lg:w-96 h-[1.2em] b animate-pulse rounded' aria-hidden="true" />
                            ) : (
                                (user?.fullName ?? (user as any)?.fullname ?? (user as any)?.full_name ?? 'Faraz Ahmed')
                            )} */}
                            Faraz Ahmed
                        </h1>

            <div className='flex flex-col lg:flex-row lg:flex-wrap gap-6 lg:gap-0 
            lg:justify-between lg:items-end lg:translate-y-0'>
               
                <div className='order-1 lg:order-2 lg:w-auto'>
                    <p className='text-white lg:text-right font-work-space font-medium text-xl lg:leading-7 translate-y-30 lg:translate-y-10 '>
                        Full stack developer with 7 years
                        <br /> 
                        of experience in developing 
                        <br /> 
                        robust web applications from 
                        <br />
                        front-end to back-end
                    </p>
                </div>

                {/* Buttons - order-2 on mobile, order-4 on desktop */}
                <div className='order-2 lg:order-4 flex flex-row-reverse lg:flex-row gap-2 justify-center lg:justify-end translate-y-30 lg:translate-y-15 lg:w-full'>
                    <Button className='text-hoverlink lg:hover:scale-110 transition-all duration-300 rounded-4xl cursor-pointer font-work-space text-lg font-medium p-9 bg-transparent'>
                        <Zap size={32}/>
                    </Button>
                    <Button className='bg-hoverlink lg:hover:scale-110 hover:scale-105 transition-all duration-300 hover:bg-hoverlink text-black rounded-4xl p-9 cursor-pointer font-work-space text-lg font-medium w-full lg:w-32'>
                        Hire Me
                    </Button>
                </div>
                
                <div className='order-3 lg:order-1 leading-16 font-work-space font-semibold text-3xl translate-y-30 lg:translate-y-20'>
                    <div className='flex items-center gap-2'>
                        <ChevronRight className='text-hoverlink'/>
                        <h1 className='text-white'>UIUX Design</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <ChevronRight className='text-hoverlink'/>
                        <h1 className='text-white'>Web Development</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <ChevronRight className='text-hoverlink'/>
                        <h1 className='text-white'>Interaction</h1>
                    </div>
                </div>

                <div className='order-4 lg:order-3 flex gap-6 text-white  lg:justify-start translate-y-30 lg:translate-y-30 lg:w-full z-12'>
                    <Facebook size={32} className='hover:text-hoverlink cursor-pointer '/>
                    <Twitter size={32} className='hover:text-hoverlink cursor-pointer'/>
                    <Linkedin size={32} className='hover:text-hoverlink cursor-pointer'/>
                    <Github size={32} className='hover:text-hoverlink cursor-pointer'/>
                </div>
            </div> 
            <div className='relative order-6 translate-y-40 max-h-20'>
             <div className='flex lg:hidden absolute z-10'>
            <img src="hero-bg.png" className="" alt="" />
        </div>
        
        <div className='flex lg:hidden absolute z-10'>
            <img src="color.png" className=" " alt="" />  
        </div>
        
        <div className='flex lg:hidden absolute z-11'>
            <img src="man.png" className="-translate-y-10" alt="" />
        </div>
        </div>
        </div>
    </section>
  )
}