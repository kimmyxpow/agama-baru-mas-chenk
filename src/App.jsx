function App() {
    return (
        <>
            <header className='py-4 fixed top-0 inset-x-0 bg-white/90 backdrop-blur-lg'>
                <div className='container flex justify-between items-center'>
                    <span className='font-bold text-lg'>Agama Chenkk</span>
                    <nav className='flex items-center gap-8'>
                        <a href='#'>Sign Up</a>
                        <a href='#' className='border py-3 px-6 rounded-full border-zinc-800'>
                            Sign In
                        </a>
                    </nav>
                </div>
            </header>
            <main className='min-h-dvh grid place-items-center py-32'>
                <div className='container flex flex-col items-center'>
                    <div className='flex gap-10'>
                        <div className='flex items-center bg-zinc-100 py-2 pl-2 pr-4 rounded-full'>
                            <svg
                                className='rounded-full'
                                xmlns='http://www.w3.org/2000/svg'
                                width='50'
                                height='50'
                                viewBox='0 0 50 50'
                                fill='none'
                            >
                                <path
                                    d='M0 10.7097C0 4.79492 4.80974 0 10.7429 0H36.2571C42.1903 0 47 4.79492 47 10.7097V36.1454C47 42.0602 42.1903 46.8551 36.2571 46.8551H10.7429C4.80974 46.8551 0 42.0602 0 36.1454V10.7097Z'
                                    fill='#4C48F6'
                                ></path>
                                <path
                                    d='M27.2307 20.3821C27.6934 22.8665 27.8318 25.3974 27.6427 27.9152C27.5399 29.676 27.1561 31.4107 26.5052 33.0578C26.256 33.7643 25.9327 34.4442 25.5402 35.0868C25.0434 35.8862 24.4447 36.6217 23.7581 37.2762C23.589 37.4444 23.4129 37.6047 23.2298 37.757L23.1981 37.7809L23.0713 37.8866L22.9692 37.9685L22.8988 38.023L22.7579 38.1287L22.6945 38.1799L22.6417 38.214C21.7536 38.86 20.761 39.3589 19.7044 39.6906C18.73 39.9997 17.7115 40.1585 16.6861 40.1612C15.2261 40.1742 13.7873 39.8218 12.5092 39.1382C11.3987 38.4988 10.4434 37.6356 9.70804 36.607C8.97272 35.5784 8.47467 34.4086 8.24772 33.1771C7.92678 31.2982 8.01191 29.3753 8.49776 27.5299C9.2165 24.4784 10.8024 21.6824 13.0762 19.4579C13.8116 20.1074 14.292 20.9835 14.4357 21.9371C14.7209 24.3482 13.925 25.8077 10.787 28.9519C10.0517 29.6596 9.52316 30.5433 9.25497 31.513C9.22328 31.646 9.19511 31.7755 9.17398 31.9085C9.06353 32.6893 9.121 33.4838 9.34283 34.242C9.56465 35.0002 9.94603 35.7058 10.463 36.3145C10.5686 36.4339 10.6778 36.5498 10.7905 36.6555C11.3252 37.2196 11.9436 37.7034 12.6254 38.0912C13.69 38.6474 14.8621 38.984 16.0678 39.0797C17.2734 39.1753 18.4865 39.028 19.6305 38.6471C20.9429 38.2342 22.1526 37.5622 23.1832 36.6735C24.2137 35.7848 25.0427 34.6988 25.6177 33.4841C25.681 33.3476 25.7444 33.2078 25.8043 33.0714C26.582 31.0065 26.8907 28.8035 26.7094 26.6125C26.6108 25.0472 25.9311 23.6695 25.1387 22.3191C23.7002 19.8884 23.051 17.0947 23.2756 14.3017C23.3572 12.9554 23.8056 11.6541 24.5752 10.5301C24.6182 10.6111 24.657 10.6942 24.6914 10.779C25.8056 13.908 26.6548 17.1196 27.2307 20.3821ZM30.0482 9.46949C29.9883 9.11142 29.8967 8.76017 29.8052 8.33049C29.6784 8.51123 29.6079 8.6033 29.5481 8.7022C29.4882 8.80109 29.379 8.9716 29.3086 9.10801C28.6314 10.4705 28.248 11.9522 28.1816 13.4628C27.9769 16.0371 28.3667 18.6232 29.3227 21.0334C30.198 23.0265 30.5408 25.2008 30.3194 27.3559C30.0061 30.1317 29.192 32.8327 27.9139 35.3358C28.0059 35.2477 28.0895 35.1518 28.164 35.0493C28.6754 34.2869 29.1456 33.4992 29.5727 32.6895C30.7526 30.2034 31.2245 27.5435 31.4182 24.846C31.5987 21.8195 31.4808 18.7832 31.066 15.7783C30.8159 13.6606 30.4039 11.5702 30.0517 9.46949H30.0482ZM40.1806 15.7033C39.994 13.5754 39.596 11.461 39.2544 9.34672C39.1135 8.48394 38.874 7.64163 38.6592 6.69359C38.5077 6.86069 38.4197 6.94936 38.3387 7.03461C37.5634 8.07308 37.1179 9.30801 37.0567 10.588C36.8628 12.8912 37.3053 15.2028 38.3387 17.2856C38.6622 17.9681 38.8987 18.6861 39.0431 19.4238C39.3953 21.1289 39.0431 22.8067 38.5148 24.447C38.0825 25.7184 37.4999 26.9371 36.7785 28.0789C36.8529 28.0268 36.9235 27.9699 36.9898 27.9084C37.907 26.9746 38.6251 25.8749 39.1029 24.6721C40.2652 21.7837 40.4413 18.752 40.1806 15.7033ZM32.7283 12.5966C32.3198 12.8353 32.0838 13.0911 32.193 13.589C32.274 13.9675 32.2775 14.3631 32.3268 14.7519C32.5801 16.3985 33.0945 17.9974 33.8518 19.492C34.49 20.8825 34.7203 22.4164 34.5174 23.9253C34.264 26.3512 33.4658 28.6942 32.1789 30.79C32.1365 30.8688 32.1012 30.9509 32.0733 31.0355L32.186 31.1208C32.2253 31.0394 32.2724 30.9617 32.3268 30.8889C33.0919 29.9992 33.7216 29.0082 34.197 27.9459C35.2958 25.5213 35.6339 22.9466 35.6938 20.3378C35.7219 17.3078 35.4209 14.2834 34.7957 11.3144C34.0667 11.7577 33.4045 12.201 32.7178 12.5966H32.7283ZM34.8098 9.80709C34.6442 8.97842 34.4224 8.15656 34.2005 7.25627C33.1492 8.43726 32.5301 9.9214 32.4395 11.4781C33.2038 11.0586 33.8906 10.7108 34.5527 10.3152C34.6319 10.2551 34.6955 10.1778 34.7383 10.0895C34.7811 10.0013 34.8019 9.90455 34.7992 9.80709H34.8098ZM17.8096 29.31C18.3507 29.3967 18.8992 29.4322 19.4473 29.4157C19.5084 29.4038 19.5658 29.3786 19.6152 29.342C19.6647 29.3053 19.7048 29.2582 19.7326 29.2043C19.9838 28.6859 20.2186 28.1619 20.437 27.6322C20.5082 27.4169 20.5635 27.1969 20.6025 26.974C19.5459 26.858 18.4682 26.9058 17.7322 25.9168C17.4856 26.6262 17.2708 27.2536 17.0278 27.8743C16.7636 28.6109 17.0066 29.1463 17.7991 29.31H17.8096Z'
                                    fill='white'
                                ></path>
                            </svg>
                            <div className='grid ml-2 mr-4'>
                                <span className='font-medium'>Fajr 04:47 AM</span>
                                <span className='text-sm text-zinc-500'>20 Safar, 1446 Bogor</span>
                            </div>
                            <a
                                href=''
                                className='h-14 px-6 bg-zinc-800 text-white rounded-full grid place-items-center'
                            >
                                All Prayer times
                            </a>
                        </div>
                    </div>
                    <h1 className='text-8xl font-bold text-center mt-4'>The world’s most loved New Religion</h1>
                    <p className='text-xl text-center my-8'>“Athan made me sooo productive😍“</p>
                    <a
                        href=''
                        className='h-20 px-12 text-lg bg-zinc-800 text-white rounded-full grid place-items-center'
                    >
                        Download App
                    </a>
                    <img
                        className='border rounded-3xl border-zinc-200 mt-8'
                        src='https://www.islamicfinder.org/static/live188/themes/theme24/images/athan-card.webp'
                        alt=''
                    />
                </div>
            </main>
        </>
    )
}

export default App
