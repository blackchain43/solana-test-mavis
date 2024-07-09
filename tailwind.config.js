module.exports = {
  content: [
    './src/**/*.js',
    './src/components/**/*.js',
    './src/**/*.ts',
    './src/components/**/*.ts',
    './src/**/*.jsx',
    './src/components/**/*.jsx',
    './src/**/*.tsx',
    './src/components/**/*.tsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'linear/1': 'linear-gradient(105.72deg, #233f3800 -6.59%, #81ada220 112.75%)',
        'linear/2': 'linear-gradient(146.05deg, rgba(35, 63, 56, 0.4) 20.13%, rgba(129, 173, 162, 0.1) 123.51%)',
        'linear/3': 'linear-gradient(123.14deg, #5EE5D5 47.12%, #224747 102.88%)',
        'linear/4': 'linear-gradient(251.39deg, rgba(255, 255, 255, 0) -5.32%, rgba(255, 255, 255, 0.2) 55.29%, rgba(255, 255, 255, 0) 107.67%)',
        'linear/5': 'linear-gradient(155deg, #5EE5D5 -82.29%, #0C1C17 52.22%)',
        'linear/6': 'linear-gradient(105.72deg, rgba(243, 186, 47, 0) -6.59%, rgba(243, 186, 47, 0.2) 112.75%)',
      },
      animation: {
        fade: 'fade .5s linear',
        fadeDownVisible: 'fade-down-visible .2s linear forwards',
        fadeDownInvisible: 'fade-down-invisible .2s linear forwards',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
        'fade-down-visible': {
          '0%': { opacity: '0%', transform: 'translateY(-100%)' },
          '100%': { opacity: '100%', transform: 'translateY(0%)' },
        },
        'fade-down-invisible': {
          '0%': { opacity: '100%', transform: 'translateY(0%)' },
          '100%': { opacity: '0%', transform: 'translateY(100%)' },
        },
        'ma-bounce': {
          '0%, 100%': {
            transform: 'translateY(-5%)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
        },
      },
      colors: {
        // Configure your color palette here
        'primary-100': '#7756FA',
        'secondary-100': '#1A1C35',
        'primary-900': '#BCA4FD',
        'secondary-900': '#303363',
        primary: '#7756FA',
        'primary/buy': '#0CBF79',
        'primary/sell': '#EA465B',
        'primary/80': '#8D73F6',
        'primary/60': '#BCA4FD',
        'primary/20': '#9F9DF3',
        'neutrals/1': '#393939',
        'neutrals/2': '#000000',
        'neutrals/3': '#151515',
        'neutrals/4': '#282828',
        'neutrals/5': '#545454',
        'neutrals/6': '#A0A0A0',
        'neutrals/7': '#C9C9C9',
        'neutrals/8': '#FFFFFF',
        'primary/1': '#5EE5D5',
        'primary/2': '#F3BA2F',
        'primary/3': '#2DD0B3',
        'primary/sell1': '#EA465B',
        'primary/sell2': '#FF9BA8',
        'semantic/success': '#18A84C',
        'semantic/caution': '#FFA012',
        'semantic/error': '#EE4730',
        'semantic/informative': '#2985F4',
        'semantic/favorite': '#E7E159',
      },
    },
  },
  plugins: [],
};
