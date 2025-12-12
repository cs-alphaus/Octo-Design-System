// Typography design tokens - Vuetify 3 Material Design specifications
// Based on official Vuetify source code and Material Design typography scale

export interface TypographyStyle {
  name: string
  class: string
  fontSize: string
  fontWeight: string | number
  lineHeight: string | number
  letterSpacing?: string
  textTransform?: string
  sample: string
  usage: string
}

// Complete Vuetify typography scale with actual CSS specifications
export const typographyScale: TypographyStyle[] = [
  {
    name: 'Display Large',
    class: 'text-h1',
    fontSize: '6rem', // 96px
    fontWeight: 300,
    lineHeight: 1,
    letterSpacing: '-0.015625em',
    sample: 'Display Large',
    usage: 'Large hero headlines, page titles'
  },
  {
    name: 'Display Medium',
    class: 'text-h2',
    fontSize: '3.75rem', // 60px
    fontWeight: 300,
    lineHeight: 1,
    letterSpacing: '-0.0083333333em',
    sample: 'Display Medium',
    usage: 'Section headers, major headings'
  },
  {
    name: 'Display Small',
    class: 'text-h3',
    fontSize: '3rem', // 48px
    fontWeight: 400,
    lineHeight: 1.05,
    letterSpacing: 'normal',
    sample: 'Display Small',
    usage: 'Subsection headers'
  },
  {
    name: 'Headline Large',
    class: 'text-h4',
    fontSize: '2.125rem', // 34px
    fontWeight: 400,
    lineHeight: 1.175,
    letterSpacing: '0.0073529412em',
    sample: 'Headline Large',
    usage: 'Card titles, modal headers'
  },
  {
    name: 'Headline Medium',
    class: 'text-h5',
    fontSize: '1.5rem', // 24px
    fontWeight: 400,
    lineHeight: 1.333,
    letterSpacing: 'normal',
    sample: 'Headline Medium',
    usage: 'Component titles'
  },
  {
    name: 'Title Large',
    class: 'text-h6',
    fontSize: '1.25rem', // 20px
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.0125em',
    sample: 'Title Large',
    usage: 'Small component headers'
  },
  {
    name: 'Title Medium',
    class: 'text-subtitle-1',
    fontSize: '1rem', // 16px
    fontWeight: 'normal',
    lineHeight: 1.75,
    letterSpacing: '0.009375em',
    sample: 'Title Medium',
    usage: 'Card subtitles, secondary headings'
  },
  {
    name: 'Title Small',
    class: 'text-subtitle-2',
    fontSize: '0.875rem', // 14px
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.0071428571em',
    sample: 'Title Small',
    usage: 'Dense subtitles, small headers'
  },
  {
    name: 'Body Large',
    class: 'text-body-1',
    fontSize: '1rem', // 16px
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.03125em',
    sample: 'Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    usage: 'Primary body text, paragraphs'
  },
  {
    name: 'Body Medium',
    class: 'text-body-2',
    fontSize: '0.875rem', // 14px
    fontWeight: 400,
    lineHeight: 1.425,
    letterSpacing: '0.0178571429em',
    sample: 'Body Medium - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    usage: 'Secondary body text, captions'
  },
  {
    name: 'Label Large',
    class: 'text-button',
    fontSize: '0.875rem', // 14px
    fontWeight: 500,
    lineHeight: 2.6,
    letterSpacing: '0.0892857143em',
    textTransform: 'uppercase',
    sample: 'LABEL LARGE',
    usage: 'Button text, call-to-action labels'
  },
  {
    name: 'Label Medium',
    class: 'text-caption',
    fontSize: '0.75rem', // 12px
    fontWeight: 400,
    lineHeight: 1.667,
    letterSpacing: '0.0333333333em',
    sample: 'Label Medium',
    usage: 'Form labels, helper text'
  },
  {
    name: 'Label Small',
    class: 'text-overline',
    fontSize: '0.75rem', // 12px
    fontWeight: 500,
    lineHeight: 2.667,
    letterSpacing: '0.1666666667em',
    textTransform: 'uppercase',
    sample: 'LABEL SMALL',
    usage: 'Overlines, small labels'
  }
]

// Font weight specifications
export interface FontWeight {
  name: string
  class: string
  value: number
  sample: string
}

export const fontWeights: FontWeight[] = [
  {
    name: 'Thin',
    class: 'font-weight-thin',
    value: 100,
    sample: 'The quick brown fox jumps over the lazy dog'
  },
  {
    name: 'Light',
    class: 'font-weight-light',
    value: 300,
    sample: 'The quick brown fox jumps over the lazy dog'
  },
  {
    name: 'Regular',
    class: 'font-weight-regular',
    value: 400,
    sample: 'The quick brown fox jumps over the lazy dog'
  },
  {
    name: 'Medium',
    class: 'font-weight-medium',
    value: 500,
    sample: 'The quick brown fox jumps over the lazy dog'
  },
  {
    name: 'Bold',
    class: 'font-weight-bold',
    value: 700,
    sample: 'The quick brown fox jumps over the lazy dog'
  },
  {
    name: 'Black',
    class: 'font-weight-black',
    value: 900,
    sample: 'The quick brown fox jumps over the lazy dog'
  }
]

// Text utility classes
export interface TextUtility {
  category: string
  name: string
  class: string
  cssProperty: string
  cssValue: string
  description: string
  sample: string
}

