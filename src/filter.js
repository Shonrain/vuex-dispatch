var captureFilters = function (c) {
  const filters = {}
  if (c.el.__v_model && c.el.__v_model.params && c.el.__v_model.params.number) {
    filters['number'] = true
  }
  return filters
}

export default captureFilters
