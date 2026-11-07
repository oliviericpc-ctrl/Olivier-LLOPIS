import React from 'react';

interface EsporTecLogoProps {
  className?: string;
  withBaseline?: boolean;
  lightMode?: boolean; // If true, dark text on light background; if false, white text on dark background
  alt?: string;
}

export const EsporTecLogo: React.FC<EsporTecLogoProps> = ({
  className = "h-14 w-auto",
  withBaseline = true,
  lightMode = true,
  alt = "ESPORTEC ECO-INDUSTRIEL - La qualité environnementale vue du sol"
}) => {
  // Determine official logo asset source based on baseline option and theme mode
  let src = '/assets/esportec_logo_official_transp.png';
  if (withBaseline) {
    src = lightMode 
      ? '/assets/esportec_logo_official_transp.png' 
      : '/assets/esportec_logo_official_white.png';
  } else {
    src = lightMode 
      ? '/assets/esportec_logo_compact_transp.png' 
      : '/assets/esportec_logo_compact_white.png';
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`object-contain select-none max-w-full ${className}`}
      loading="eager"
      decoding="async"
      onError={(e) => {
        // Safe fallback to default official png
        const target = e.currentTarget;
        if (!target.src.endsWith('/assets/esportec_logo_official.png')) {
          target.src = '/assets/esportec_logo_official.png';
        }
      }}
    />
  );
};

