import ModuleAlias from 'module-alias'

ModuleAlias.addAliases({
  '@core': `${__dirname}/@core`,
  '@apps': `${__dirname}/apps`,
  '@config': `${__dirname}/config`,
  '@database': `${__dirname}/database`,
  '@routes': `${__dirname}/routes`,
})
