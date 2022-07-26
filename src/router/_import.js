module.exports = (file) => require('@/' + file).default

// module.exports = (file) => () => import('@/views/' + file + '.vue')
// module.exports = (file) => () => import('@/' + file)
