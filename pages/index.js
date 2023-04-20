import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

const SLIDES = [
  { copyTop: 'We are in business to', copyBottom: 'help you do business.' },
  { copyTop: 'Human insight.', copyBottom: 'Advanced analytics.' },
  { copyTop: 'Choose the card', copyBottom: 'that works for you.' },
  { copyTop: 'You may qualify for', copyBottom: 'an upgrade.' },
  { copyTop: 'Up to 4.70%', copyBottom: 'Annual Percentage Yield.' },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideAnimation, setSlideAnimation] = useState(false);
  const timeoutRef = useRef(null);

  const slideUpHandler = () => {
    setSlideAnimation(false);
    setTimeout(() => {
      setSlideAnimation(true);
    }, 100);
  };

  const goToSlide = (slideIndex) => {
    setSlideAnimation(false);
    setCurrentSlide(slideIndex);
    slideUpHandler();
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    slideUpHandler();
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide(
        currentSlide === SLIDES.length - 1 ? 0 : currentSlide + 1
      );
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [currentSlide]);

  return (
    <>
      <Head>
        <title>Bank App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <main className='main'>
        <div className='wrapper'>
          <header className='header'>
            <div className='header__wrap'>
              <a href='/' className='logo'>
                <span></span>
              </a>
              <div className='pagination'>
                {SLIDES.map((_, slideIndex) => (
                  <button
                    key={slideIndex}
                    className={currentSlide === slideIndex ? 'active' : null}
                    onClick={() => goToSlide(slideIndex)}
                  >
                    <span></span>
                  </button>
                ))}
              </div>
            </div>
            <div className='slider'>
              <div
                className='slide'
                style={{
                  backgroundImage: `url(/banner-${currentSlide}.jpg)`,
                }}
              >
                <h1>
                  <div className='overflow-hidden'>
                    <span className={slideAnimation ? 'slide-up' : null}>
                      {SLIDES[currentSlide].copyTop}
                    </span>
                  </div>
                  <div className='overflow-hidden'>
                    <span
                      className={
                        slideAnimation ? 'slide-up slide-up-delay-1' : null
                      }
                    >
                      {SLIDES[currentSlide].copyBottom}
                    </span>
                  </div>
                </h1>
              </div>
            </div>
          </header>

          <section className='login'>
            <h2>Good morning</h2>
            <p>Sign on to manage your accounts.</p>
            <div className='inputs'>
              <input type='text' placeholder='Username' />
              <input type='text' placeholder='Password' />
              <button>Sign in</button>
            </div>
            <div className='options'>
              <a href=''>Forgot username</a>
              <span>|</span>
              <a href=''>password</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
