'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';
import { Link } from 'lucide-react';
import Button from '@/components/buttons/Button';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [expand, setExpand] = React.useState(false)
  const [mobile, setMobile] = React.useState(false)

  React.useEffect(() => {
    function isMobile() {
      if (window.innerWidth < 1024) setMobile(true)
      else setMobile(false)
    }
    window.addEventListener('resize', isMobile)
    window.addEventListener('load', isMobile)
  }, [])

  return (
    <main className='bg-whitebase'>
      <section className='bg-local bg-cover bg-top bg-no-repeat' style={{ backgroundImage: 'url(./images/bg.png)' }}>
        <nav className='container m-auto'>
          <div className='lg:flex justify-between'>
            <div className='p-4 flex justify-between w-full md:w-auto'>
              <a href='' className='p-3 block'>
                <img width={149} height={40} src={'./images/logo.svg'} />
              </a>
              {mobile && <button onClick={() => setExpand(!expand)}>
                <img width={24} height={24} src={'./images/menu.svg'} />
              </button>}
            </div>
            {!mobile || expand ? <div className='lg:flex items-center justify-end p-4'>
              <a href='' className='p-3 block'>
                <span className='text-yellow py-1 border-yellow border-b-2 text-xl'>Learn</span>
              </a>
              <a href='' className='p-3 block'>
                <span className='text-grey py-1 text-xl border-transparent border-b-2 hover:border-yellow hover:text-yellow transition-all duration-300 ease-out'>Categories</span>
              </a>
              <a href='' className='p-3 block'>
                <span className='text-grey py-1 text-xl border-transparent border-b-2 hover:border-yellow hover:text-yellow transition-all duration-300 ease-out'>Stories</span>
              </a>
              <a href='' className='p-3 block'>
                <span className='text-grey py-1 text-xl border-transparent border-b-2 hover:border-yellow hover:text-yellow transition-all duration-300 ease-out'>Partner</span>
              </a>
              <a href='' className='p-3 block'>
                <span className='text-grey py-1 text-xl border-transparent border-b-2 hover:border-yellow hover:text-yellow transition-all duration-300 ease-out'>Investor</span>
              </a>
            </div> : <></>}
          </div>
        </nav>
        <div className='flex justify-center min-h-[800px] items-center'>
          <div>
            <div className='text-center py-10 px-4 mb-52'>
              <h1 className='text-white font-semibold text-6xl leading-tight'>Build Your Career.<br />Grow Together &amp; Faster.</h1>
              <button className='py-3 px-9 rounded-full bg-yellow text-brown mt-9 font-medium text-base transition-all duration-300 ease-out hover:bg-whitebase'>Explore Mine</button>
            </div>
          </div>
        </div>
      </section>
      <section className='flex justify-center mt-[-7.5rem] md:mt-[-18.5rem]'>
        <div>
          <div className='flex justify-center py-3 px-6'>
            <img className='max-w-[100%]' width={725} height={500} src={'./images/illustration.svg'} />
          </div>
          <div className='flex justify-center py-9 px-6'>
            <img className='max-w-[100%]' width={827} height={40} src={'./images/partner.svg'} />
          </div>
        </div>
      </section>
      <section className='container m-auto lg:flex justify-between items-center py-32 px-4'>
        <div className='p-4 flex justify-center lg:justify-start'>
          <img width={563} height={400} src={'./images/gallery.svg'} />
        </div>
        <div className='p-4 flex justify-center lg:justify-start'>
          <div>
            <h2 className='text-5xl text-dark font-semibold leading-normal mb-4'>
              We help best people<br />
              like you across the world
            </h2>
            <ul>
              <li className='text-dark text-xl relative pl-10 py-4 before:w-[28px] before:h-[28px] before:border-dark before:rounded-full before:border-[1.5px] before:block before:absolute before:left-0 after:block after:absolute after:left-[5px] after:top-[21px] after:rounded-full after:w-[18px] after:h-[18px] after:bg-green'>Mastering work-life-balance</li>
              <li className='text-dark text-xl relative pl-10 py-4 before:w-[28px] before:h-[28px] before:border-dark before:rounded-full before:border-[1.5px] before:block before:absolute before:left-0 after:block after:absolute after:left-[5px] after:top-[21px] after:rounded-full after:w-[18px] after:h-[18px] after:bg-yellow'>Find the job based on your skills</li>
              <li className='text-dark text-xl relative pl-10 py-4 before:w-[28px] before:h-[28px] before:border-dark before:rounded-full before:border-[1.5px] before:block before:absolute before:left-0 after:block after:absolute after:left-[5px] after:top-[21px] after:rounded-full after:w-[18px] after:h-[18px] after:bg-green'>Helping preparing the paperwork</li>
              <li className='text-dark text-xl relative pl-10 py-4 before:w-[28px] before:h-[28px] before:border-dark before:rounded-full before:border-[1.5px] before:block before:absolute before:left-0 after:block after:absolute after:left-[5px] after:top-[21px] after:rounded-full after:w-[18px] after:h-[18px] after:bg-yellow'>24/7 Best worker support</li>
              <li className='text-dark text-xl relative pl-10 py-4 before:w-[28px] before:h-[28px] before:border-dark before:rounded-full before:border-[1.5px] before:block before:absolute before:left-0 after:block after:absolute after:left-[5px] after:top-[21px] after:rounded-full after:w-[18px] after:h-[18px] after:bg-green'>Trusted payment protection</li>
            </ul>
            <div className='my-8'><a href='#' className='border-b border-dark text-base text-dark transition-all duration-300 ease-out hover:bg-whitebase hover:text-brown hover:border-brown'>LEARN MORE ABOUT OUR BENEFIT</a></div>
          </div>
        </div>
      </section>
      <section className='container m-auto'>
        <div className='lg:flex justify-center items-center mb-12'>
          <h2 className='text-5xl text-dark font-semibold leading-normal mb-4 text-center px-4 lg:px-0'>
            Our Feature Jobs<br />
            That Might You Need
          </h2>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8 mb-16 px-8'>
          <div className='bg-white rounded-2xl p-8 shadow-xl shadow-gray-50'>
            <div className='flex items-center'>
              <img width={55} height={55} src={'./images/icon-twitter.svg'} />
              <div className='px-4'>
                <p className='text-xl text-dark'>Twitter</p>
                <span className='text-muted text-sm font-normal'>Parahyangan, Bandung</span>
              </div>
            </div>
            <div className='text-green font-medium text-5xl py-12'>$190K <span className='text-xl font-normal'>/ year</span></div>
            <div className='text-dark text-xl font-normal leading-8 pr-12'>User-Experience Designer</div>
            <div className='mt-5'><span className='rounded-md px-3 py-2 bg-cyanlight text-cyan font-medium text-base'>FULL-TIME</span></div>
          </div>
          <div className='bg-white rounded-2xl p-8 shadow-xl shadow-gray-50'>
            <div className='flex items-center'>
              <img width={55} height={55} src={'./images/icon-google.svg'} />
              <div className='px-4'>
                <p className='text-xl text-dark'>Google</p>
                <span className='text-muted text-sm font-normal'>Cimahi, Bandung</span>
              </div>
            </div>
            <div className='text-green font-medium text-5xl py-12'>$563K <span className='text-xl font-normal'>/ year</span></div>
            <div className='text-dark text-xl font-normal leading-8 pr-12'>Expert Software Developer</div>
            <div className='mt-5'><span className='rounded-md px-3 py-2 bg-cyanlight text-cyan font-medium text-base'>FULL-TIME</span></div>
          </div>
          <div className='bg-white rounded-2xl p-8 shadow-xl shadow-gray-50'>
            <div className='flex items-center'>
              <img width={55} height={55} src={'./images/icon-amazon.svg'} />
              <div className='px-4'>
                <p className='text-xl text-dark'>Amazon</p>
                <span className='text-muted text-sm font-normal'>Ciputat, Jakarta</span>
              </div>
            </div>
            <div className='text-green font-medium text-5xl py-12'>$921K <span className='text-xl font-normal'>/ year</span></div>
            <div className='text-dark text-xl font-normal leading-8 pr-12'>User-Interface Designer</div>
            <div className='mt-5'><span className='rounded-md px-3 py-2 bg-cyanlight text-cyan font-medium text-base'>FULL-TIME</span></div>
          </div>
          <div className='bg-white rounded-2xl p-8 shadow-xl shadow-gray-50'>
            <div className='flex items-center'>
              <img width={55} height={55} src={'./images/icon-linkedin.svg'} />
              <div className='px-4'>
                <p className='text-xl text-dark'>LinkedIn</p>
                <span className='text-muted text-sm font-normal'>Parung, Bogor</span>
              </div>
            </div>
            <div className='text-green font-medium text-5xl py-12'>$21K <span className='text-xl font-normal'>/ year</span></div>
            <div className='text-dark text-xl font-normal leading-8 pr-12'>Human Resource Development</div>
            <div className='mt-5'><span className='rounded-md px-3 py-2 bg-cyanlight text-cyan font-medium text-base'>FULL-TIME</span></div>
          </div>
        </div>
        <div className='text-center'><a href='#' className='border-b border-dark text-base text-dark transition-all duration-300 ease-out hover:bg-whitebase hover:text-brown hover:border-brown'>VIEW MORE INCOMING JOBS</a></div>
      </section>
      <section className='container m-auto py-32 px-4'>
        <div className='bg-local bg-cover bg-center bg-no-repeat max-w-[750px] rounded-2xl m-auto p-10' style={{ backgroundImage: 'url(./images/bg-subscribe.png)' }}>
          <h3 className='text-center text-2xl text-white font-medium mb-2'>Subscribe New Job</h3>
          <p className='text-center text-muted text-base'>We promise never send you a spam</p>
          <form className='relative md:rounded-r-full overflow-hidden mt-9 text-center'>
            <input type='email' placeholder='Type your email address' className='py-3 px-4 bg-white text-base w-full md:pr-[200px] border-0 rounded-lg' />
            <button type='submit' className='md:absolute right-0 py-3 px-9 rounded-full bg-yellow text-brown font-medium text-base text-center w-[170px] mt-3 md:mt-0 transition-all duration-300 ease-out hover:bg-whitebase'>Count Me In</button>
          </form>
        </div>
      </section>
    </main>
  );
}
