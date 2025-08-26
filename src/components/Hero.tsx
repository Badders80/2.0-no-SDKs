import React, { useRef, useEffect, useState } from 'react';
import evolutionLogoText from '../assets/Copy of Evolution Brand Kit (11 x 4 in).png';
import heroVideo from '../assets/jockey-walk-out.mp4';

/**
 * Full‑screen hero section with a darkened video background and
 * centred gold logo. There is no additional text here; the logo
 * alone anchors the page.
 */
export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [overlayOpacity, setOverlayOpacity] = useState(0.5);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const duration = video.duration;
      const current = video.currentTime;
      // Animate overlay from 0.5 to 0.8 in last 2 seconds
      if (duration && current > duration - 2) {
        const progress = Math.min((current - (duration - 2)) / 2, 1);
        setOverlayOpacity(0.5 + 0.3 * progress);
        if (progress === 1) setShowLogo(true);
      } else {
        setOverlayOpacity(0.5);
        setShowLogo(false);
      }
    };
    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  return (
  <section className="relative w-full aspect-video flex items-center justify-center overflow-hidden" style={{ minHeight: '60vh' }}>
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={heroVideo}
        autoPlay
        muted
        playsInline
        loop={false}
        style={{
          objectPosition: 'center 38%', // lower crop to match screenshot
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          transform: 'scale(1.15)',
        }}
      />
      {/* Animated dark overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
      {/* Fade-in logo/text image at end, aligned over shirt logo */}
  {/* ...existing code... */}
      {/* Centered EVOLUTION STABLES image */}
      <img
        src={require('../assets/Copy of Evolution Brand Kit (11 x 4 in).png')}
        alt="EVOLUTION STABLES"
        className="absolute left-1/2 top-1/2 z-20"
        style={{
          transform: 'translate(-50%, -50%)',
          width: '40vw',
          maxWidth: '900px',
          height: 'auto',
          pointerEvents: 'none',
        }}
      />
    </section>
  );
}