export const textUtilities: TextUtility[] = [
  // Text Alignment
  {
    category: 'Alignment',
    name: 'Left Align',
    class: 'text-left',
    cssProperty: 'text-align',
    cssValue: 'left',
    description: 'Left aligned text',
    sample: 'Left aligned text example'
  },
  {
    category: 'Alignment',
    name: 'Center Align',
    class: 'text-center',
    cssProperty: 'text-align',
    cssValue: 'center',
    description: 'Center aligned text',
    sample: 'Center aligned text example'
  },
  {
    category: 'Alignment',
    name: 'Right Align',
    class: 'text-right',
    cssProperty: 'text-align',
    cssValue: 'right',
    description: 'Right aligned text',
    sample: 'Right aligned text example'
  },
  {
    category: 'Alignment',
    name: 'Justify',
    class: 'text-justify',
    cssProperty: 'text-align',
    cssValue: 'justify',
    description: 'Justified text',
    sample: 'Justified text spreads evenly across the full width of the container.'
  },

  // Text Decoration
  {
    category: 'Decoration',
    name: 'No Decoration',
    class: 'text-decoration-none',
    cssProperty: 'text-decoration',
    cssValue: 'none',
    description: 'Removes text decoration',
    sample: 'Text with no decoration'
  },
  {
    category: 'Decoration',
    name: 'Underline',
    class: 'text-decoration-underline',
    cssProperty: 'text-decoration',
    cssValue: 'underline',
    description: 'Underlined text',
    sample: 'Underlined text example'
  },
  {
    category: 'Decoration',
    name: 'Line Through',
    class: 'text-decoration-line-through',
    cssProperty: 'text-decoration',
    cssValue: 'line-through',
    description: 'Strikethrough text',
    sample: 'Strikethrough text example'
  },
  {
    category: 'Decoration',
    name: 'Overline',
    class: 'text-decoration-overline',
    cssProperty: 'text-decoration',
    cssValue: 'overline',
    description: 'Overlined text',
    sample: 'Overlined text example'
  },

  // Text Transform
  {
    category: 'Transform',
    name: 'Lowercase',
    class: 'text-lowercase',
    cssProperty: 'text-transform',
    cssValue: 'lowercase',
    description: 'Lowercase text',
    sample: 'lowercase text example'
  },
  {
    category: 'Transform',
    name: 'Uppercase',
    class: 'text-uppercase',
    cssProperty: 'text-transform',
    cssValue: 'uppercase',
    description: 'Uppercase text',
    sample: 'UPPERCASE TEXT EXAMPLE'
  },
  {
    category: 'Transform',
    name: 'Capitalize',
    class: 'text-capitalize',
    cssProperty: 'text-transform',
    cssValue: 'capitalize',
    description: 'Capitalized text',
    sample: 'Capitalized Text Example'
  },

  // Text Wrapping
  {
    category: 'Wrapping',
    name: 'No Wrap',
    class: 'text-no-wrap',
    cssProperty: 'white-space',
    cssValue: 'nowrap',
    description: 'Prevents text from wrapping',
    sample: 'This text will not wrap to the next line even if the container is narrow'
  },
  {
    category: 'Wrapping',
    name: 'Truncate',
    class: 'text-truncate',
    cssProperty: 'text-overflow',
    cssValue: 'ellipsis',
    description: 'Truncates text with ellipsis',
    sample: 'This text will be truncated with an ellipsis if it is too long...'
  },
  {
    category: 'Wrapping',
    name: 'Wrap',
    class: 'text-wrap',
    cssProperty: 'white-space',
    cssValue: 'normal',
    description: 'Allows text to wrap normally',
    sample: 'This text will wrap normally when it reaches the container boundary'
  },

  // Text Emphasis
  {
    category: 'Emphasis',
    name: 'Primary Text',
    class: 'text--primary',
    cssProperty: 'opacity',
    cssValue: '1',
    description: 'Primary text opacity (100%)',
    sample: 'Primary emphasis text'
  },
  {
    category: 'Emphasis',
    name: 'Secondary Text',
    class: 'text--secondary',
    cssProperty: 'opacity',
    cssValue: '0.7',
    description: 'Secondary text opacity (70%)',
    sample: 'Secondary emphasis text'
  },
  {
    category: 'Emphasis',
    name: 'Disabled Text',
    class: 'text--disabled',
    cssProperty: 'opacity',
    cssValue: '0.38',
    description: 'Disabled text opacity (38%)',
    sample: 'Disabled emphasis text'
  },

  // Font Style
  {
    category: 'Style',
    name: 'Italic',
    class: 'text-italic',
    cssProperty: 'font-style',
    cssValue: 'italic',
    description: 'Italic text style',
    sample: 'Italic text example'
  }
]

// Responsive breakpoints for typography
export const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'] as const
export type Breakpoint = typeof breakpoints[number]

// Font family specifications
export const fontFamilies = {
  primary: '"Roboto", sans-serif',
  monospace: '"Roboto Mono", monospace',
  display: '"Roboto", sans-serif'
} as const

// Helper function to get typography style by class name
export function getTypographyStyle(className: string): TypographyStyle | undefined {
  return typographyScale.find(style => style.class === className)
}

// Helper function to get font weight by class name
export function getFontWeight(className: string): FontWeight | undefined {
  return fontWeights.find(weight => weight.class === className)
}

// Helper function to get text utility by class name
export function getTextUtility(className: string): TextUtility | undefined {
  return textUtilities.find(utility => utility.class === className)
}

// Helper function to format CSS specifications
export function formatCSSSpec(style: TypographyStyle): string {
  const specs = [
    `font-size: ${style.fontSize}`,
    `font-weight: ${style.fontWeight}`,
    `line-height: ${style.lineHeight}`
  ]

  if (style.letterSpacing && style.letterSpacing !== 'normal') {
    specs.push(`letter-spacing: ${style.letterSpacing}`)
  }

  if (style.textTransform) {
    specs.push(`text-transform: ${style.textTransform}`)
  }

  return specs.join('; ')
}