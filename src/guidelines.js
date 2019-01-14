exports.createVerticalGuidesLines = (width, gutter, collums) => {
  const collum = (width - ((collums + 1) * gutter)) / collums
  const guideLines = Array(collums * 2 + 1)
    .fill(null)
    .map((x, i) => (i + 1) % 2 === 0 ? collum : gutter)
    .reduce((prev, current, index) => {
      prev.push(prev[prev.length - 1] + current)
      return prev
    }, [0])

  return guideLines
}
