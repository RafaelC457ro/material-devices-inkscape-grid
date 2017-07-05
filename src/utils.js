exports.dpToPixel = dp => {
  const BASEDPI = 160
  const dpis = [{
      label: 'ldpi',
      value: 120,
      scale: '0.75'
    },
    {
      label: 'mdpi',
      value: 160,
      scale: '1.0'
    },
    {
      label: 'hdpi',
      value: 240,
      scale: '1.5'
    },
    {
      label: 'xhdpi',
      value: 320,
      scale: '2.0'
    },
    {
      label: 'xxhdpi',
      value: 480,
      scale: '3.0'
    },
    {
      label: 'xxxhdpi',
      value: 640,
      scale: '4.0'
    }
  ]

  return dpis.map(dpi => {
    return {
      label: dpi.label,
      scale: dpi.scale,
      pixel: dp * (dpi.value / BASEDPI)
    }
  })
}
