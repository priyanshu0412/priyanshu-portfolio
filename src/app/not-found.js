import Link from 'next/link'
import React from 'react'

// ---------------------------------------

const NotFound = () => {
    return (
        <section >
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                <div className="max-w-screen-sm mx-auto text-center">
                    <h1 className="mb-4 font-extrabold tracking-tight text-white text-7xl lg:text-9xl">
                        404
                    </h1>
                    <p className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                        Something&apos;s missing.
                    </p>
                    <p className="mb-4 text-lg font-light text-white">
                        Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page.
                    </p>
                    <Link href={"/"} className='w-fit'>
                        <button className='text-[#000] bg-[#b2b3b3] px-6 py-2 rounded-full'>
                            Back To Home Page
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default NotFound
