export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const overlayVariants = {
  closed: {
    clipPath: "inset(0 0 100% 0)",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: EASE_OUT,
    },
  },
  open: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: EASE_OUT,
    },
  },
};

export const navItemVariants = {
  closed: {
    opacity: 0,
    y: 40,
    transition: { duration: 0.3, ease: EASE_OUT },
  },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1 + i * 0.06,
      ease: EASE_OUT,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.25,
      delay: i * 0.03,
      ease: EASE_OUT,
    },
  }),
};
