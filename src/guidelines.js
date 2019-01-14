exports.createVerticalGuidesLines = (width, gutter, collumns) => {
  const collumn = (width - ((collumns + 1) * gutter)) / collumns
  const guideLines = Array(collumns * 2 + 1)
    .fill(null)
    .map((x, i) => (i + 1) % 2 === 0 ? collumn : gutter)
    .reduce((prev, current, index) => {
      prev.push(prev[prev.length - 1] + current)
      return prev
    }, [0])

  return guideLines
}
