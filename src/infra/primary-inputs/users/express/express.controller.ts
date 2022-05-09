const getAll = ((req: any, res: any) => {
  const params = req.params
  res.json({'prueba': 'prueba'})
})

module.exports = {
  getAll,
}