import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
        vibrant: {
          blue: '#0ea5e9',
          purple: '#8b5cf6',
          pink: '#ec4899',
          orange: '#f97316',
          green: '#10b981',
          teal: '#14b8a6',
          cyan: '#22d3ee',
          amber: '#f59e0b',
          red: '#ef4444',
          emerald: '#10b981',
        },
        modern: {
          slate: '#94a3b8',
          mint: '#a7f3d0',
          coral: '#fda4af',
          lavender: '#c4b5fd',
          sand: '#fde68a',
          sky: '#7dd3fc',
          indigo: '#818cf8',
          rose: '#fb7185',
          amber: '#fcd34d',
          lime: '#bef264',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.25)',
          dark: 'rgba(0, 0, 0, 0.15)',
          'light-hover': 'rgba(255, 255, 255, 0.35)',
          'dark-hover': 'rgba(0, 0, 0, 0.25)',
        },
        neon: {
          blue: '#00f2ff',
          purple: '#b300ff',
          pink: '#ff00e4',
          green: '#00ff66',
          yellow: '#ffdd00',
        }
  		},
      backdropFilter: {
        none: 'none',
        blur: 'blur(20px)',
        'blur-sm': 'blur(8px)',
        'blur-md': 'blur(16px)',
        'blur-lg': 'blur(24px)',
        'blur-xl': 'blur(40px)',
      },
      boxShadow: {
        'soft-sm': '0 2px 4px 0 rgba(0,0,0,0.05)',
        'soft-md': '0 4px 8px 0 rgba(0,0,0,0.05)',
        'soft-lg': '0 8px 16px 0 rgba(0,0,0,0.05)',
        'glow': '0 0 15px rgba(66, 153, 225, 0.5)',
        'inner-glow': 'inset 0 0 15px rgba(66, 153, 225, 0.5)',
        'around': '0 0 10px 2px rgba(0,0,0,0.08)',
        'neon-blue': '0 0 10px rgba(14, 165, 233, 0.6), 0 0 20px rgba(14, 165, 233, 0.4), 0 0 30px rgba(14, 165, 233, 0.2)',
        'neon-purple': '0 0 10px rgba(139, 92, 246, 0.6), 0 0 20px rgba(139, 92, 246, 0.4), 0 0 30px rgba(139, 92, 246, 0.2)',
        'neon-pink': '0 0 10px rgba(236, 72, 153, 0.6), 0 0 20px rgba(236, 72, 153, 0.4), 0 0 30px rgba(236, 72, 153, 0.2)',
        'neon-green': '0 0 10px rgba(16, 185, 129, 0.6), 0 0 20px rgba(16, 185, 129, 0.4), 0 0 30px rgba(16, 185, 129, 0.2)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-card': '0 8px 32px 0 rgba(31, 38, 135, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
        'glass-card-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'inner-light': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.5)',
        '3d-effect': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1), 0 -2px 0 0 rgba(255, 255, 255, 0.25) inset, 0 -6px 16px -6px rgba(255, 255, 255, 0.1) inset',
        'elevation': '0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)',
        'elevation-hover': '0 1px 3px rgba(0, 0, 0, 0.1), 0 8px 20px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-candy': 'linear-gradient(to right, #f97316, #ec4899)',
        'gradient-ocean': 'linear-gradient(to right, #0ea5e9, #8b5cf6)',
        'gradient-lime': 'linear-gradient(to right, #10b981, #a7f3d0)',
        'gradient-sunset': 'linear-gradient(to right, #ff7e5f, #feb47b)',
        'gradient-space': 'linear-gradient(to right, #434343, #000000)',
        'gradient-peach': 'linear-gradient(to right, #ed4264, #ffedbc)',
        'gradient-royal': 'linear-gradient(to right, #141e30, #243b55)',
        'gradient-emerald': 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        'gradient-purple': 'linear-gradient(to right, #c33764, #1d2671)',
        'gradient-mojito': 'linear-gradient(to right, #1d976c, #93f9b9)',
        'mesh-1': 'radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)',
        'mesh-2': 'radial-gradient(at 87% 19%, hsla(203,87%,61%,1) 0px, transparent 50%), radial-gradient(at 40% 100%, hsla(251,87%,63%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(324,91%,70%,1) 0px, transparent 50%)',
        'noise': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Lexend', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        modern: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        title: ['Clash Display', 'Lexend', 'system-ui', 'sans-serif'],
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
        'full': '9999px',
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        zoom: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        'bounce-light': {
          '0%, 100%': { transform: 'translateY(-3%)' },
          '50%': { transform: 'translateY(0)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'scale-up': {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(66, 153, 225, 0.5)' },
          '50%': { boxShadow: '0 0 25px rgba(66, 153, 225, 0.8)' },
        },
        'neon-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(14, 165, 233, 0.7), 0 0 10px rgba(14, 165, 233, 0.5), 0 0 15px rgba(14, 165, 233, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 10px rgba(14, 165, 233, 0.8), 0 0 20px rgba(14, 165, 233, 0.6), 0 0 30px rgba(14, 165, 233, 0.4)' 
          },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
        float: 'float 3s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        rotate: 'rotate 3s linear infinite',
        'rotate-slow': 'rotate 6s linear infinite',
        'rotate-fast': 'rotate 1.5s linear infinite',
        zoom: 'zoom 2s ease-in-out infinite',
        'bounce-light': 'bounce-light 2s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-out': 'fade-out 0.5s ease-out',
        'scale-up': 'scale-up 0.3s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-out-left': 'slide-out-left 0.3s ease-out',
        glow: 'glow 2s ease-in-out infinite',
        'neon-pulse': 'neon-pulse 2s infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
  		},
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'bounce-out': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'spring': 'cubic-bezier(0.5, 0, 0.3, 1.65)',
        'ease-in-out-quint': 'cubic-bezier(0.83, 0, 0.17, 1)',
      }
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
} satisfies Config;
